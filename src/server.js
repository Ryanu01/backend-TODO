import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

//get path name
const __filename = fileURLToPath(import.meta.url);

//get directory name
const __dirname = dirname(__filename);

app.use(express.json());

//help to load the file outside the src folder
app.use(express.static(path.join(__dirname, '../public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//Routes
app.use('/auth', authRoutes);
app.use('/todos', authMiddleware, todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
})