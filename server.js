const express = require('express');
const path = require('path');
const ytdl = require('ytdl-core');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/download', (req, res) => {
    const url = req.body.url; // Ambil URL dari form
    if (ytdl.validateURL(url)) {
        // Proses download
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(url, { format: 'mp4' }).pipe(res);
    } else {
        res.send('URL tidak valid');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));