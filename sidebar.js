const sidebar = document.getElementById('sidebar')
sidebar.innerHTML = `
    <div class="top">
            <div class="logo">CheckItOff</div>
            <span><img src="images/CheckItOff.png" alt="" class="logo-img" id="btn"></span>
        </div>
        <ul class="sidebarUl">
            <li><a href="todo.html"><i class='bx bx-check-square'></i><span class="nav-item">ToDo</span></a></li>
            <li><a href="notes.html"><i class='bx bx-edit'></i><span class="nav-item">Notes</span></a></li>
            <li><a href="reminder.html"><i class="bx bx-list-check"></i><span class="nav-item">Reminder</span></a></li>
        </ul>
`

// Sidebar functions
let btn = document.querySelector('#btn')
// let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active')
}
document.addEventListener('click', e => {
    if (e.clientX > 250) {
        sidebar.classList.remove('active')
    }
})