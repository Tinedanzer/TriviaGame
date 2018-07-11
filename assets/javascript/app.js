// made variables to receive the arrays, in order to access the arrays later
var radio1= document.getElementsByName('Answers');
var radio2= document.getElementsByName('True');
// made an object to hold some of the changing data.
Trivia={
    timer: 45,
    correct: 0,
    wrong: 0,
    intervalId: 0,
    // made the clock shop up on the page.
    timerFunc: function(){
        $("#Clock").html(this.timer);
        // document.getElementById("Clock").innerHTML = Trivia.timer;
            intervalId = setInterval(decrement, 1000);
    },    
};
// made a function to reduce the clock timer, while constantly showing Time, until 0seconds.
// then i stopped the click, alerted, marked both answers wrong, and brought you to the new page.
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
// stops the clock!
 function stop(){
    clearInterval(intervalId);
};
// created and styled a new html page using only javascript.
function newpage(){
    $('body').empty();
    var name2= "<p>TOTALLY TRIVIAL TRIVIA!!</p>";
    var correct2= "<p2 style='display:block'>Correct :<script>$('p2').append(Trivia.correct)</script></p>";
    var wrong2= "<p3 style='display:block'>Wrong :  <script>$('p3').append(Trivia.wrong) </script></p>";
    var newbutton= "<button id=newbutton value=button onclick=location.href='https://tinedanzer.github.io/TriviaGame/' style='display: block; margin: 0 auto'>Retake Trivia!</button>";
    $("body").append(name2, correct2, wrong2, newbutton)
};
// starts the clock/game.
Trivia.timerFunc();
// button to end game, with appropriate functions to go to the next part.
$('#Done').on ('click', function(){
    counter1();
    counter2();
    newpage();
    stop();
});
// counter 1 and 2 check the RIGHT answer slots in the arrays, if the right answer was not,
// checked, then you get a wrong tally.
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
