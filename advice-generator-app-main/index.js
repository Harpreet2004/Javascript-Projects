const api = fetch("https://api.adviceslip.com/advice");
const adviceId = document.querySelector("h6");
const adviceText = document.querySelector("p");
const btnContainer = document.querySelector("#btn-container");

//generating and displaying advice , advice id
api
  .then((value1) => {
    return value1.json();
  })
  .then((value2) => {
    adviceId.innerHTML = `
        <span>ADVICE #${value2.slip.id}</span>
        `;
    adviceText.innerHTML = `
        "${value2.slip.advice}"
        `;
  });
