const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/files', async (req, res) => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'docs'));
        const mdFiles = files.filter(file => path.extname(file) === '.md');
        res.json(mdFiles);
    } catch (error) {
        res.status(500).json({ error: 'Error reading directory' });
    }
});

app.get('/api/file/:filename', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'docs', req.params.filename);
        const content = await fs.readFile(filePath, 'utf-8');
        res.send(content);
    } catch (error) {
        res.status(404).json({ error: 'File not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
