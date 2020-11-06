// ------------------------ CALLBACKS ------------------------ \\


console.log('Start')


// const work = (msg) => {
//     setTimeout(() => { //Settimeout is async - func inside handled by web apis and run async
        
//         console.log(msg)
//     } , 1000)
// }
// work('Message')

const loginUser = (email , pass , callback) => {
    setTimeout(() => {
        console.log('Data received')
        callback({ email, pass }) //Calling callback function - parameter must be user
    } , 1000)
}
const user = loginUser('email' , 'password' , (user) => {
    console.log(user)
})
console.log(user) //Without a callback we get undefined
console.log('End')