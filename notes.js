let inputTitle = document.getElementById('titleBox')
let inputNote = document.getElementById('textBox')

let miniNoteDisplay = document.getElementById('miniNoteDisplay')
let miniNoteTitle = document.getElementById('cardTitle')
let miniNoteText = document.getElementById('cardText')

let cardTitle
let cardText
let cardBody
let noteFooter
let cardDel

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

        cardTitle = document.createElement("h3")
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = inputTitle.value

        let line = document.createElement("hr")

        cardText = document.createElement("pre")
        cardText.classList.add('card-text')
        cardText.innerHTML = inputNote.value


        cardBody = document.createElement("div")
        cardBody.classList.add('card-body')
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(line)
        cardBody.appendChild(cardText)

        cardDel = document.createElement('img')
        cardDel.setAttribute('id', 'cardDel')
        cardDel.classList.add('footer', 'btn')
        cardDel.setAttribute('src', 'images/trash.png')

        noteFooter = document.createElement('div')
        noteFooter.classList.add('noteFooter')
        noteFooter.appendChild(cardDel)

        let card = document.createElement('div')
        card.classList.add('card', 'bodybg', 'miniNote')
        card.setAttribute('onclick', '')
        card.appendChild(cardBody)
        card.appendChild(noteFooter)

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
})

prinNote()