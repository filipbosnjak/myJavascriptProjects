//  jQuery - Small, fast and feature-rich Javascript library
//         - Makes DOM (document object model) manipulation, event handling and Ajax much easier
//         - $ - Dollar sign - Represents jQuery
//         - $('elementName').method(); -> Basic syntax



//$('button').hide(); -> Hide button, its still in the html 
//$('button#btnID')... if we had a button with the id="btnID" 

$(document).ready( () => { //All our jQuery should be inside ready() function meaning all code executes when the page is loaded 


/* -- MANIPULATING LISTS -- */

$('ul').append('<li>New Item</li>'); //Adding new html element defined as a string

$('ul li:nth-child(6n)').hide();  //Targets 6th 12th child and so on


/* -- INPUTS -- */

//$(':submit').hide(); -> Targeting by type
//$('a[href="http://google.com"]').doSomething(); -> Targets a tag with a specific link


/* -- EVENTS -- */

$('.btn').click( () => {
    $('h1').css('color','blue');
});

$('.btn1').click( () => {
    $('li').toggle();// Toggles hide and show

});

$('.btn2').hover( () => {
    //$('.btn1').css('background-color','blue')  .toggle() works the best
});

$('.btn1').on('mouseenter' , () => {
    $('.btn1').css('background-color','blue');
});
$('.btn1').on('mouseleave' , () => {
    $('.btn1').css('background-color','white');
});
$('.btn2').click( (e) => {
    console.log(e);
    $('.btn1').append(e.currentTarget.innerHTML);
    $('.btn1').append(e.currentTarget.outerHTML);  //Gives out whole html element with tags
    $('.btn1').html(e.currentTarget.outerHTML);   // .append() adds it to the end - .html REPLACES IT.
});

//Something cool - Updating mouse coords live on a page as we move the mouse

$(document).on('mousemove' , (e) => {
    $('.h11').html('Coords: X: ' + e.clientX + 'Y: ' + e.clientY);
})

// We can add js string into html

var name = 'Filip Bošnjak';

$('.h11').append(`${name}`);

$('body').append('<h2 class="h2"></h2>');

var someString = 'Sth bla';

$('.h2').append(`${someString}`);

});


