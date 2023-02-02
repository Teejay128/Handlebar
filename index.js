const express = require('express')
const fakeApi = require('./fakeApi')
const { allPosts, getPost, createPost, deletePost, updatePost } = fakeApi
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
    let posts = allPosts()
    res.send(posts)
})

app.post('/', (req, res) => {
    let author = req.body.author
    let content = req.body.content

    createPost(author, content)
    res.send(`${author} made a new post`)
})

app.get('/:id', (req, res) => {
    let id = req.params.id
    let post = getPost(id)

    res.send(post)
})

app.put('/:id', (req, res) => {
    let id = req.params.id
    let author = req.body.author
    let content = req.body.content

    updatePost(id, author, content)
    res.send(`Post ${id} was updated`)
})

app.delete('/:id', (req, res) => {
    let id = req.params.id

    deletePost(id)
    res.send(`Post ${id} was deleted`)
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     // res.render('main', { layout: 'index', jinjurikis: fakeApi()})
// })

app.listen(3000, (req, res) => {
    console.log(`Server is running on port: 3000`)
})