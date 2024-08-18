import user from "../Models/user.model.js";
import becrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { UserName, fullName, password, dob } = req.body;
    console.log(UserName);
    if (!UserName || !fullName || !password || !dob) {
      return res
        .status(404)
        .json({ message: "All Field Required", success: false });
    }
    const userExist = await user.findOne({ UserName });
    if (userExist) {
      return res
        .status(404)
        .json({ message: "User Already Exist", success: false });
    }
    const hashedPassword = becrypt.hash(password, 10);
    await user.create({
      UserName: UserName,
      fullName: fullName,
      password: hashedPassword,
      dob: dob,
    });
  } catch (error) {
    console.log(error);
  }
};
