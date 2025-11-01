function navigation(navlist, navmenu) {
    const navList = document.getElementById(navlist)
    const navMenu = document.getElementById(navmenu)
    const close = document.getElementById('close')
    if (navList && navMenu) {
        navMenu.addEventListener('click', () => {
            navList.classList.add('show')
            // close.style.display = 'block'
        })
        close.addEventListener("click", () => {
            navList.classList.remove('show')
        })
    }
}

navigation('nav-list', 'menu')

const drop1 = document.querySelector('.drop1')
const drop2 = document.querySelector('.drop2')
const dropdown1 = document.querySelector('.dropdown1')
const dropdown2 = document.querySelector('.dropdown2')
const down1 = document.querySelector('.down1')
const up1 = document.querySelector('.up1')
const down2 = document.querySelector('.down2')
const up2 = document.querySelector('.up2')

drop1.addEventListener('click', () => {
    dropdown1.classList.toggle('visible')
    up1.classList.toggle('vis')
    down1.classList.toggle('hide')
})

drop2.addEventListener('click', () => {
    dropdown2.classList.toggle('visible')
    up2.classList.toggle('vis')
    down2.classList.toggle('hide')
})


