import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Drone = ({ isMobile }) => {
  const drone = useGLTF("./drone/scene.gltf");

  return (
    <Float speed={2.75} rotationIntensity={2} floatIntensity={2}>
      <mesh>
        <hemisphereLight intensity={2} groundColor="black" />
        <spotLight
          position={[10, 0, 20]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[0, -30, 0]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[-20, 0, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[6, -50, -50]}
          angle={0}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <spotLight
          position={[10, 50, 10]}
          angle={0}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={2} />

        <primitive
          object={drone.scene}
          scale={isMobile ? 1.5 : 2}
          position={isMobile ? [0, -2, 0] : [0, -1.2, 0]}
          rotation={[0.13, 1, 0.1]}
        />
      </mesh>
    </Float>
  );
};

const DroneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [29, 1, 6], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Drone isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DroneCanvas;
