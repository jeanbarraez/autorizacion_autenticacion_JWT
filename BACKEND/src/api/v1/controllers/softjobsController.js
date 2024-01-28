import { findError } from "../utils/utils.js";
import { getSoftModel } from "../models/softjobsModel.js";

export const getAllsoft = async (req, res) => {
  try {
    const sotf = await getSoftModel();
    res.status(200).json({ sotf: sotf });
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
