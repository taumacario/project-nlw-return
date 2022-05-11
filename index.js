window.addEventListener('scroll', onScroll);

onScroll()

function onScroll (){
 showNavOnScroll()
 showBackToTopButtonOnScroll()

 activeMenutCurrentSection (home)
 activeMenutCurrentSection (services)
 activeMenutCurrentSection (about)
 activeMenutCurrentSection (contact)
}

function activeMenutCurrentSection (section){
  const targetLine = scrollY + innerHeight/2


  //verificar se sessão passou da linha
  //quais dados vou precisar?!
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //o topo da sessãochegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //informações dos dados
  console.log('O topo da sessão chegou ou passou da linha?',sectionTopReachOrPassedTargetLine)

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedtTargetLine = sectionEndsAt <= targetLine

  console.log('O fundo da sessão passou da linha?', sectionEndPassedtTargetLine)

  //limites da sessão
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedtTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector (`.menu a[href*=${sectionId}]`)
  
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll(){
  if (scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

function changeColorRed(){
  document.body.className = '';
  document.body.classList.add('changeColorRed')
}
function changeColorGreen(){
  document.body.classList.toggle('changeColorGreen')
}
function changeColorBlue(){
  document.body.classList.toggle('changeColorBlue')
}
function changeColorPurple(){
  document.body.classList.toggle('changeColorPurple')
}

ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 900,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content')