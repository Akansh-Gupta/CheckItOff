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
    // popup.classList.toggle("show");
}

let date = document.getElementById('setDate')
let time = document.getElementById('setTime')
let desc = document.getElementById('setDesc')


let setReminder = () => {
    console.log(date.value)
    console.log(time.value)
    console.log(desc.value)
    let titleTime = document.createElement('h3')
    titleTime.innerHTML = time.value;

    let titleDate = document.createElement('h4')
    titleDate.innerHTML = date.value

    let line = document.createElement('hr')

    let para = document.createElement('p')
    para.innerHTML = desc.value

    let span = document.createElement("img")
    span.classList.add('imgSize')
    span.setAttribute('src', 'images/trash.png')

    let card = document.createElement("div")
    card.classList.add('checker', 'card')
    card.append(titleTime, titleDate, line, para, span)

    listContainer.appendChild(card)
}

// function setReminder() {

// let title = document.createElement('h3')
// title.innerHTML = (data.value + " " + time.value);

// let line = document.createElement('hr')

// let para = document.createElement('p')
// para.innerHTML = desc.value

// let span = document.createElement("img")
// span.classList.add('imgSize')
// span.setAttribute('src', 'images/trash.png')

// let card = document.createElement("div")
// card.classList.add('checker', 'card')
// card.appendChild(title)
// card.appendChild(line)
// card.appendChild(para)
// card.appendChild(span)

// listContainer.appendChild(card)
// }