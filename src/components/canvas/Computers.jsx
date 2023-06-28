import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// we use mesh when dealing with threeJS elements
// inside of the mesh we have to create a light, otherwise
// we won't be able to see anything
// near the mesh we will also add a point of light (pointLight)
// that you will see on the monitor

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      // [x, y, z]
      // fov = Field Of View which means how wide
      // our fov is going to be
      camera={{ position: [20, 3, 5], fov: 25 }}
      // this value needs to be there to properly render our model
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* this Suspense is coming from React and is a loader
      while our 3D model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* allows to move the model to left and right with the mouse */}
        <OrbitControls
          enableZoom={false}
          // these angles allow us to rotate the model only around a
          // specific angle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
