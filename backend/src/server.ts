import app from "./app";
import { AppDataSource } from "./database/data-source";
import { env } from "./config/env";

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");

    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed", error);
  }
}

startServer();
