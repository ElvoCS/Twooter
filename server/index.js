const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/twooter');
const mews = db.get('mews');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'This is a twoot, this is a twat'
    });
});

app.get('/news', (req,res) => {
mews
    .find()
    .then(mews => {
        res.json(mews);
    })
});

function isValidNews(mew) {
    return mew.name && mew.name.toString().trim() !== '' &&
        mew.content && mew.content.toString().trim() !== '';
}

app.post('/news', (req, res) => {
    if(isValidNews(req.body)){
        //insert into db
        const mew = {
            //validation
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        };

        mews
        .insert(mew)
        .then(createdMew => {
            res.json(createdMew);
        });

    } else {
        res.status(422)
        res.json({
            message : 'Name and content is required!'
        });
    }
});

app.listen(5000, () =>{
    console.log('Listening on http://localhost:5000');
});