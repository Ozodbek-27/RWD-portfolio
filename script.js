'use strict'

const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.querySelector('.menu')

// MENU OCHISH
openMenu.addEventListener('click', () => {
	menu.classList.add('show')
	openMenu.style.display = 'none'
	closeMenu.style.display = 'block'
})

// MENU YOPISH
closeMenu.addEventListener('click', () => {
	menu.classList.remove('show')
	closeMenu.style.display = 'none'
	openMenu.style.display = 'block'
})
