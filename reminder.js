let listContainer = document.getElementById('listContainer')
function clock() {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let today = new Date()

    document.getElementById('date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear())

    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let meridiem = h < 11 ? 'AM' : 'PM'

    h = h < 10 ? '0' + h : h
    h = h > 12 ? h - 12 : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    document.getElementById('hours').innerHTML = h
    document.getElementById('min').innerHTML = m
    document.getElementById('sec').innerHTML = s
    document.getElementById('meridiem').innerHTML = meridiem
} let inter = setInterval(clock, 1000)



function myFunction() {
    let popup = document.getElementById("myPopup");
}

let date = document.getElementById('setDate')
let time = document.getElementById('setTime')
let desc = document.getElementById('setDesc')

let setReminder = (date, time, desc) => {
    setTimeout(() => {
        console.log(date)
        console.log(time)
        console.log("Reminder")
    }, 1000)
}

let displayReminder = () => {
    if (date.value === '' || time.value === '' || desc.value === '') {
        let balert = document.getElementById("balert")
        balert.style.visibility = "visible"
        setTimeout(() => {
            balert.style.visibility = "hidden"
        }, 3000)
    } else {
        let description = document.createElement('h3')
        description.innerHTML = desc.value;

        let line = document.createElement('hr')

        let dateTime = document.createElement('span')
        dateTime.innerHTML = `${time.value}|  ${date.value}`

        let deleteBtn = document.createElement("img")
        deleteBtn.classList.add('imgSize')
        deleteBtn.setAttribute('src', 'images/trash.png')

        let reminder = document.createElement("div")
        reminder.classList.add('reminderList')
        reminder.append(description, line, dateTime, deleteBtn)

        listContainer.appendChild(reminder)

        date.value = ""
        time.value = ""
        desc.value = ""
    }

    saveReminder()
}


const saveReminder = () => {
    localStorage.setItem('reminder', listContainer.innerHTML)
}

const printReminder = () => {
    listContainer.innerHTML = localStorage.getItem('reminder')
}

const showPopup = (callback) => {
    let popupbg = document.createElement("div")
    popupbg.setAttribute("id", "popupbg")
    popupbg.classList.add("popupbg")

    let popup = document.createElement("div")
    popup.setAttribute("id", "popup")
    popup.classList.add("popup", "bodybg")

    let heading = document.createElement("h1")
    heading.innerHTML = "This Reminder Will Be Deleted Permanently!"

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

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        showPopup(function (result) {
            if (result) {
                e.target.parentElement.remove();
                saveReminder()
            }
        })
    }
})

printReminder()