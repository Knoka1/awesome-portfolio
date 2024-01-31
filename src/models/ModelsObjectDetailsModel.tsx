export interface ModelsObjectDetails {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  position: number[];
  scale: number[];
  rotation: number[];
}
