const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche')
const allItemNav = document.querySelectorAll('.nav-menu-item')
const ligne = document.querySelector('.cont-ligne')

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})
if(window.matchMedia("(max-width: 1300px)")) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })
}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation')

let typewriter = new Typewriter(txtAnim, {
    loop : false,
    deleteSpedd : 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Je me présente c\'est Loïc ')
.pauseFor(300)
.typeString('<strong>, développeur full-stack</strong>')
.pauseFor(500)
.deleteChars(22)
.typeString('<strong> traducteur</strong>')
.pauseFor(500)
.deleteChars(10)
.typeString('<strong> graphiste</strong>')
.start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })
}
