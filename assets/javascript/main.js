// CREATE STAR ANIMATION
[...Array(400).keys()].forEach(()=>{
    // SIZE
    let size=(Math.random()*2)+1
    // TARNSFORM
    let t = Math.random()*60
    let l = (Math.random()*90)+5
    // ANIMATION DURATION
    let d = (Math.random()*5)+6
    // SET NEW ELEMENT 
    let newDiv = document.createElement('div')
    newDiv.classList.add('star')
    newDiv.style.position =`absolute`
    newDiv.style.top =`${t}%`
    newDiv.style.left =`${l}%`
    newDiv.style.width =`${size}px`
    newDiv.style.height =`${size}px`
    newDiv.style.animation =`${d}s star infinite linear`

    // SET NEW ELEMENT ON THE BACKGROUND
    document.querySelector('.background-animate').appendChild(newDiv)

})
