import DualDriveVisual from "./DualDriveVisual";
import SpinPalsVisual from "./SpinPalsVisual";

export const gameVisuals: Record<string, React.ComponentType> = {
  dualdrive: DualDriveVisual,
  spinpals: SpinPalsVisual,
};
