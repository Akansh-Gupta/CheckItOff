let inputTitle = document.getElementById('titleBox')
let inputNote = document.getElementById('textBox')

let miniNoteDisplay = document.getElementById('miniNoteDisplay')
let miniNoteTitle = document.getElementById('cardTitle')
let miniNoteText = document.getElementById('cardText')

inputTitle.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        inputNote.focus()
    }
})

// Mini Note Creation

function submitBtn() {
    if (inputNote.value === '' && inputTitle.value === '') {
        let balert = document.getElementById("balert")
        balert.style.visibility = "visible"
        setTimeout(() => {
            balert.style.visibility = "hidden"
        }, 3000)

    }
    else {

        let cardTitle = document.createElement("h3")
        cardTitle.setAttribute("contenteditable", "true")
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = inputTitle.value

        let line = document.createElement("hr")

        let cardText = document.createElement("p")
        cardText.setAttribute("contenteditable", "true")
        cardText.classList.add('card-text')
        cardText.innerHTML = inputNote.value

        let cardBody = document.createElement("div")
        cardBody.classList.add('card-body')
        cardBody.append(cardTitle, line, cardText)

        let cardDel = document.createElement('img')
        cardDel.classList.add('footer', 'btn')
        cardDel.setAttribute('src', 'images/trash.png')

        let noteFooter = document.createElement('div')
        noteFooter.classList.add('noteFooter')
        noteFooter.appendChild(cardDel)

        let card = document.createElement('div')
        card.classList.add('card', 'bodybg', 'miniNote')
        card.setAttribute('onclick', '')
        card.append(cardBody, noteFooter)

        miniNoteDisplay.appendChild(card)
    }
    inputTitle.value = ''
    inputNote.value = ''
    saveNote()
}


let saveNote = () => {
    localStorage.setItem('note', miniNoteDisplay.innerHTML)
}

let prinNote = () => {
    miniNoteDisplay.innerHTML = localStorage.getItem('note')
}


miniNoteDisplay.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        let choice = confirm("Do You Really Want To Delete This Note?")
        if (choice == true) {
            e.target.parentElement.parentElement.remove();
            saveNote()
        }
    }
    else if(e.target.tagName === "H3"){
        title = document.querySelectorAll(".card-title");
        title.forEach(nt => {
            nt.onkeyup = function(){
                saveNote()
            }
        })
    }
    else if(e.target.tagName === "P"){
        text = document.querySelectorAll(".card-text");
        text.forEach(nt => {
            nt.onkeyup = function(){
                saveNote()
            }
        })
    }
})

prinNote()