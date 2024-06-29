const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });


const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello world!');
  });

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Received');
})
