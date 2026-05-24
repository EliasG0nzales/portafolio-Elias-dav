/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const circularText = document.querySelector('.home__text')

if(circularText){
   circularText.innerHTML = circularText.textContent.split('').map((char, index) =>
      `<span style="transform:rotate(${index * 14.5}deg)">${char}</span>`
   ).join('')
}

/*=============== HOME TYPED JS ===============*/
if(typeof Typed !== 'undefined'){
   new Typed('#home-typed', {
      strings: ['Inteligencia Artificial', 'Analisis de Datos', 'Diseno UI/UX'],
      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1600,
      loop: true
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('scroll-header')
                         : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES ACCORDION ===============*/
const servicesCards = document.querySelectorAll('.services__card')

servicesCards.forEach(card =>{
   const button = card.querySelector('.services__button')

   button.addEventListener('click', () =>{
      const isOpen = card.classList.contains('services-open')

      servicesCards.forEach(item => item.classList.remove('services-open'))

      if(!isOpen){
         card.classList.add('services-open')
      }
   })
})

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message-status')

if(contactForm){
   contactForm.addEventListener('submit', (e) =>{
      e.preventDefault()

      contactMessage.textContent = 'Mensaje listo para enviar. Configura EmailJS para entregarlo.'
      contactForm.reset()

      setTimeout(() =>{
         contactMessage.textContent = ''
      }, 5000)
   })
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 90,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(sectionsClass){
         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
         }else{
            sectionsClass.classList.remove('active-link')
         }
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLLREVEAL ANIMATION ===============*/
if(typeof ScrollReveal !== 'undefined'){
   const sr = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 900,
      delay: 120
   })

   sr.reveal('.home__data, .section__title, .skills__description')
   sr.reveal('.home__image, .about__data, .contact__info', {origin: 'right'})
   sr.reveal('.about__title, .contact__form', {origin: 'left'})
   sr.reveal('.work__card, .services__card, .skills__card, .testimonials__card', {interval: 80})
}
