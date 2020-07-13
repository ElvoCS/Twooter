const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'This is a twoot, this is a twat'
    });
});

app.post('/news', (req, res) => {
    if(isValidNew(req.body)){
        //insert into db
    }else{
        res.status(422)
        res.json({
            message : 'Name and content is required!'
        })
    }
});

app.listen(5000, () =>{
    console.log('Listening on http://localhost:5000');
});