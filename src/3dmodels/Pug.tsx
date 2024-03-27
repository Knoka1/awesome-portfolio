/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// @ts-ignore
import scene from "../assets/3d/bullpuppy.glb";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "three";
// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
interface ModelObjectDetails {
  currentAnimation: string;
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
}
type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    mat_0: THREE.MeshPhysicalMaterial;
  };
};
const Pug: React.FC<ModelObjectDetails> = ({
  currentAnimation,
  scale,
  ...props
}) => {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(scene) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation]?.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} scale={scale}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0.75]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="skeleton_#0_35">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.mat_0}
                    skeleton={nodes.Object_7.skeleton}
                    morphTargetDictionary={nodes.Object_7.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_7.morphTargetInfluences}
                  />
                  <group name="Object_0_34" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Fox;
