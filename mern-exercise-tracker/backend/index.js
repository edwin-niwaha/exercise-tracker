import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import exercisesRouter from './routes/exercises.js';
import userRouter from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.DB_URI;
await mongoose.connect(url)
.then(() => console.log(`MongoDB connection established.`))
.catch((error) => console.error("MongoDB connection failed:", error.message))

// use routes
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
});
