import english from '../data/english.json' assert { type: "json" };
import french from '../data/french.json' assert { type: "json" };
import arabic from '../data/arabic.json' assert { type: "json" };
import hungarian from '../data/hungarian.json' assert { type: "json" };
import chinese from '../data/chinese.json' assert { type: "json" };
import italian from '../data/italian.json' assert { type: "json" };
import german from '../data/german.json' assert { type: "json" };

const setlanguage = (lang) => {
    console.log(lang)
    switch (lang) {
        case 'English':
            return english
        case 'Français':
            return french
        case 'العربية':
            return arabic
        case 'Magyar':
            return hungarian
        case '中文':
            return chinese
        case 'italiano':
            return italian
        case 'Deutsch':
            return german
        default:
            return english
    }
}

//LANGUAGE
const langbtn = document.querySelector('.language i')
const popUpLang = document.querySelector('.language .pop-up')
const setLangbtn = document.querySelectorAll('.language .pop-up li')


let condition = 0
langbtn.addEventListener('click', () => {
    if (!condition) {
        popUpLang.style.animation = `popup 200ms linear forwards`;
        popUpLang.style.display = 'grid'
        condition = !condition
        setTimeout(() => {
            popUpLang.style.animation = `popback 200ms linear forwards`;
            setTimeout(() => {
                popUpLang.style.display = 'none'
                condition = !condition
            }, 300);

        }, 5000);
    } else {
        popUpLang.style.animation = `popback 200ms linear forwards`;
        setTimeout(() => {
            popUpLang.style.display = 'none'
            condition = !condition
        }, 300);

    }
})

// SET NEW LANGUAGE 
const newlangData = (data) => {
    document.querySelector('main h1').textContent = data.main.title
    document.querySelector('main p').textContent = data.main.description

    document.querySelector('.tech h2').textContent = data.tech.title
    document.querySelector('.tech p').textContent = data.tech.description


    document.querySelector('.project h2').textContent = data.project.title
    document.querySelector('.project p').textContent = data.project.description
    document.querySelector('.contact-me h2').textContent = data.contact.title
    document.querySelector('.contact-me p').textContent = data.contact.description
}

setLangbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = setlanguage(btn.textContent)
        // console.log(lang)
        newlangData(lang)
        // SET DATA
        popUpLang.style.animation = `popback 200ms linear forwards`;
        setTimeout(() => {
            popUpLang.style.display = 'none'
            condition = !condition
        }, 300);

    })
})

// DARK MODE
// const img = document.querySelector('main img')
let dark = 0
document.querySelector('.dark-btn').addEventListener('click', () => {
    if (!dark) {
        document.body.classList.add('dark')
        // console.log(img)
        // document.querySelector('main img').src ='./assets/image/d.svg'
        dark = !dark
    } else {
        document.body.classList.remove('dark')
        
        // document.querySelector('main img').src ='./assets/image/l.svg'

        dark = !dark
    }
})
// EMAIL
// APPLICATION
const card = document.querySelector('.card')
const overlay = document.querySelector('.overlay')
const btns = document.querySelector('.btns')
const cancel = document.querySelector('.btns .cancel')

card.addEventListener('click',()=>{
    document.body.style.overflow ='hidden'
    overlay.style.display ='flex'
    btns.style.display ='flex'
    card.classList.add('active')

    
})

overlay.addEventListener('click',()=>{
    
    document.body.style.overflow ='auto'
    overlay.style.display ='none'
    card.classList.remove('active')
    btns.style.display ='none'
    
})

