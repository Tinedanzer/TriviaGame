Trivia={
    timer: 45,
    correct: 0,
    wrong: 0,
    timerFunc: function(){
        $("#Clock").html(Trivia.timer);
        // document.getElementById("Clock").innerHTML = Trivia.timer;
    }
}
// $( document ).ready(function(){
// Trivia.timerFunc();
// $("#Clock").html(Trivia);
// })
// getElementbyId
Trivia.timerFunc()
// document.getElementById("Clock").innerHTML = Trivia.timer;