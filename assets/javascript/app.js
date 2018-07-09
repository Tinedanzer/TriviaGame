var radio1= document.getElementsByName('Answers');
var radio2= document.getElementsByName('True');
Trivia={
    timer: 45,
    correct: 0,
    wrong: 0,
    intervalId: 0,
    timerFunc: function(){
        $("#Clock").html(this.timer);
        // document.getElementById("Clock").innerHTML = Trivia.timer;
            // clearInterval(this.intervalId); not needed
            intervalId = setInterval(decrement, 1000);
    },    
};
function decrement(){
        Trivia.timer--;
        $("#Clock").html(Trivia.timer)
    if (Trivia.timer===0){
        stop();
        alert("Time Up!");
        Trivia.wrong=2;
        newpage();
    }
};
 function stop(){
    clearInterval(intervalId);
};
function newpage(){
    $('body').empty();
    var name2= "<p>TOTALLY TRIVIAL TRIVIA!!</p>";
    var correct2= "<p2 style='display:block'>Correct :<script>$('p2').append(Trivia.correct)</script></p>";
    var wrong2= "<p3 style='display:block'>Wrong :  <script>$('p3').append(Trivia.wrong) </script></p>";
    var newbutton= "<button id=newbutton value=button onclick=location.href='https://tinedanzer.github.io/TriviaGame/' style='display: block; margin: 0 auto'>Retake Trivia!</button>";
    $("body").append(name2, correct2, wrong2, newbutton)
};

Trivia.timerFunc();

$('#Done').on ('click', function(){
    counter1();
    counter2();
    newpage();
    stop();
});
function counter1(){
    if (radio1[2].checked){
     Trivia.correct++
 }
    else{
     Trivia.wrong++;
 }};
 function counter2(){
    if(radio2[1].checked){
        Trivia.correct++
    }
    else{
        Trivia.wrong++
    }
 };
// $( document ).ready(function(){
