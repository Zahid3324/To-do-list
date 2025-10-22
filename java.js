

<script>
let input = document.getElementById("inp");
let text = document.getElementById("text");

function Add() {
    if (input.value.trim() === "") {
        alert("Please enter text");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click", () => newEle.remove());
    }
}
</script>

