// Assign an event listener on an `button` element
let button = document.querySelector('button');
button.addEventListener('click', function() {
    // By default, an `event` argument will be passed to this function
    let message = "You clicked " + event.offsetX + " and " + event.offsetY;
    let clickedElem = event.target; //target property of the event

    // Do whatever you're looking to do
    console.log(message);
    console.log(clickedElem);
});
let stylesheet = document.querySelector('[href*="css/none.css"]');
console.log(stylesheet);

function doSomething(item) {
    document.querySelector(`#${item}`).addEventListener('click', function() {
        stylesheet.setAttribute('href',`css/${item}.css`);
    })
}

let listItems = document.querySelectorAll(".styles li");
for(var i in Object.keys(listItems))  doSomething(listItems[i].id);
//console.log(listItems);

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        console.log("Going up!")
    }
    //...
});

let clickCount = 0;  //keep track of the "state" (global)
document.querySelector('button').addEventListener('click', function() {
    if(clickCount > 10) {  //decide what to do
        console.log("I think you've had enough");
    }
    else {
        clickCount++;  //change state (+1)
        console.log('You clicked me!');
    }
});
