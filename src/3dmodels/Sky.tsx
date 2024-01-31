import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { ModelsObjectDetails } from "../models/ModelsObjectDetailsModel";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";
import { HTMLMesh } from "three/examples/jsm/Addons.js";

const Sky: React.FC<ModelsObjectDetails> = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
