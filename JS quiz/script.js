

//set variable for writing to html
var displayContent = $('#gameContent');


//store value of timer in variable 
var timerValue = 20;

var questions = [ 
{   
    question: "How does a 'for' loop start?",
    answerChoices: ["for i =0", "for = i <0; i++", "for (i=0; i <5; i++)", "for (i=0)"],
    correctChoice: "for (i=0; i <5; i++)",
},  
{
    question: "How do you start a multi-lined comment in JavaScript",
    answerChoices: ["//", "/*", "<!", "*?"],
    correctChoice: "/*",
}, 
{
    question: "What is the correct way to write an array?",
    answerChoices: ["var 1 = [0, 1, 2]", "var 1 = (0, 1, 2)", "var 1 = 0, 1, 2", "array 1 = 0, 1, 2"],
    correctChoice: "var 1 = [0, 1, 2]",
},
{

    question: "How do you declare a variable?",
    answerChoices: ["var pinkDog;", "variable pinkDog;", "var 1;", "OnePinkDog;"],
    correctChoice: "var pinkDog;",
},
{
    question: "what is the correct way to write the console log function?",
    answerChoices: ["var consoleLog", "consoleLog", "console.log()", "console.log"],
    correctChoice: "console.log()",
},
];


var trivia = {
    questions: questions,
    currentQ: 0,
    clock: timerValue,
    correct: 0,
    incorrect: 0,
    missed: 0,
    highScore: 0,
    tickingClock: function () {
        trivia.clock--;
        $('#secondsLeft').html(trivia.clock);

        if (trivia.clock === 0) {
            trivia.outOfTime();
        }
    },
 
    questionDisplay: function () {
      
        timer = setInterval(trivia.tickingClock, 1000);
    
        displayContent.html('<h2>' + questions[this.currentQ].question + '</h2>');
        for (var i = 0; i < questions[this.currentQ].answerChoices.length; i++) {
            displayContent.append('<button class="choices" id="button"' + 'data-name="' + questions[this.currentQ].answerChoices[i] + '">' + questions[this.currentQ].answerChoices[i] + '</button>');
        }
    },

    nextQuestion: function () {
        trivia.clock = timerValue;
        $('#secondsLeft').html(trivia.clock);
        trivia.currentQ++;
        trivia.questionDisplay();
    },
    outOfTime: function () {
        clearInterval(timer);
        $('#secondsLeft').html(trivia.clock);
        displayContent.html("<h2>you took too long!</h2>");
        displayContent.append('<h2>The answer is: ' + questions[this.currentQ].correctChoice);

        if (trivia.currentQ === questions.length - 1) {
            setTimeout(trivia.result, 2 * 1000);
        } else {
            setTimeout(trivia.nextQuestion, 2 * 1000);
        }
    },
    
    selected: function (e) {
        clearInterval(timer);
        
        if ($(e.target).data("name") === questions[this.currentQ].correctChoice) {
            this.correctlySelected();
        } else {
            this.incorrectlySelected();
        }
    },
    
    correctlySelected: function () {
        
        trivia.correct++;
        clearInterval(timer);
        displayContent.html('<h2>' + questions[trivia.currentQ].correctChoice + ' is correct!</h2>');
        if (trivia.currentQ === questions.length - 1) {
            setTimeout(trivia.result, 3 * 1000);
        } else {
            setTimeout(trivia.nextQuestion, 3 * 1000);
        }
    },
    
    incorrectlySelected: function () {
      trivia.incorrect++;
        clearInterval(timer);
        displayContent.html('<h2> Sorry, incorrect! </h2>');
        displayContent.append('<h2>The correct answer is: ' + questions[trivia.currentQ].correctChoice + '</h2>');
        if (trivia.currentQ === questions.length - 1) {
            setTimeout(trivia.result, 3 * 1000);
        } else {
            setTimeout(trivia.nextQuestion, 3 * 1000);
        }
    },
    
     result: function () {
        clearInterval(timer);
        displayContent.html('<h2>SCORE:</h2>');
        $('#secondsLeft').html(trivia.clock);
        displayContent.append('<h2>Correct: ' + trivia.correct + '</h2>');
        displayContent.append('<h2>Incorrect: ' + trivia.incorrect + '</h2>');
        displayContent.append('<h2>Missed: ' + (questions.length - (trivia.incorrect + trivia.correct)) + '</h2>');
        displayContent.append('<br><button id="replay">replay?</button>');
    },
    
    reset: function () {
        this.currentQ = 0;
        this.clock = timer;
        this.correct = 0;
        this.incorrect = 0;
        this.questionDisplay();
    }
};

$(document).on('click', '#start', function (e) {
    $('#timerDisplay').prepend('<h2>Time Remaining: <span id="secondsLeft">20</span> seconds</h2>');
    trivia.questionDisplay();
});
$(document).on('click', '#replay', function (e) {
    trivia.reset();
});

$(document).on('click', '.choices', function (e) {
    trivia.selected(e);
});
//if user clicks highscore button it will show 
 var triviaStored = JSON.stringify(trivia);
 localStorage.setItam("triva", triviaStored);
 var triviaResults = JSON.parse(localStorage.getItem(trivia));
 
