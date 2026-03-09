import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/userSchema.js";

dotenv.config({ path: "./.env" });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database Connected...");

    const existingUser = await User.findOne({ email: "kuresusahu18@gmail.com" });
    if (existingUser) {
      console.log("⚠️ Admin already exists!");
      process.exit();
    }

    await User.create({
      fullName: "Kuresu Sahu",
      email: "kuresusahu18@gmail.com",
      password: "Hello@World",
      phone: "917008903717",
      aboutMe: "Full Stack Developer",
      portfolioURL: "https://your-portfolio.com",
      avatar: { public_id: "dummy", url: "https://placehold.co/400" },
      resume: { public_id: "dummy", url: "https://placehold.co/400" }
    });
    console.log("🎉 Admin Created! Login now.");
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
};
seedAdmin();