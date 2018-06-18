'use strict';

$(document).ready(function() {
  // Put app logic in here

  var move = 'X';

  $('[data-cell]').on('click', function() {

    if($(this).text() === '') {
        $(this).text(move);
      winner();
          if(move === 'O') { // switch between X & O
            move = 'X';
          }else {
            move = 'O';
          }

      }

  }) // END function for data-cell

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
    let $box9 = $("[data-cell~='9']").text();
    let $box10 = $("[data-cell~='10']").text();
    let $box11 = $("[data-cell~='11']").text();
    let $box12 = $("[data-cell~='12']").text();
    let $box13 = $("[data-cell~='13']").text();
    let $box14 = $("[data-cell~='14']").text();
    let $box15 = $("[data-cell~='15']").text();
    let $box16 = $("[data-cell~='16']").text();
    let $box17 = $("[data-cell~='17']").text();
    let $box18 = $("[data-cell~='18']").text();
    let $box19 = $("[data-cell~='19']").text();
    let $box20 = $("[data-cell~='20']").text();
    let $box21 = $("[data-cell~='21']").text();
    let $box22 = $("[data-cell~='22']").text();
    let $box23 = $("[data-cell~='23']").text();
    let $box24 = $("[data-cell~='24']").text();



    if (
           ($box0 === move && $box1 === move && $box2 === move && $box3 === move && $box4 === move)
        || ($box5 === move && $box6 === move && $box7 === move && $box8 === move && $box9 === move)
        || ($box10 === move && $box11 === move && $box12 === move && $box13 === move && $box14 === move)
        || ($box15 === move && $box16 === move && $box17 === move && $box18 === move && $box19 === move)
        || ($box20 === move && $box21 === move && $box22 === move && $box23 === move && $box24 === move)

        || ($box0 === move && $box5 === move && $box10 === move && $box15 === move && $box20 === move)
        || ($box1 === move && $box6 === move && $box11 === move && $box16 === move && $box21 === move)
        || ($box2 === move && $box7 === move && $box12 === move && $box17 === move && $box22 === move)
        || ($box3 === move && $box8 === move && $box13 === move && $box18 === move && $box23 === move)
        || ($box4 === move && $box9 === move && $box14 === move && $box19 === move && $box24 === move)

        || ($box0 === move && $box6 === move && $box12 === move && $box18 === move && $box24 === move)
        || ($box20 === move && $box16 === move && $box12 === move && $box8 === move && $box4 === move)
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
