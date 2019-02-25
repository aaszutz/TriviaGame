//start your dom with doc ready function

$(document).ready(function() {

    //create your variables that will be global
    var number = 50;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;
    
    //start your countdown
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    
    //hide your content on the main page when loaded, so you have to click the start button
    $(window).on("load", hide);
    
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });
    
    $('#finished').on('click', function(){
        $('#start').hide();
        hide();
        reportSummary();
        stop();
    });
    
    //create the elements for where you will show the summary of the game on the last
    function reportSummary(){
        var done = $('<h2 id="done">').html('All Done!');
        var correctAsnwers = $('<p>').html('Correct answers: ' + correctCount);
        var wrongAnswers = $('<p>').html('Incorrect answers: ' + wrongCount);
        var countUnasnwered = $('<p>').html('Unanswered: ' + unanswered);
        var newclass= $('<div class="col-lg-12 col-lg-offset-4 text-center" id="score">');
        newclass.append(done);
        newclass.append(correctAsnwers);
        newclass.append(wrongAnswers);
        newclass.append(countUnasnwered);
        $('.row:nth(2)').append(newclass);
    }
    
    function decrement() {
        //  decrease number by one.
        number--;
         
         //  show the timer on the page
         $("#timer").html(" " + number + " seconds");
        
        //  once number hits one change seconds to second.
        if (number === 1) {
            $("#timer").html(" " + number + " second");
        }
          //  once number hits zero run the stop function
        else if (number === 0) {

            $('#start').hide();
            hide();
            reportSummary();
            stop();
        }
    }
    
    function stop() {
        clearInterval(intervalId);
    }
    
    
    
    //create a function to hide the contents
    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#finished').hide();
    }
    
    //create function to show the contents again
    function show() {
        $('.form-group').show();
        $('#time').show();
        $('#finished').show();
    }
    
    //calculate correct and incorrect answers when a change occurs
    $('input[type=radio]').on("change", function() {
       correctCount =  $('input[value=goodanswer]:checked').length;
       wrongCount = $('input[value=wrong]:checked').length;
       unanswered = (8-(correctCount + wrongCount));
       console.log (unanswered); 
    });
    
    });