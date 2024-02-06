import React, { useEffect, useRef } from "react";
// @ts-ignore
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { ModelsObjectDetails } from "../models/ModelsObjectDetailsModel";
import { Euler } from "three";

interface Props {
  planeScale: number[];
  planePosition: number[];
  isRotating: boolean;
  rotation?: Euler | undefined;
}
const Plane: React.FC<Props> = ({ isRotating, ...props }) => {
  const ref = useRef<any>();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
