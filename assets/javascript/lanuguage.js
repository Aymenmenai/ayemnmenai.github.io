import english from '../data/english.json'
const setlanguage=(lang)=>{
    switch(lang){
        case 'English':
            return english
        default:
            return english
    }
}

export default setlanguage