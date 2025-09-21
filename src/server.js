import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

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

app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
})