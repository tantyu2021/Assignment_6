/*eslint-env browser*/

//STEP 1 -Use the old school HTML attribute method to attach a click event handler to the button
function alertMessage() {
    window.alert("btn1: I have been clicked");
}
//STEP 2 - the DOM Element method to associate a function with the onclick event of the button
function btn2() {
    alert("btn2: I have been clicked");
  }

//STEP 3 - a script that attaches an event listener to the button and listens for the click event
// btn3.addEventListener("click", function (e) {
//     alert(e.target.innerText);
// });



// var btn = document.getElementById("btn3").innerHTML;
//   alert(btn);




// let myElement = window.document.getElementById("btn2");
// myElement.onclick = function() {
// window.alert("btn2: I have been clicked");
// }

// Event Model
// btn3.addEventListener("click", function (e) {
//     window.console.log(e.target.innerText); //displays 'Third button'
//         window.alert('btn3: I have been clicked');
//         }, false);

// btn3.addEventListener("click", writeMessage);
// function writeMessage() {
// window.alert("btn3: I have been clicked");
// }

//STEP 4
// btn3.addEventListener("click", writeMessage);
// function writeMessage() {
// window.alert("btn3: I have been clicked");
// }

//STEP 5

//STEP 6 - prevents the browser from redirecting to the site
//or
function redirectHere() {
    alert("Google is resting");
  }

function redirect1() {
    alert("Hello Google!");
  }

// $(function() {
// $('div a').click(function(event) {
//     window.alert(event.target.nodeName + ' triggered the event.');
// });
// });

// $(document).ready(function(){  //or- $(function() {
//     $("div a").click(function(event){
//       event.stopPropagation();
//       alert("The span element was clicked.");
//     });
//     $('a:hover').css('color', 'green');
//   });

// var stopProp = a.click(function(event){
//     event.stopPropagation();
//     alert("The link element was clicked.");
//   });
//   stopProp();
  
function redirectHere(event){
    event.stopPropagation();
    alert("The link element was clicked.");
    document.getElementById("redirect").style.display = "none";
 }

 function redirectHere(event){
a.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
});
 }

 function redirectHere(event){
a.click(function(event) {
    window.alert('you clicked on the link but the browser prevents from  redirecting to the site');
    //window.alert(event.target.nodeName + ' triggered the event.');
});
 }
//STEP 7
function showAlert() {
    var content = document.getElementById("p1").innerHTML;
    alert(content);
    }
//STEP 8
function newP() {
    window.open("newpage.html", "fly", "width=300,height=300,left=100,top=100");
  }


//window.open('http://www.google.com','google','width=300,height=300');

//STEP 9



var browserInfo = window.navigator.appName + " " + window.navigator.appVersion;
document.write("<h2>Browser Info</h2><p>"+browserInfo +"</p>");
var newWindow;
function opennewWindow() {
    newWindow = window.open("", "", "width=500, height=300, top=150, left=150");
    newWindow.document.title = "New Window";
    paraGraph = document.createElement("P");
    paraGraph_text = document.createTextNode("New Paragraph");
    paraGraph.appendChild(paraGraph_text);
     newWindow.document.body.appendChild(paraGraph);
}
function closenewWindow() {
    if (newWindow != undefined) {
        newWindow.close();
        newWindow = undefined;
    }
    else {
        alert("Nothing to open !!");
    }
}
//STEP 10
