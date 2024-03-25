import express from 'express';
import dotenv from 'dotenv';
import prueba from './prueba.js';
import userRoutes from './routes/usuarioRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

import connectDB from './config/db.js';

const app = express();
app.use(express.json());
dotenv.config()
connectDB();

//Routing
app.use('/api/usuarios', userRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`istening at ${PORT}.`);
});