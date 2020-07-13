const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'This is a twoot, this is a twat'
    });
});

app.listen(5000, () =>{
    console.log('Listening on http://localhost:5000');
});