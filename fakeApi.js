const fakeDb = [];

function allPosts(){
    return fakeDb
}

function getPost(i){
    return fakeDb[i - 1]
}

function newPost(author, content){
    fakeDb.push({
        author,
        content
    })
}

// function cutPost(i) {
//     fakeDb.splice(i - 1, 1)
// }
// cutPost(2)

// newPost("Mr meat", "The sea is red, IMO")
// newPost("Mr fish", "The sea is blue, IMO")
// newPost("Mr egg", "The sea is yellow, IMO")

// console.log(allPosts())
// console.log(allPosts())
// console.log(getPost(2))

module.exports = {
    allPosts,
    getPost,
    newPost
}