


  // DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'img/FirstDate.jpeg',
  'img/Rota.jpeg',
  'img/FirstXmas.jpeg',
  'img/FirstXmas1.jpeg',
  'img/eight.jpeg',
  'img/Rotovegas.jpeg',
  'img/Whangamata.jpeg',
  'img/wanaka.jpg',
  'img/Pro.jpeg',
  'img/Lake.jpeg',
  'img/Mall.jpeg',
  'img/Roto.jpeg',
  'img/eight.jpeg',

];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 12],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}



  
