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
createPost("Mr meat", "The sea is red, IMO")
createPost("Mr fish", "The sea is blue, IMO")
createPost("Mr egg", "The sea is yellow, IMO")

// Should return the database with 3 posts
console.log(allPosts())

// [
//     { author: 'Mr meat', content: 'The sea is red, IMO' },
//     { author: 'Mr fish', content: 'The sea is blue, IMO' },
//     { author: 'Mr egg', content: 'The sea is yellow, IMO' }
// ]

// Should return the second post in the database\
console.log(getPost(2))

//  { author: 'Mr fish', content: 'The sea is blue, IMO' }

// Should delete the first post
deletePost(1)

// Should return the entire database
console.log(allPosts())

// [
//     { author: 'Mr fish', content: 'The sea is blue, IMO' },
//     { author: 'Mr egg', content: 'The sea is yellow, IMO' }
// ]

// Should update the second post
updatePost(2, "Miss fish", "I don't care about the sea")

// Should return the entire database
console.log(allPosts())

// [
//     { author: 'Mr fish', content: 'The sea is blue, IMO' },
//     { author: 'Miss fish', content: "I don't care about the sea" }
// ]

module.exports = {
    allPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}