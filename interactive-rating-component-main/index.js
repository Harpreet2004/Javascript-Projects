const btn = document.querySelectorAll("#btn>button");
const imgTextContainer = document.querySelector("#imgtext-container");
const submitBtn = document.querySelector("#submit");
const initialCard = document.querySelector("#card");
const successCard = document.querySelector("#success-container");
var check = 0;


btn.forEach(btn => {
    btn.addEventListener("click",(e)=> {
        check = e.target.innerText;
    })
})


submitBtn.addEventListener("click", (e) => {
    if(check == 0) {
        alert("Please select a number for rating us!")
    }
    else {
        initialCard.classList.add("hide");
        successCard.classList.remove("hide");
        let ratingText = document.createElement("span");
        ratingText.innerHTML = `You selected ${check} out of 5`;
        imgTextContainer.appendChild(ratingText);
    }
})