$(function () {
  let baseURL = 'https://deckofcardsapi.com/api/deck';

  // 1.
  $.getJSON(`${baseURL}/new/draw/`, function (data) {
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });

  // 2.
  $.getJSON(`${baseURL}/new/draw/`, function (data) {
    let firstCard = data.cards[0];
    let deckId = data.deck_id;
    $.getJSON(`${baseURL}/${deckId}/draw/`, function (data) {
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function (card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });
  });

  // 3.
  let deckId = null;
  let $btn = $('button');
  let $cardArea = $('#card-area');

  $.getJSON(`${baseURL}/new/shuffle/`, function (data) {
    deckId = data.deck_id;
    $btn.show();
  });

})