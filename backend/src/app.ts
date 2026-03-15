import express from "express";
import cors from "cors";
import router from "./routes";
import passport from "passport";
import "./config/passport";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use("/api", router);
/*app.get("/", (req, res) => {
  res.json({ message: "AagriCore Auth API running" });
});*/

export default app;
