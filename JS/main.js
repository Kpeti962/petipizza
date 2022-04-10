function calcAmount(){
let showAmount = document.querySelector("span.showAmount");
let priceInputs = document.querySelectorAll("td.priceInput");
let amount = parseInt(priceInputs[0].innerText);
for(let i = 0; i<priceInputs.length; i++){
    amount =parseInt(priceInputs[i].innerText)
}
console.log(priceInputs);
showAmount.innerHTML = amount;

}