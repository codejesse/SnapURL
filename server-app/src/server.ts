import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from "./config/dbConfig";
import snapUrl from "./routes/snapUrl"

dotenv.config();
connectDb();

const port = process.env.PORT || 5001

const app = express()
app.use(express.json()) //Json middleware
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "https://localhost:3000",
    credentials: true
}));

app.use("/api/", snapUrl)


app.listen(port, () => {
    console.log(`server started successfully on ${port}`)
})
