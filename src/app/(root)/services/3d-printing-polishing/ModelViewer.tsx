"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";
import * as THREE from "three";

export default function ModelViewer({ file }: { file?: File | null }) {
  const [url, setUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    let objectUrl: string | null = null;

    if (file) {
      objectUrl = URL.createObjectURL(file);
      setUrl(objectUrl);
      setFilename(file.name);
    } else {
      const queryFile = searchParams.get("file");
      if (queryFile) {
        setFilename(queryFile);
        const fakeServerPath = `/uploads/${queryFile}`;
        setUrl(fakeServerPath);
      }
    }

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file, searchParams]);

  if (!url || !filename) return null;

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
          {/* Lighting setup (lightweight, good performance) */}
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={0.4} groundColor={"#444"} />
          <directionalLight position={[10, 10, 10]} intensity={1} />

          <OrbitControls makeDefault />

          {/* Auto center + zoom */}
          <Bounds fit clip observe margin={1.2}>
            <Center>
              {filename.toLowerCase().endsWith(".gltf") ||
              filename.toLowerCase().endsWith(".glb") ? (
                <GltfModel url={url} />
              ) : filename.toLowerCase().endsWith(".stl") ? (
                <StlModel url={url} />
              ) : filename.toLowerCase().endsWith(".obj") ? (
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

  // Override material color to white
  scene.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.color.set("white");
          }
        });
      } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.color.set("white");
      }
    }
  });

  return <primitive object={scene} />;
}

function StlModel({ url }: { url: string }) {
  const geometry = useLoader(STLLoader, url) as THREE.BufferGeometry;
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="white" metalness={0.1} roughness={0.7} />
    </mesh>
  );
}

function ObjModel({ url }: { url: string }) {
  const obj = useLoader(OBJLoader, url) as THREE.Object3D;

  // Force OBJ meshes to white
  obj.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.material = new THREE.MeshStandardMaterial({
        color: "white",
        metalness: 0.1,
        roughness: 0.7,
      });
    }
  });

  return <primitive object={obj} />;
}

// Preload dummy to prevent Next.js warnings
useGLTF.preload("/dummy.gltf");
