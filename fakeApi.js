const fakeDb = [];

function allPosts(){
    return fakeDb
}

function getPost(i){
    return fakeDb[i - 1]
}

function createPost(author, content){
    fakeDb.push({
        author,
        content
    })
}

function deletePost(i) {
    fakeDb.splice(i - 1, 1)
}

function updatePost(i, author, content) {
    fakeDb[i - 1].author = author
    fakeDb[i - 1].content = content
}

// TESTING THE FUNCTIONS
// Should return an empty database
console.log(allPosts())

// []

// Should add 3 posts to the database
createPost("Elon Musk", "I am buying cocacola")
createPost("Hack Sultan", "Techies Assemble")
createPost("Aribad Awulo", "Day 1 of #365daysofcode")

// Should return the database with 3 posts
console.log(allPosts())

// [
//     { author: 'Elon Musk', content: 'I am buying cocacola' },
//     { author: 'Hack Sultan', content: 'Techies Assemble' },
//     { author: 'Aribad Awulo', content: 'Day 1 of #365daysofcode' }
// ]

// Should return the second post in the database
console.log(getPost(2))

//  { author: 'Hack Sultan', content: 'Techies Assemble' }

// Should delete the first post
deletePost(1)

// Should return the entire database
console.log(allPosts())

// [
//     { author: 'Hack Sultan', content: 'Techies Assemble' },
//     { author: 'Aribad Awulo', content: 'Day 1 of #365daysofcode' }
// ]

// Should update the second post
updatePost(2, "Aribad Awulo", "Day 2 of #365daysofcode")

// Should return the entire database
console.log(allPosts())

// [
//     { author: 'Hack Sultan', content: 'Techies Assemble' },
//     { author: 'Aribad Awulo', content: "Day 2 of #365daysofcode" }
// ]

module.exports = {
    allPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}