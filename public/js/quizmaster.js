function padZeros(number, length) {
    var output = number.toString();

    while(output.length < length) {
        output = '0' + output;
    }

    return output;
}

$(document).ready(function() {
    var socket = io.connect();
    var clientAbbr = $('meta[name="client-abbr"]').attr('content');
    var choice = '';
    var score = 0;
    var timerIntval = null;
    var questionID = null;
    var correctAnswer = null;
    var questionNumber = null;
    var questionDifficulty = null;
    var choiceA = null;
    var choiceB = null;
    var choiceC = null;
    var choiceD = null;

    socket.on('flash_modal', function(data) {
        setModalContent('modal', data.header, data.message);
        openModal('modal');

        setTimeout(function() {
            closeModal('modal');
        }, 10000);
    });

    socket.on('set_timer', function(data) {
        $('#client-game-time > #min').text(padZeros(data.minutes, 2));
        $('#client-game-time > #sec').text(padZeros(data.seconds, 2));
    });

    socket.on('start_timer', function(data) {
        $('#client-choice-a').attr('disabled', false);
        $('#client-choice-b').attr('disabled', false);
        $('#client-choice-c').attr('disabled', false);
        $('#client-choice-d').attr('disabled', false);

        var min = parseInt($('#min').text());
        var sec = parseInt($('#sec').text());
        var audioElement;

        choice = '';

        timerIntval = setInterval(function() {
            if(sec == 0 && min == 0) {
                clearInterval(timerIntval);
                audioElement.stop();

                $('#client-choice-a').attr('disabled', true);
                $('#client-choice-b').attr('disabled', true);
                $('#client-choice-c').attr('disabled', true);
                $('#client-choice-d').attr('disabled', true);

                if(choice == '') {
                    score = 0;
                } else {
                    if(choice == correctAnswer) {
                        if(questionDifficulty == 'earthshaking') {
                            score = 10;
                        } else if(questionDifficulty == 'mindblowing') {
                            score = 15;
                        } else if(questionDifficulty == 'kayangkaya') {
                            score = 10;
                        } else if(questionDifficulty == 'isipisip') {
                            score = 15;
                        }
                    } else {
                        score = 0;
                    }
                }
            } else {
                if(sec == 1) {
                    audioElement = new Audio('../sounds/school_bell.wav');
                    audioElement.play();
                } else if(sec >= 2 && sec <= 6) {
                    audioElement = new Audio('../sounds/clock_buzzing.wav');
                    audioElement.play();
                } else {
                    audioElement = new Audio('../sounds/clock_beating.wav');
                    audioElement.play();
                }

                sec--;

                if(min > 0 && sec == -1) {
                    sec = 59;
                    min--;
                }
 
                if(sec <= 9) {
                    $('#sec').text('0' + sec);
                } else {
                    $('#sec').text(sec);
                }

                if(min <= 9) {
                    $('#min').text('0' + min);
                } else {
                    $('#min').text(min);
                }
            }

            console.log(timerIntval);
        }, 1000);
    });

    socket.on('stop_timer', function(data) {
        clearInterval(timerIntval);

        $('#client-choice-a').attr('disabled', true);
        $('#client-choice-b').attr('disabled', true);
        $('#client-choice-c').attr('disabled', true);
        $('#client-choice-d').attr('disabled', true);
    });

    socket.on('broadcast_question', function(data) {
        questionID = data.questions[0]._id;

        if(data.questions[0].difficulty == 'earthshaking') {
            $('#client-question-difficulty').html('Earth-Shaking');
        } else if(data.questions[0].difficulty == 'mindblowing') {
            $('#client-question-difficulty').html('Mind-Blowing');
        } else if(data.questions[0].difficulty == 'kayangkaya') {
            $('#client-question-difficulty').html('Kayang-Kaya');
        } else if(data.questions[0].difficulty == 'isipisip') {
            $('#client-question-difficulty').html('Isip-Isip');
        }

        questionNumber = data.questionNumber;
        correctAnswer = data.questions[0].correct_answer;
        questionDifficulty = data.questions[0].difficulty;
        choiceA = data.questions[0].choice_a;
        choiceB = data.questions[0].choice_b;
        choiceC = data.questions[0].choice_c;
        choiceD = data.questions[0].choice_d;

        $('#client-question-number').html(data.questionNumber);
        $('#client-question').html(data.questions[0].question);
        $('#client-choice-a > .block-body').html(data.questions[0].choice_a);
        $('#client-choice-b > .block-body').html(data.questions[0].choice_b);
        $('#client-choice-c > .block-body').html(data.questions[0].choice_c);
        $('#client-choice-d > .block-body').html(data.questions[0].choice_d);
    });

    socket.on('refresh_client', function(data) {
        location.reload();
    });

    socket.on('broadcast_correct_answer', function(data) {
        var ca = '';

        $('#client-choice-a > .block-body').attr('disabled', true);
        $('#client-choice-b > .block-body').attr('disabled', true);
        $('#client-choice-c > .block-body').attr('disabled', true);
        $('#client-choice-d > .block-body').attr('disabled', true);

        switch(correctAnswer) {
            case 'A':
                ca = choiceA;

                break;
            case 'B':
                ca = choiceB;

                break;
            case 'C':
                ca = choiceC;

                break;
            case 'D':
                ca = choiceD;

                break;
        }

        setModalContent('modal', 'Correct Answer', '<div class="text-center">' + ca + '</div>');
        openModal('modal');

        setTimeout(function() {
            closeModal('modal');
        }, 10000);
    });
});