const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}

updateCounter()