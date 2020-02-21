// SAMPLE 01
console.log("SAMPLE 01")
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve("Success")
    }
    else {
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the then "+ message)
})
.catch((message) => {
    console.log("This is in the catch "+message)
})
.finally(() => {
    console.log("This is in the Finally ")
})


// SAMPLE 02
console.log("SAMPLE 02")
const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        }
        else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Cat'
            })
        }
        else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise()
    .then((message) => {
        console.log('Success: ' + message)
    })
    .catch((error) => {
        console.log(error.name +' '+ error.message)
    })