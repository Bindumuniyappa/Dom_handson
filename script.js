let textElement=document.getElementById("text");
console.log(textElement.innerText);

let headingElement=document.getElementsByTagName("h1");
console.log(headingElement[0].innerText);

let textElement1=document.getElementsByClassName("box");
console.log(textElement1[0].innerText);

let helloElement=document.getElementById("hello");
console.log(helloElement.innerText="hello world")

let flexButton=document.getElementById("Flex-function");
let flexBoxes=document.getElementById("flex-box")
flexButton.addEventListener("click",function(){
    flexBoxes.style.flexDirection="column";
})

let xy=document.getElementById("heading");
xy.addEventListener("click",function(){
    xy.style.color="green";
})

let text1=document.getElementById("textbtn");
let btn1=document.getElementById("btn-btn");
btn1.addEventListener("click",function(){
    text1.innerText="Welcome to Elevation academy";
})

function timer(){
    let x=document.getElementById("clock") 
    let btn=document.getElementById("time")
    let times=new Date()
    let hr=times.getHours();
    let min=times.getMinutes();
    let secs=times.getSeconds();
    document.getElementById("clock").innerText=hr+":"+min+":"+secs;
    
    }
    btn.addEventListener("click",function(){
        btn.innerText=timer()
        setInterval(function(){
            btn.innerText=timer()

        },1000)

    })

let textSelection=document.getElementById("selectedText");
let valueElement=document.getElementById("value");
textSelection.addEventListener("click",function(){
     value.innerText=textSelection.options[textSelection.selectedIndex].text;
})