import { auth } from "../controllers/auth.controller";

const authRoutes = (app) => {
  app.post("/auth/login", auth);
};

export default authRoutes;
