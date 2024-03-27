import express from 'express';
import dotenv from 'dotenv';
import prueba from './prueba.js';
import userRoutes from './routes/usuarioRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import cors from 'cors'

import connectDB from './config/db.js';

const app = express();
app.use(cors())
app.use(express.json());
dotenv.config()
connectDB();

//Routing
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`istening at ${PORT}.`);
});