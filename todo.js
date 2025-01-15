const input = document.getElementById("inputBox")
const listContainer = document.getElementById("listContainer")

input.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        submitBtn()
    }
})


function noImg() {
    if (listContainer.innerHTML.length == 0) {
        document.getElementById('emptyList').style.visibility = "visible"
    }
    else {
        document.getElementById('emptyList').style.visibility = "hidden"
    }
}
noImg()
function submitBtn() {
    if (inputBox.value === '') {
        //bad alert
        let balert = document.getElementById("balert")
        balert.style.visibility = "visible"
        setTimeout(() => {
            balert.style.visibility = "hidden"
        }, 3000)

    }
    else {
        let card = document.createElement("div")
        card.classList.add('checker', 'card')

        card.innerHTML = inputBox.value
        listContainer.appendChild(card)

        let span = document.createElement("img")
        span.classList.add('imgSize')
        span.setAttribute('src', 'images/trash.png')
        card.appendChild(span)
    }
    inputBox.value = ''
    saveTodo()
    noImg()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        e.target.classList.toggle("checked")
        saveTodo()
    }
    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveTodo()
        noImg()
    }
}, false)


function saveTodo() {
    localStorage.setItem("todo", listContainer.innerHTML)
}

function printTodo() {
    listContainer.innerHTML = localStorage.getItem("todo")
}

printTodo()