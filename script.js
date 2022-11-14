let box = document.querySelectorAll(' .box')
let ting = new Audio ('ting.mp3');
let turn ="X"
let winner='';
let isGameOver = false;
let gameover = new Audio('music.mp3');

let boxtext = document.getElementsByClassName('boxtext');

function changeTurn(){
    turn==="X"?turn="O":turn="X";
}

let reset = document.querySelector('.reset');

reset.addEventListener('click',()=>{
    isGameOver=false;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.winner').textContent = ``;
    gameover.pause();
    for(let i=0;i<boxtext.length;i++){
        boxtext[i].textContent='';
    }
    document.querySelector('.line').style.width = '0';

})

const checkwin = ()=>{
    
   
    console.log(boxtext[0].textContent)
    let win = [
        [0,1,2,0,5,0],
        [3,4,5,0,18,0],
        [6,7,8,0,30,0],
        [0,3,6,-13,18,90],
        [1,4,7,0,18,90],
        [2,5,8,12,18,90],
        [0,4,8,0,17,45],
        [6,4,2,2,16,135],

    ]

    win.forEach( e=> {
     
   
        if ((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='') ){

            console.log('win')
          winner = boxtext[e[0]].textContent;
          console.log(winner);
            isGameOver=true;
         
          
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width='200px'
            document.querySelector('.winner').textContent=`player ${winner}  won`;

         
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '35vw';
           
           

        }
})
}


Array.from(box).forEach((b)=>{
   b.addEventListener('click',function(){
    ting.play();
       if (b.querySelector('.boxtext').textContent !== "X" && b.querySelector('.boxtext').textContent !== "O" )
    {
        b.querySelector('.boxtext').textContent = turn; 
           changeTurn();  
           document.querySelector('.turn').textContent=turn;
    }
   

    if(!isGameOver)
    {
        checkwin();

    }
       if (isGameOver) {
           gameover.play();

       }
     
        
   })
})

