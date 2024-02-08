let main_pic = document.getElementById('glavna_slika');
let decline_btn = document.getElementById('no');
let accept_btn = document.getElementById('yes');
let text = document.getElementById('text')

function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }

decline_btn.addEventListener('mouseover', ()=>{
    let w = window.innerWidth
    let h = window.innerHeight
    randomTop = getRandomNumber(0, h);
    randomLeft = getRandomNumber(0, w);
    
    // update top and left position
    decline_btn.style.position = 'absolute'
    decline_btn.style.top = randomTop +"px";
    decline_btn.style.left = randomLeft +"px";
    changeText(decline_btn)
})

function changeText(t) {
    switch(t.innerHTML) {
        case 'Nu-uh':
            t.innerHTML = 'Really?'
            main_pic.src = 'imgs/sad.gif'
            main_pic.style.width = '50%'
            break;
            case 'Really?':
                t.innerHTML = 'Think about it!'
                main_pic.src = 'imgs/sad.gif'
                break;
                case 'Think about it!':
                    t.innerHTML = 'Have mercy :('
                    main_pic.src = 'imgs/bigsad.gif'
                    main_pic.style.width = '50%'
                    break;
                    case 'Have mercy :(':
                        main_pic.src = 'imgs/bigsad.gif'
                        t.innerHTML = 'But I love you :c'
                        break;
                        default:
            main_pic.src = 'imgs/sad.gif'
            t.innerHTML = 'Really?'
    }
}


let clicked = false;
accept_btn.addEventListener('mouseleave', ()=>{
    if (!clicked) {

        main_pic.src = 'imgs/bl.gif'
        main_pic.style.width = '50%'
    }
})

accept_btn.addEventListener('mouseover', ()=>{
    main_pic.src = 'imgs/love.gif'
    main_pic.style.width = '45%'
})

accept_btn.addEventListener('click', ()=>{
    clicked = true
    decline_btn.style.display = 'none'
    accept_btn.style.display = 'none'
    main_pic.src = 'imgs/cute-cat.gif'
    main_pic.style.width = '70%'
    text.innerHTML = `I'll love you with my every breath until my last day <3`
})