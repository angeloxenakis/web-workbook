'use strict';

$(document).ready(function() {
  // Put app logic in here

  var move = 'X';

  $('[data-cell]').on('click', function() {

    if($(this).text() === '') {
        $(this).text(move);
      winner();
          if(move === 'O') {
            move = 'X';
          }else {
            move = 'O';
          }

      }

  })

  function winner() {

    let $box0 = $("[data-cell~='0']").text();
    let $box1 = $("[data-cell~='1']").text();
    let $box2 = $("[data-cell~='2']").text();
    let $box3 = $("[data-cell~='3']").text();
    let $box4 = $("[data-cell~='4']").text();
    let $box5 = $("[data-cell~='5']").text();
    let $box6 = $("[data-cell~='6']").text();
    let $box7 = $("[data-cell~='7']").text();
    let $box8 = $("[data-cell~='8']").text();

    if (
           ($box0 === move && $box1 === move && $box2)
        || ($box3 === move && $box4 === move && $box5)
        || ($box6 === move && $box7 === move && $box8)

        || ($box0 === move && $box3 === move && $box6)
        || ($box1 === move && $box4 === move && $box7)
        || ($box2 === move && $box5 === move && $box8)

        || ($box0 === move && $box4 === move && $box8)
        || ($box2 === move && $box4 === move && $box6)
      ){

      // console.log('Player ' + move + ' wins!');
      $('#announce-winner').html (`Player ${move} wins!`);

    }
  }

  // clear the board

  $('#clear').click(cleanUp); // when the clear board button is clicked, function cleanUp runs

  function cleanUp() {
    $('[data-cell]').empty();
    $('#announce-winner').empty();
    move = 'X';
  }

}) // END ready function
