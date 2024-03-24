const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

// Initialize upload with a file size limit
const upload = multer({
    storage: storage,
    limits: { fileSize: 30 * 1024 * 1024 } // 5MB size limit
}).single('fileToUpload');

// Serve the file upload form
app.get('/', (req, res) => {
    res.send(`
        <h2>Upload File</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" />
            <input type="submit" value="Upload File" />
        </form>
    `);
});

// Handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send('File size is too large. Max limit is 5MB.');
        } else if (err) {
            return res.status(500).send(err.message);
        }
        res.send('File uploaded successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
