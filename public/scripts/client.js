console.log('sourced');

$(document).ready(function(){

  var newJoke = {
    whoseJoke: '',
    jokeQuestion: '',
    Punchline: ''
  };
$('.submit').on('click', function(){
console.log('in submit');
newJoke.whoseJoke = $('.inputOne').val();
newJoke.jokeQuestion= $('.inputTwo').val();
newJoke.punchLine= $('.inputThree').val();
console.log(newJoke);
$.ajax({
      type: 'POST',
      url: '/newJokeSent',
      data: newJoke,
      success: function(data){
        console.log(data);
        if(data.length > 4){
          var b = (data.length - 1);
          $('.displayJoke').append('<h3>Joke ' + ( b + 1) + ': ' + data[b].whoseJoke + '<br>' + 'Joke: ' +
          data[b].jokeQuestion + '<br>' + 'Answer: ' + data[b].punchLine);
        }
        else{
          for (var i = 0; i < data.length; i++) {
            $('.displayJoke').append('<h3>Joke ' + (i +1) + ': ' + data[i].whoseJoke + '<br>' + 'Joke: ' +
            data[i].jokeQuestion + '<br>' + 'Answer: ' + data[i].punchLine);
        }
      }//clearInput();
      }
    });
});

// function clearInput(){
//   $('.inputOne') == '';
//   $('.inputTwo').val() == '';
//   $('.inputThree').val() =='';
// }


});
