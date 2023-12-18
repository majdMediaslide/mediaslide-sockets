import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class AuthService {
  authorize(token: string) {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET ?? "",
      (err, data) => {
        if (err) {
        }
      }
    );
  }
}
