const loadBar = document.getElementById("loadBar");



let i = 0;
let intervelId = setInterval(() => {
    i++
    loadBar.style.width = i + "vw";
    if (i === 100) {
        clearInterval(intervelId)
    }
}, 50);




let changeColor = (color) => {
    document.body.style.backgroundColor = color;
}

let changeImg = () => {
    let ci = document.getElementById('1img');
    //    ci.setAttribute('src','./whatsapp.png');
    if (ci.getAttribute("src") == "./whatsapp.png") {
        ci.setAttribute("src", "./youtube.png");
    } else {
        ci.setAttribute('src', './whatsapp.png');
    }

}
