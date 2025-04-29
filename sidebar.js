const sidebar = document.getElementById('sidebar')
sidebar.innerHTML = `
    <div class="top">
            <div class="logo">CheckItOff</div>
            <span><img src="images/CheckItOff.png" alt="" class="logo-img" id="btn"></span>
        </div>
        <ul class="sidebarUl">
            <li><a href="index.html"><i class='bx bx-check-square'></i><span class="nav-item">ToDo</span></a></li>
            <li><a href="notes.html"><i class='bx bx-edit'></i><span class="nav-item">Notes</span></a></li>
            <li><a href="reminder.html"><i class="bx bx-list-check"></i><span class="nav-item">Reminder</span></a></li>
        </ul>
`

btn.onclick = function () {
    sidebar.classList.toggle('active')
}
document.addEventListener('click', e => {
    if (e.clientX > 250) {
        sidebar.classList.remove('active')
    }
})

const navbar = document.getElementById('navbar')
navbar.innerHTML = `
<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div style="display: flex;">
                <img src="images/CheckItOff.png" alt="" class="logo-img" id="btn">
                <div class="logo">CheckItOff</div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-3 mb-lg-0">
                    <li><a href="index.html"><i class='bx bx-check-square'>ToDo</i></a></li>
                    <li><a href="notes.html"><i class='bx bx-edit'>Notes</i></a></li>
                    <li><a href="reminder.html"><i class="bx bx-list-check">Reminder</i></a>
                    </li>

            </div>
        </div>
    </nav>
`
