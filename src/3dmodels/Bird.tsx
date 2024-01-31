import React from "react";

import birdScene from "../assets/3d/bird.glb";
import { useGLTF } from "@react-three/drei";
import { ModelsObjectDetails } from "../models/ModelsObjectDetailsModel";

const Bird: React.FC<ModelsObjectDetails> = () => {
  const { scene, animations } = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
