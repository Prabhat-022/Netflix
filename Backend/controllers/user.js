import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid data from login",
                success: false
            })
        };
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }
        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }
        const tokenData = {
            id: user._id
        }

        const token = jwt.sign(tokenData, "sjkeirjfdijljdfjijlfjdlfs", { expiresIn: "1d" });

        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome back ${user.fullname}`,
            success: true
        })

    } catch (error) {

        console.log(error);
    }

}
// export const Logout = async (req, res) => {
//     return res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
//         message: "User logged out successfully",
//         success: true,
//     });
// }
export const Logout = async (req, res) => {
    return res.status(200).cookie("token", "", { expires: new Date(0), httpOnly: true }).json({
        message: "User logged out successfully",
        success: true,
    });
}


export const Register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(401).json({
                message: "Invalid data from register in backend",
                success: false
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "This email is already used",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16)

        await User.create({
            fullname,
            email,
            password: hashedPassword
        })

        return res.status(200).json({
            message: "Account created successfully",
            success: true
        })

    } catch (error) {
        console.log("Register Backend error", error)

    }

}