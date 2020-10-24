// DOM - Document object model - tree (data structure) of nodes
//At the tree root is document object and trough it we can access all the other nodes
//We can easily manipulate dom with it (no need for jquery)

// console.dir(document)
// console.log(document.domain)//Domain
// console.log(document.documentURI) //Page url
// console.log(document.title)

// document.title = 'New Title' //Title changed
//console.log(document.all) //Html collection - array

//Pulling elements from the dom

//.getElementById('idName')

//Side note - innerText is always better to use than text content, innerText pays attention to the styling

// let title = document.getElementsByClassName('title')
// console.log(title)
//title[0].innerHTML  = 'asdasd' //getElemetsByClassName returns HTMLCollection - like an array and without [0] it doesnt work
//title[0].innerText = 'asf'

 let list = document.getElementsByTagName('li')
 console.log(list)

// We cant use foreach on htmlcollection cause it is not standard js array

for(let i = 0; i<list.length; i++){
    //console.log(list[i].classList)
    //list[i].classList.add('black') -> classList.add() - adds a css class on the stack of the prev classes
}

//Queryselector - important!

let title = document.querySelector('.title')
console.log(title.classList)
//title.classList.add('black')

// let input = document.querySelector('input')
// let submit = document.querySelector('input[type="submit"]') //Getting input of a specific type
// console.log(input)
// input.placeholder = 'Hello World'
// submit.value = 'SEND'

let ul = document.querySelector('ul')
console.log(ul)

// let newli  = document.createElement('li')
// newli.innerText  = 'Item 5';
// ul.appendChild(newli)

//.children - gets all children dom elemnets
console.log(ul.children)

//Creating elements

let newDiv = document.createElement('div')

//Adding attributes

newDiv.className = 'class1 class2'
newDiv.id = 'new-id'
console.log(newDiv)


newDiv.innerText = 'InnerText'
let h1 = document.createElement('h1')
h1.innerText = 'h1'

//Adding one element as a child to another element

newDiv.append(h1)

//Adding created element to the end of a dom body

let body = document.querySelector('body')
body.appendChild(newDiv)

// console.log(body.firstChild)
// body.insertBefore(newDiv,body.firstChild) // insertBefore( whatWeWantToInsert , beforeWhatWeWantToInsert)



//EVENTS

let input = document.querySelector('input')
let submit = document.querySelector('input[type="submit"]')
let itembtn = document.querySelectorAll('.itembtn')
console.log(itembtn)
input.addEventListener('change' , (e) => {
    //console.log(e.target.value)
    let ul = document.querySelector('ul')
    let newLi  = document.createElement('li')
    let newBtn = document.createElement('button')
    newBtn.classList.add('itembtn')
    newBtn.innerText = 'x'
    newLi.innerText = e.target.value
    newLi.appendChild(newBtn)
    ul.appendChild(newLi)
    e.target.value = ''
})
submit.addEventListener('click' , (e) =>{
    e.preventDefault()
    console.log(e.target)
    //console.log(e.target.value)
})

//We have events like mousedown, click, mouseenter, keypress etc.
//By default none of the elements are interested in any of those events but:
//We can make them interested by adding event listeners
//So like that we say to a specific element: look for this and that for eg. watch out for a click on you
//And when you are clicked execute the anonymous function that I will provide you with.
//Also note that I will pass you an event parameter with all the relevant info about the event
//We add eventlisteners to elements like this and based on conditions we can do different things
input.addEventListener('keypress' , (e) => {
    if(e.code == 'Enter'){
        let ul = document.querySelector('ul')
        let newLi  = document.createElement('li')
        newLi.innerText = e.target.value
        ul.appendChild(newLi)
        e.target.value = ''
    }
})

body.addEventListener('keypress', (e) =>{
    console.log(e.code)
})

let panel  = document.createElement('div')
panel.classList.add('panel')
body.appendChild(panel)

let newpar = document.createElement('p')
body.appendChild(newpar)

panel.addEventListener('mousemove' , (e) => {
    newpar.innerHTML = `Local on a div (e.offsetX/Y)<br><br>X: ${e.offsetX}  Y: ${e.offsetY} <br>Global on a DOM (e.clientX/Y)<br><br>X: ${e.clientX}  Y: ${e.clientY}`
})

