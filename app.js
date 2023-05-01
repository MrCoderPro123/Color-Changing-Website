let changeColor = (color)=>{
    document.body.style.backgroundColor = color;
}

let changeImg = ()=>{
   let ci = document.getElementById('1img');
//    ci.setAttribute('src','./whatsapp.png');
    if(ci.getAttribute("src") == "./whatsapp.png"){
        ci.setAttribute("src", "./youtube.png");
    }else{
        ci.setAttribute('src','./whatsapp.png');
    }

}
