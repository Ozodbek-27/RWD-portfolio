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

// Theme yaxshilash
const themeBtns = document.querySelectorAll('.theme-toggle')
const body = document.body

function applyTheme(them) {
	if (them === 'dark') {
		body.classList.add('dark')
		themeBtns.forEach(btn => {
			btn.classList.remove('ri-moon-line')
			btn.classList.add('ri-sun-line')
		})
	} else {
		body.classList.remove('dark')
		themeBtns.forEach(btn => {
			btn.classList.add('ri-moon-line')
			btn.classList.remove('ri-sun-line')
		})
	}
}

applyTheme(localStorage.getItem('theme' || 'light'))

themeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const newTheme = body.classList.contains('dark') ? 'light' : 'dark'
		localStorage.setItem('theme', newTheme)
		applyTheme(newTheme)
	})
})

// Swiper

const swiper = new Swiper('.brands-swiper', {
	loop: true,
	spaceBetween: 20,
	slidesPerView: 6,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		1300: { slidesPerView: 6 },
		1200: { slidesPerView: 5 },
		991: { slidesPerView: 4 },
		757: { slidesPerView: 3 },
		575: { slidesPerView: 3 },
		0: { slidesPerView: 2 },
	},
})
