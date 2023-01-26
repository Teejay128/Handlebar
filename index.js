const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})