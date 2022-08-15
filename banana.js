let x = 0;
let y = 0;
let z = 0;
function selecaoBorda1(butao){
    
    const selecionado1 = document.querySelector('.sb1');
    if(selecionado1 !== null){
        selecionado1.classList.remove('sb1');
    }
    butao.classList.toggle('sb1'); 
    x = Number(1);
}

function selecaoBorda2(butao){
    const selecionado1 = document.querySelector('.sb2');
    if(selecionado1 !== null){
        selecionado1.classList.remove('sb2');
    }
    butao.classList.toggle('sb2'); 
    y = Number(1);
}

function selecaoBorda3(butao){
    const selecionado1 = document.querySelector('.sb3');
    if(selecionado1 !== null){
        selecionado1.classList.remove('sb3');
    }
    butao.classList.toggle('sb3'); 
    z = Number(1);
}

function selecaoCheck1(){
    const check = document.querySelector('.ion1')
    
    const check2 = document.querySelector('.p2')
    const check3 = document.querySelector('.p3')
    
    check2.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck2(){
    const check = document.querySelector('.ion2')
    const check1 = document.querySelector('.p1')
    const check3 = document.querySelector('.p3')
    check1.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck3(){
    const check = document.querySelector('.ion3')
    const check1 = document.querySelector('.p1')
    const check2 = document.querySelector('.p2')
    check1.classList.add('check1');
    check2.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck4(){
    const check = document.querySelector('.ion4')
    const check2 = document.querySelector('.p5')
    const check3 = document.querySelector('.p6')
    check2.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck5(){
    const check = document.querySelector('.ion5')
    const check1 = document.querySelector('.p4')
    const check3 = document.querySelector('.p6')
    check1.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck6(){
    const check = document.querySelector('.ion6')
    const check1 = document.querySelector('.p4')
    const check2 = document.querySelector('.p5')
    check1.classList.add('check1');
    check2.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck7(){
    const check = document.querySelector('.ion7')
    const check2 = document.querySelector('.p8')
    const check3 = document.querySelector('.p9')
    check2.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck8(){
    const check = document.querySelector('.ion8')
    const check1 = document.querySelector('.p7')
    const check3 = document.querySelector('.p9')
    check1.classList.add('check1');
    check3.classList.add('check1');
    check.classList.remove('check1');
}

function selecaoCheck9(){
    const check = document.querySelector('.ion9')
    const check1 = document.querySelector('.p7')
    const check2 = document.querySelector('.p8')
    check1.classList.add('check1');
    check2.classList.add('check1');
    check.classList.remove('check1');
}

function pronto(){
    const baixo = document.querySelector('.baixo')
    const baixocheck = document.querySelector('.baixo-check')
    if(x + y + z === 3){
        baixo.classList.add('check1')
        baixocheck.classList.remove('check1')
    }
}





