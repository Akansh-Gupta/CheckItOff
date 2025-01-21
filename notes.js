let inputTitle = document.getElementById('titleBox')
let inputNote = document.getElementById('textBox')
let miniNoteDisplay = document.getElementById('miniNoteDisplay')
inputTitle.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        inputNote.focus()
    }
})

// Mini Note Creation

const submitBtn = () => {
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

const showPopup = (callback) => {
    let popupbg = document.createElement("div")
    popupbg.setAttribute("id", "popupbg")
    popupbg.classList.add("popupbg")

    let popup = document.createElement("div")
    popup.setAttribute("id", "popup")
    popup.classList.add("popup", "bodybg")

    let heading = document.createElement("h1")
    heading.innerHTML = "This Note Will Be Deleted Permanently!"

    let subHeading = document.createElement("h4")
    subHeading.innerHTML = "Are You Sure You Want to Continue?"

    let yes = document.createElement("button")
    yes.textContent = "Yes"
    yes.classList.add("btn", "btn-danger", "mt-3", "p-3")
    yes.addEventListener('click', deleteNote)

    let cancel = document.createElement("button")
    cancel.textContent = "Cancel"
    cancel.classList.add("btn", "btn-success", "mx-3", "mt-3", "p-3")
    cancel.addEventListener('click', hidePopup)

    popup.append(heading, subHeading, yes, cancel)
    popupbg.append(popup)
    document.body.append(popupbg)

    function hidePopup() {
        document.body.removeChild(popupbg)
    }

    function deleteNote() {
        callback(true)
        document.body.removeChild(popupbg)
    }
}

const saveNote = () => {
    localStorage.setItem('note', miniNoteDisplay.innerHTML)
}

const printNote = () => {
    miniNoteDisplay.innerHTML = localStorage.getItem('note')
}

miniNoteDisplay.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        showPopup(function (result) {
            if(result){
                e.target.parentElement.parentElement.remove();
                saveNote()
            }
        })
    }
    else if (e.target.tagName === "H3") {
        title = document.querySelectorAll(".card-title");
        title.forEach(nt => {
            nt.onkeyup = function () {
                saveNote()
            }
        })
    }
    else if (e.target.tagName === "P") {
        text = document.querySelectorAll(".card-text");
        text.forEach(nt => {
            nt.onkeyup = function () {
                saveNote()
            }
        })
    }
})

printNote()