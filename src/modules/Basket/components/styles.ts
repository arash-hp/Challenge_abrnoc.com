import { SxRecord } from "../../../types/general";

export const styles: SxRecord<"modal"> = {
  modal: () => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
};
