const express = require('express');

const app = express();

const format = require('date-format');
//const { json } = require('express');

const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json'); ignore while using ymal 
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {

    res.status(200).send('hello world');
});

app.get("/api/v1/insta", (req, res) => {

    const insta = {
        Name: "sundar",
        follower: 33,
        following: 55,
        date: format.asString(new Date()),
    };
    res.status(200).json({ insta })
});

app.get("/api/v1/faceBook", (req, res) => {

    const faceBook = {
        Name: "sundar",
        Likes: 34,
        Comments: 55,
        date: format.asString('dd[hh]-hh:mm:ss', new Date()),
    };
    res.status(200).json({ faceBook })
});


app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
})

app.listen(port, () => {

    console.log(`All server are up and running on port ${port} `);
})