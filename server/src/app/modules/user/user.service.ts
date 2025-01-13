import userModel from "./user.model";

const createUserService = async (userData: object) => {
  try {
    const newUser = new userModel(userData);
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new Error(`Failed to create user: ${err instanceof Error?err.message:"Something went wrong"}`);
  }
};


const userServices = {
  createUserService,
}

export default userServices;
