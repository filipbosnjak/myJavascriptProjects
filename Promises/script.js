

// ------------------------ PROMISES ------------------------ \\


let promise = new Promise( (resolve , reject) => {
    let a = 1 + 1
    if(a === 3){
        resolve('Success')
    }else{
        reject('Failed')
    }
})


promise.then( (message) => { // -> success callback - executes only if resolve passed 
    console.log('This is in the then: ' + message)
})
.catch( (message) => {// -> executes only if resolve rejected
    console.log('This is in the catch: ' + message)
})

console.clear();


let failed1 = false
let failed2 = false
let nestedSuccess = true
let nestedFailed = false
let success = true

let nestedPromise = new Promise((resolve , reject) => {
    if(nestedFailed){
        reject({
            msg:'Nested Error',
            status: 3
        })
    }else if(nestedSuccess){
        resolve({
            msg: 'Nested Success',
            status: 4
        })
    }
})

let workingOnSomething = () => {

    return new Promise( (resolve , reject) => {
        if(failed1){
            reject({
                msg: 'Error1',
                status: 1
            })
        }else if(failed2){
            reject({
                msg:'Error2',
                status: 2
            })
        }else if(success){
            resolve(nestedPromise)
        }
    })
}

workingOnSomething().then((msg) => {
    console.log(msg)
}).then((msg) => {
    console.log(msg)
}).catch((msg) => {
    console.log(msg)
})

//Multiple promises waiting

const promise1 = new Promise((resolve , reject) => {
    resolve('Promise1')
})

const promise2 = new Promise((resolve , reject) => {
    resolve('Promise2')
})

const promise3 = new Promise((resolve , reject) => {
    resolve('Promise3')
})

Promise.all([
    promise1,
    promise2,
    promise3
]).then(messages => {
    console.log(messages)
})

//Promise.race().then(mess) -> goes with first finished

// ------------------------ CALLBACKS ------------------------ \\

let posts = [
    {title:'Post 1' , body: 'This is post 1'},
    {title:'Post 2' , body: 'This is post 2'}
]

const getPosts = () => {
    setTimeout(() => {
        let output = ''
        posts.forEach((post , index) => {
            output += `<li>${post.title}</li>`
        })
        let body = document.querySelector('body')
        //body.innerHTML = output
    } , 500)
    
}

const createPost = (post , callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    } , 700)
}
let newPost = {title : 'Post 3' , body : 'This is post 3'}
// createPost()
const list = createPost(newPost , getPosts) //getposts finishes before createPost so the third post is never renderd to the dom

//Using callbacks - 
//We can put a callback to a second parameter in createPosts and then call it in the end
//as a function and then inside we call the function we want to execute so it executes right
//after the first function is over

// ------------------------ ASYNC , AWAIT ------------------------ \\
//Syntactical sugar that makes promises more elegant

const makeRequest = (location) => {
    return new Promise( (resolve , reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google'){
            resolve('Google responded')
        }else{
            reject('Can only resolve Google')
        }
    })
}

const processRequest = (response) => {
    return new Promise((resolve , reject) => {
        console.log('Processing response')
        resolve(`Response: ${response}`)
    })
}


//async function doWork(){}
const doWork = async (msg) => {
    try{
        const response = await makeRequest(msg)
        console.log('Response Received')
        const processed = await processRequest(response)
        console.log(processed)
    }catch(err){
        console.log(err)
    }
    
}
let input = document.querySelector('input')
let log = document.querySelector('p')
let button = document.querySelector('button')

button.addEventListener('click' , (e)=>{
    e.preventDefault()
    //console.log(input.value)
    //log.innerText = input.value

    // makeRequest(input.value)
    // .then(msg => processRequest(msg))
    // .then(res => console.log(res))
    // .catch(msg => console.log(msg))

    doWork(input.value)
})
