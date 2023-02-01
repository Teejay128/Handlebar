const express = require('express')
const { allPosts, getPost, newPost} = require('./fakeApi')
// const { engine } = require('express-handlebars')

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.engine('hbs', engine({
//     layoutsDir: `${__dirname}/views/layouts`,
//     extname: 'hbs',
//     defaultLayout: 'index',
//     partialsDir: `${__dirname}/views/partials`
// }))
// app.set('view engine', 'hbs')
// app.set('views', './views');

// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(allPosts())
})

app.get('/new', (req, res) => {
    let author = req.body.author
    let content = req.body.content

    newPost(author, content)
    res.send(`${author} made a new post`)
})

app.get('/:id', (req, res) => {
    res.send(getPost(req.params.id))
})


// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     // res.render('main', { layout: 'index', jinjurikis: fakeApi()})
// })

app.listen(3000, (req, res) => {
    console.log(`Server is running on port: 3000`)
})