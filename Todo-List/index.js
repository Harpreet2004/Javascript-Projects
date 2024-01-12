const addBtn = document.querySelector("#add-btn");
const inputText = document.querySelector("#todo-input");
const listContainer = document.querySelector("#list-container");

//add todo when btn is clicked
function addTodo() {
    if(inputText.value === "") {
        alert("Please enter a todo");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = `
                <h5>${inputText.value}</h5>
                <img src="${"deleteImg.png"}" alt= "delete-img"></img>
        `
        listContainer.appendChild(li);
    }
    inputText.value ="";
    saveTodo()
}

//adding delete text decoration when h5 is clicked
//saving the current data to localstorage
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "H5") {
        e.target.classList.toggle("list-decor");
        saveTodo();
    }

    else if(e.target.tagName === "IMG") {
       e.target.parentElement.remove();
       saveTodo();
    }
},false)

//saving the current data to localstorage
function saveTodo() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//displaying the current data 
function showtodo() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showtodo();
