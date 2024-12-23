// Variables /////////////////////////////////////
const button = document.getElementById('Story1');
const button2 = document.getElementById('Story2');
const button3 = document.getElementById('Story3');
const div = document.getElementById('menu');
const subtitleChoosing = document.getElementById('subtitle2');
const s1Img1 = document.getElementById('S1_img1');
const s1Img2 = document.getElementById('S1_img2');
const s2Img1 = document.getElementById('S2_img1');
const s2Img2 = document.getElementById('S2_img2');
const s3Img1 = document.getElementById('S3_img1');
const s3Img2 = document.getElementById('S3_img2');
const storySummary = document.getElementById('Storysummary');
const storyTitle = document.getElementById('SummaryText')
const storySubtitle = document.getElementById('SummaryTextSubtitle')
const BackButton = document.getElementById('Back');
const PlayButton = document.getElementById('Play');

let clicked = false;
let Game1 = false;
let Game2 = false;
let Game3 = false;
// Variables /////////////////////////////////////




// Story One /////////////////////////////////////
button.addEventListener('mouseover', () => {
    div.style.opacity = 1 ;
    div.style.backgroundColor = 'rgb(0, 74, 74)' ;
    s1Img1.style.left = "200px";
    s1Img2.style.left = "1190px";
  });

  button.addEventListener('mouseout', () => {
    div.style.opacity = 0 ;
    div.style.backgroundColor = 'lightgray';
    s1Img1.style.left = "-750px";
    s1Img2.style.left = "1900px";
    if (clicked == true ) {
      div.style.opacity = 1 ;
      div.style.backgroundColor = 'rgb(0, 74, 74)' ;
      clicked = false;
    }
  });  

  button.addEventListener('click', () => {
    clicked = true;
    Game1 = true;
    subtitleChoosing.style.left = "-50%";
    button.style.left = "-30%";
    button2.style.left = "-40%";
    button3.style.left = "-40%";
    storySummary.style.left = "150px";
    storyTitle.style.right = "360px";
    storySubtitle.style.right = "160px";
    BackButton.style.left = "71%";
    BackButton.style.backgroundColor = "brown";
    PlayButton.style.left = "52%";
    PlayButton.style.backgroundColor = "brown";
    storyTitle.innerHTML = "Stitch";
    storyTitle.style.color = "White";
    storySubtitle.innerHTML = "Stitch embarks on an adventurous quest through a dense forest, discovers an ancient temple, and uncovers a hidden treasure in a mysterious cave filled with puzzles and secrets.";
    storySubtitle.style.color = "White";
    storySummary.style.backgroundImage = "url('Image/Story1Image.jpg')";

});

BackButton.addEventListener('click', () => {
  clicked = false;
  Game1 = false;
  subtitleChoosing.style.left = "28%";
  button.style.left = "40%";
  button.style.transition = "0.7s";
  button2.style.left = "40%";
  button3.style.left = "40%";
  storySummary.style.left = "2000px";
  storyTitle.style.right = "-2000px";
  storySubtitle.style.right = "-2000px";
  BackButton.style.left = "150%";
  PlayButton.style.left = "130%";
  div.style.opacity = 0 ;
  div.style.backgroundColor = 'lightgray';

});

// Story One /////////////////////////////////////
// Story Two /////////////////////////////////////

button2.addEventListener('mouseover', () => {
   div.style.opacity = 1 ;
   div.style.backgroundColor = 'rgb(49,92,148)' ;
   s2Img1.style.left = "200px";
   s2Img2.style.left = "1190px";
 });

 button2.addEventListener('mouseout', () => {
  div.style.opacity = 0 ;
  div.style.backgroundColor = 'lightgray';
  s2Img1.style.left = "-600px";
  s2Img2.style.left = "1900px";
  if (clicked == true ) {
    div.style.opacity = 1 ;
    div.style.backgroundColor = 'rgb(49,92,148)' ;
  }
  clicked = false;
});

button2.addEventListener('click', () => {
  clicked = true;
  Game2 = true;
  subtitleChoosing.style.left = "-50%";
  button.style.left = "-30%";
  button2.style.left = "-40%";
  button3.style.left = "-40%";
  storySummary.style.left = "150px";
  storyTitle.style.right = "360px";
  storySubtitle.style.right = "160px";
  BackButton.style.left = "71%";
  BackButton.style.backgroundColor = "brown";
  PlayButton.style.left = "52%";
  PlayButton.style.backgroundColor = "brown";
  storyTitle.innerHTML = "Conan";
  storyTitle.style.color = "White";
  storySubtitle.innerHTML = "A game inspired by Conan, featuring thrilling puzzles, evidence analysis, and character interrogations to guess the culprit and solve the mystery.";
  storySubtitle.style.color = "White";
  storySummary.style.backgroundImage = "url('Image/Story2Image.jpg')";

});

BackButton.addEventListener('click', () => {
  clicked = false;
  Game2 = false;
  subtitleChoosing.style.left = "28%";
  button.style.left = "40%";
  button.style.transition = "0.7s";
  button2.style.left = "40%";
  button3.style.left = "40%";
  storySummary.style.left = "2000px";
  storyTitle.style.right = "-2000px";
  storySubtitle.style.right = "-2000px";
  BackButton.style.left = "150%";
  PlayButton.style.left = "130%";
  div.style.opacity = 0 ;
  div.style.backgroundColor = 'lightgray';

});

// Story Two /////////////////////////////////////
// Story Three ///////////////////////////////////

button3.addEventListener('mouseover', () => {
   div.style.opacity = 1 ;
   div.style.backgroundColor = 'rgb(0, 124, 17)';
 });




button3.addEventListener('mouseout', () => {
   div.style.opacity = 0 ;
   div.style.backgroundColor = 'lightgray';
   if (clicked == true ) {
    div.style.opacity = 1 ;
    div.style.backgroundColor = 'rgb(0, 124, 17)';
  }
  clicked = false;
});

button3.addEventListener('click', () => {
  clicked = true;
  Game3 = true;
  subtitleChoosing.style.left = "-50%";
  button.style.left = "-30%";
  button2.style.left = "-40%";
  button3.style.left = "-40%";
  storySummary.style.left = "150px";
  storyTitle.style.right = "290px";
  storySubtitle.style.right = "160px";
  BackButton.style.left = "71%";
  BackButton.style.backgroundColor = "brown";
  PlayButton.style.left = "52%";
  PlayButton.style.backgroundColor = "brown";
  storyTitle.innerHTML = "Hangman";
  storyTitle.style.color = "White";
  storySubtitle.innerHTML = "The classic Hangman game where you guess letters to complete the word before the hangman is drawn. A challenge for your wit and language skills.";
  storySubtitle.style.color = "White";
  storySummary.style.backgroundImage = "url('Image/Story3Image.jpg')";

});

BackButton.addEventListener('click', () => {
  clicked = false;
  Game3 = false;
  subtitleChoosing.style.left = "28%";
  button.style.left = "40%";
  button.style.transition = "0.7s";
  button2.style.left = "40%";
  button3.style.left = "40%";
  storySummary.style.left = "2000px";
  storyTitle.style.right = "-2000px";
  storySubtitle.style.right = "-2000px";
  BackButton.style.left = "150%";
  PlayButton.style.left = "130%";
  div.style.opacity = 0 ;
  div.style.backgroundColor = 'lightgray';

});

///////////////////////////////////////////////////////////

PlayButton.addEventListener('click', () => {
  if (Game1) {
    window.location.href = "Stitch/index.html";
    Game1 = false;
  } else if (Game2) {
    window.location.href = "conan/index.html";
    Game2 = false;
  } else if (Game3) {
    window.location.href = "Hangman/index.html";
    Game3 = false;
  }
});

