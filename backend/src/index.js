import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001

app.use("/api/auth", authRoutes)

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/api/auth/login`))