"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useEffect, useState, Suspense } from "react";
import Loading from "./loading";

export default function ModelViewer({ file }: { file: File | null }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  if (!file || !url) return null;

  return (
    <div className="w-full h-[500px] bg-black/50 rounded-lg p-2 border border-gray-300/20 mb-10">
      <Suspense
        fallback={
          <div className="text-white text-center m-auto p-auto h-full w-full">
            <Loading />
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls makeDefault />

          {/* Auto-center, fit, and scale the model with padding */}
          <Bounds fit clip observe margin={1.2}>
            <Center>
              {file.name.endsWith(".gltf") || file.name.endsWith(".glb") ? (
                <GltfModel url={url} />
              ) : file.name.endsWith(".stl") ? (
                <StlModel url={url} />
              ) : file.name.endsWith(".obj") ? (
                <ObjModel url={url} />
              ) : null}
            </Center>
          </Bounds>
        </Canvas>
      </Suspense>
    </div>
  );
}

function GltfModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function StlModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url);
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="gray" metalness={0.2} roughness={0.6} />
    </mesh>
  );
}

function ObjModel({ url }: { url: string }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} />;
}

// Preload GLTF loader so Next.js doesn’t complain
useGLTF.preload("/dummy.gltf");
