import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret";

import { prisma } from "../services/prisma";

export const authUser = async (loginDto) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    //compare password db.user // o compare retorne um bool
    const isPasswordMatching = await compare(loginDto.password, user.password);

    if (!isPasswordMatching) {
      throw new Error("Invalid username or password");
    }

    //gerando o token com o sign do JWT
    const accessToken = sign(
      {
        id: user.id,
        email: user.email,
      },
      jsonSecret.secret,
      {
        expiresIn: 86400,
      }
    );

    return accessToken;
  } catch (error) {
    console.error("Authentication error:", error.message);
    throw error; // Rethrow the error for further handling, if needed.
  }
};
