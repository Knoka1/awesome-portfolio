export interface ModelsObjectDetails {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
  currentFocusPoint: number;
  position: number[];
  scale: number[];
  rotation: number[];
}
