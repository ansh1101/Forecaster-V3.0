const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const weatherRoute = require('./routes/weather');

app.set('view engine', 'ejs');

app.use('/', weatherRoute);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server starting at port ${PORT}`));