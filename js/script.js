const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navlink = document.getElementsByClassName('nav')[0]

togglebutton.addEventListener('click', () => {
    navlink.classList.toggle('active')
})