import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectToDb } from "./lib/db.js";

dotenv.config();

const app = express()

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/api/auth/login`)
    connectToDb();
})