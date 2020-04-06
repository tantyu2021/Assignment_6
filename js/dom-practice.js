//STEP 1 -Use the old school HTML attribute method to attach a click event handler to the button
function alertMessage() {
    window.alert("btn1: I have been clicked");
}
//STEP 2 - the DOM Element method to associate a function with the onclick event of the button
function btn2() {
    alert("btn2: I have been clicked");
  }

//STEP 3 an event listener to the button
//STEP 4
//STEP 5
// btn3.addEventListener("click", function (e) {
//     alert(e.target.innerText);
// });

// let myElement = window.document.getElementById("btn3");
// myElement.onclick = function() {
// window.alert("btn3: I have been clicked");
// }

// btn3.addEventListener("click", writeMessage);
// function writeMessage() {
// window.alert("btn3: I have been clicked");
// }

//STEP 6 - prevents the browser from redirecting to the site

// function redirectHere() {
//     alert("Google is resting");
//   }

function redirect1() {
    alert("Hello Google!");
  }

  
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

//  function redirectHere(event){
// a.click(function(event) {
//     window.alert('you clicked on the link but the browser prevents from  redirecting to the site');
//     //window.alert(event.target.nodeName + ' triggered the event.');
// });
//  }

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
function start() {
    window.console.log("Learning JavaScript is fun!");alert('Learning JavaScript is fun!');
    var id = window.setInterval(boo, 2000);
  //  window.setInterval(boo, 2000);
  }
  function stop() {
    window.clearInterval(id);
  }

//STEP 10
function choice() {

    var choice=document.getElementById("mySelect");
    var strUser = choice.options[choice.selectedIndex].text;

    if(strUser=="Plan 1"){
        alert("You selected Plan 1");
    }
    else if(strUser=="Plan 2"){
        alert("You selected Plan 2");
    }
    else if(strUser=="Plan 3"){
        alert("You selected Plan 3");
    }
    else if(strUser=="Plan 4"){
        alert("You selected Plan 4");
    }
    else {
        alert("Create Plan");
    }

}




//your broweser info
var browserInfo = window.navigator.appName + " " + window.navigator.appVersion;
//document.write("<h2>Browser Info</h2><p>"+browserInfo +"</p>");
console.log("<h2>Browser Info</h2><p>"+browserInfo +"</p>");
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
        console.log("Nothing to open !!");
    }
}

//browser name
var sBrowser, sUsrAg = window.navigator.userAgent;
if(sUsrAg.indexOf("Chrome") > -1) {
sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
sBrowser = "Microsoft Internet Explorer";
}
console.log("You are using: " + sBrowser);
//window.alert("You are using: " + sBrowser);

//screen sizes
window.console.log(window.screen.width);
// Total width of the screen
window.console.log(window.screen.availWidth); // Width of the screen (- Windows taskbar)
window.console.log(window.screen.height);
// Total height of the screen
window.console.log(window.screen.availHeight); // Height of the screen (- Windows taskbar)