const questions=
[
{
    question:"which is the largest animal?",
    answers:[
    {text:"blue whale",correct:true},
    {text:"shark",correct:false},
    {text:"elephant",correct:false},
    {text:"giraffe",correct:false},
]
},
{
    question:"which is the national animal?",
    answers:[
    {text:"lion",correct:true},
    {text:"tiger",correct:false},
    {text:"elephant",correct:false},
    {text:"giraffe",correct:false},
]
},
{
    question:"which is the largest bird?",
    answers:[
    {text:"Ostrich",correct:true},
    {text:"peacock",correct:false},
    {text:"crow",correct:false},
    {text:"parrot",correct:false},
]
},
{
    question:"which animal is extinct?",
    answers:[
    {text:"danosour",correct:true},
    {text:"dog",correct:false},
    {text:"elephant",correct:false},
    {text:"giraffe",correct:false},
]
}
];

const ansbtns=document.querySelector(".buttmain");
const sec=document.querySelector(".butnmain");
const third=document.querySelector(".app1");
const forth=document.querySelector(".butn");

let checkindex=0;
let score=0;

function  updatequestion(){
    checkindex=0;
    score=0;
    forth.innerText="next";
    showquestion();
}
//setting question and answers
function showquestion(){
    remove();

            const ques1=questions[checkindex];
            const que=checkindex+1;
            third.innerHTML=que + "." + ques1.question;

            ques1.answers.forEach(answer=> {
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("butt");
            ansbtns.appendChild(button);
            if(answer.correct){
                  button.dataset.correct = answer.correct;
                }
                button.addEventListener("click",selectanswer);
            });
                   
                     
 };
function remove(){
   forth.style.display="none";
    while(ansbtns.firstChild){
        ansbtns.removeChild(ansbtns.firstChild);
    }
}

function  selectanswer(e){
   const selectedbutn=e.target;
   const iscorrect=selectedbutn.dataset.correct==="true";
   if(iscorrect){
    selectedbutn.classList.add("correct");
    score++;
   }else{
    selectedbutn.classList.add("incorrect");
   }

   Array.from(ansbtns.children).forEach(button =>{
    if(button.dataset.correct==="true"){
       button.classList.add("correct");
    }
       button.disabled="true";
   });
   forth.style.display="block";
};
updatequestion()

 forth.addEventListener("click",()=>{
    if(checkindex < questions.length){
        handlenextbtn();
    }else{
        updatequestion();
    };
 });

 function handlenextbtn() {
    checkindex++;
    if(checkindex < questions.length){
        showquestion();
    }else{
        scorecard();
    }
 };
 
  function scorecard(){
    remove();
    third.innerText=`you scored ${score} out of ${questions.length} !`;
    forth.innerText="play  again";
    forth.style.display="block";
  }

