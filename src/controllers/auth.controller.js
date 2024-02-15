import { authUser } from "../repositorys/auth.repository";

export const auth = async (req, res) => {
  const { email, password } = req.body;
  try {
    const auth = await authUser({ email, password });
    res.status(200).send(auth);
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
