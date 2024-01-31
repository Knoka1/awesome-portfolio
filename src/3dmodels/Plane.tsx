import React from "react";

import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";
import { ModelsObjectDetails } from "../models/ModelsObjectDetailsModel";

const Plane: React.FC<ModelsObjectDetails> = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
