let input = document.getElementById("inp");
let text = document.querySelector("text");
function Add(){
    if(input.value === " " ){
alert("please enter text")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = '${inputs.value} <i class="fa-solid fa-trash"></i>';
        text.appendChild(newEle);
        input.value=" ";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}