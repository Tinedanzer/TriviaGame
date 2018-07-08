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
        Trivia.wrong++;
        Trivia.wrong++;
    }
};
 function stop(){
    clearInterval(intervalId);
};
function newpage(){
    var name2= "<p>TOTALLY TRIVIAL TRIVIA!!</p>";
    var correct2= "<p2 style='display:block'>Correct :<script>$('p2').append(Trivia.correct)</script></p>";
    var wrong2= "<p3 style='display:block'>Wrong :  <script>$('p3').append(Trivia.wrong) </script></p>";
    var newbutton= "<button id=newbutton value=button onclick=location.href='https://tinedanzer.github.io/TriviaGame/' style='display: block; margin: 0 auto'>Retake Trivia!</button>";
    $("body").append(name2, correct2, wrong2, newbutton)
};

Trivia.timerFunc();

$('#Done').on ('click', function(){
    $('body').empty();
    newpage();
    stop();
})

// cleardivonclick="location.href='http://google.com'
// also, create a new div in html, to append the new elements for the new page
// $( document ).ready(function(){
// Trivia.timerFunc();
// $("#Clock").html(Trivia);
// })
// getElementbyId