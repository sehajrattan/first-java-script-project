let yourscore = 0 ;
let compscore = 0 ;
let scoreu = document.querySelector(".sco")
let scorecomp = document.querySelector(".scoe")
let choose_box =document.querySelector(".choose")
let showwinner = (userwin =>{
    if(userwin){
        choose_box.innerText ="YOU WIN" ;
        yourscore++
        scoreu.innerText= yourscore;
        console.log("you win");
    }
    else{
        choose_box.innerText ="YOU LOOSE" ;
        compscore++ ;
        scorecomp.innerText= compscore ;
        console.log("you loose")
    }
})
let compchoice = ()=>{
    let comp_list = ["rock" , "papper" , "scissors"] ;
    let randomindx = Math.floor(Math.random()*3) ;
    return comp_list[randomindx] ;
}
let objects = document.querySelectorAll(".obj") ;
objects.forEach((choice) =>{
    console.log(choice) ;
choice.addEventListener("click", () =>{
    let user_choice =choice.getAttribute("id");
    playgame(user_choice)
})
})
let draw_game = ()=>{
    choose_box.innerText="Game Draw"
console.log("game is draw") ;
}
let playgame = (user_choice) =>{
    console.log(`${user_choice} was clicked`) ;
     let comp_choice = compchoice() ;
        console.log(`${comp_choice} clicked by computer`) ;
if(user_choice===comp_choice){
    draw_game() ;
}
else{
let userwin = true ;
if(user_choice==="rock"){
    userwin = comp_choice==="papper" ? false : true ;}
    else if(user_choice==="papper"){
userwin= comp_choice==="scissors" ? false : true ;
    }
    else{
        userwin = comp_choice==="rock" ? false : true ; 
    }
    showwinner(userwin)
}
     }