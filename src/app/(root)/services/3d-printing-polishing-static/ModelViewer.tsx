"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

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
    <div className="relative w-full h-[500px] bg-black/50 rounded-lg p-2 border border-gray-300/20 mb-10">
      <Suspense
        fallback={
          <div className="text-white text-center m-auto p-auto h-full w-full">
            <Loading />
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          {/* Lighting setup */}
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={0.4} groundColor={"#444"} />
          <directionalLight position={[10, 10, 10]} intensity={1} />

          <Controls />

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

      {/* Reset Button */}
      <button
        onClick={() => window.dispatchEvent(new Event("reset-camera"))}
        className="absolute top-2 right-2 bg-red-900 hover:bg-white hover:text-red-700 text-white text-sm px-3 py-2 rounded shadow font-light transition duration-300 z-50"
      >
        Reset View
      </button>
    </div>
  );
}

function Controls() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const { camera, scene, gl } = useThree();

  useEffect(() => {
    const reset = () => {
      // Compute bounding box of all objects in the scene
      const box = new THREE.Box3().setFromObject(scene);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      // Fit camera to object
      const maxDim = Math.max(size.x, size.y, size.z);
      let cameraZ = 5; // default distance

      if ("fov" in camera) {
        // PerspectiveCamera
        const fov = (camera.fov * Math.PI) / 180;
        cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)));
        cameraZ *= 1.5; // add margin
        camera.position.set(center.x, center.y, cameraZ);
      } else {
        // OrthographicCamera
        camera.position.set(center.x, center.y, camera.position.z);
      }
      camera.lookAt(center);

      if (controlsRef.current) {
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }

      gl.render(scene, camera);
    };

    window.addEventListener("reset-camera", reset);
    return () => window.removeEventListener("reset-camera", reset);
  }, [camera, scene, gl]);

  return <OrbitControls ref={controlsRef} enablePan={false} makeDefault />;
}

function GltfModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);

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

useGLTF.preload("/dummy.gltf");
