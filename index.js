const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}))
app.set('view engine', 'hbs')
app.set('views', './views');

app.use(express.static('public'))

const fakeApi = () => {
    return[
        {
            name: "Chainsaw",
            holder: "Denji"
        },
        {
            name: "Blood",
            holder: "Power"
        },
        {
            name: "Future",
            holder: "Aki"
        },
        {
            name: "Collosal",
            holder: "Armin"
        },
        {
            name: "Control",
            holder: "Makima"
        },
        {
            name: "Jaw",
            holder: "Falco"
        },
    ]
}

app.get('/', (req, res) => {
    res.render('main', { layout: 'index', jinjurikis: fakeApi()})
})

app.listen(3000, (req, res) => {
    console.log('Server running on port 3000')
})