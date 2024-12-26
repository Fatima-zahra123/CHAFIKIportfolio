var typed = new Typed('#typed-text', {
  strings: ['Software Engineer', 'Full Stack Developer', 'RPA Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})

const hamburger = document.querySelector('header .container nav .hamburger')
const ul = document.querySelector('header .container ul')
const close = document.querySelector('header .container .close')

hamburger.addEventListener('click', () => {
  ul.classList.add('show') 
  hamburger.classList.add("hide")
  close.classList.add("show")
})

close.addEventListener('click', () => {
  ul.classList.remove('show') 
  hamburger.classList.remove("hide")
  close.classList.remove("show")
})

const menuItems = document.querySelectorAll('header .container nav li a')
menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    menuItems.forEach((link) => link.classList.remove('active'))
    item.classList.add('active')
  })
})

console.log('from script')
