import React, { useRef } from "react";

import { useGLTF } from "@react-three/drei";
// @ts-ignore
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

interface Props {
  isRotating: boolean;
}
const Sky: React.FC<Props> = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<any>();

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
