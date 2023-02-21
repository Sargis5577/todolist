function clearValue(){
    let input = document.querySelector(".todoValue");
    input.value = "";
};
document.querySelector(".btn").addEventListener("click",function(evt){
    let input = document.querySelector(".todoValue");
    let content = document.querySelector(".content");
    let divcontent = document.createElement("div");
    content.appendChild(divcontent);
    let span = document.createElement("span");
    span.classList.add("span-clear");
    content.appendChild(span);
      if(input.value == ""){
        divcontent.remove();
        span.remove()
    }
    divcontent.classList.add("divContent2");
    divcontent.innerHTML = input.value;
    clearValue();
});

// text unerline
document.querySelector(".content").addEventListener("click",function(evt){
    if(evt.target.classList.contains("divContent2")){
        evt.target.classList.toggle("line")
    }
    if(evt.target.classList.contains(".span-clear")){
        evt.target.addEventListener("click",function(){
            console.log("hellow")
        })
    }
})

// remove text
document.querySelector(".content").addEventListener("click",function(evt){
    if(evt.target.classList.contains("span-clear")){
        evt.target.previousElementSibling.remove();
        evt.target.remove()
    }
})