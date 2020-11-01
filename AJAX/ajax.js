// Ajax tutorial
// Ajax - Asynchronous JavaScript and XML
// Combination of a browser technologies (html,js,css) and browser built in object 
// XMLHttpRequest

// With these technologies combined in Ajax model web applications are able to make quick,
// incremental updates to the user interface WITHOUT RELOADING ENTIRE PAGE. 
// This makes the application faster and more responsive to user actions.

// XMLHttpRequest() - its actually interface with methods we can implement as we want.

let url = 'http://numbersapi.com/1'

let button = document.querySelector('.btn');

button.addEventListener('click' , ()=>{

    //Object instantiation
    let xhrObject = new XMLHttpRequest();

    //console.log(xhrObject);

    //Implementing function that will handel the request i.e. what happens when 
    //the response is received
    xhrObject.onreadystatechange = () => {
        if(xhrObject.readyState === XMLHttpRequest.DONE){
            if(xhrObject.status === 200){
                let div = document.createElement('div')//console.log(xhrObject.responseText)
                let body = document.getElementsByTagName('body')
                console.log(body)
                body[0].appendChild(div)
                div.classList.add('text')
                div.innerText = xhrObject.responseText;
            }else{
                alert('Error with the request')
            }
        }
    }

    xhrObject.open('GET' , url , true); // (method , url , async)

    xhrObject.send();
})