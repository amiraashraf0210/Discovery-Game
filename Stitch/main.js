const doors = document.querySelectorAll('.door');
const hoverMessage = document.getElementById('hover-message');
const storyText = document.querySelector('.story-text');
const words = document.querySelectorAll('.word');
const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');
const choice3 = document.getElementById('choice-3');
const choice4 = document.getElementById('choice-4');
const choice5 = document.getElementById('choice-5');
const choice6 = document.getElementById('choice-6');
const choiceBack = document.getElementById('choice-Back');
const choicesContainer = document.getElementById('choices-container');
const blackScreen = document.getElementById('black-screen');
const storyMessage = blackScreen.querySelector('.story-message');
const container = document.querySelector('.container');
const helpText = document.querySelector('.helpText');
const Result1 = document.getElementById('resultStory');
const Result2 = document.getElementById('resultStory');
const between = document.getElementById('between');
const betweenText = document.getElementById('betweenText');

let clicked = false;
let keyFound = false;
let symbolFound = false;
let delay = 800;
let storyDuration = 3000;
let previousBackground = '';
let doings = []; 

const photoContainer = document.createElement('div');
photoContainer.style.position = 'absolute';
photoContainer.style.top = '50%';
photoContainer.style.left = '50%';
photoContainer.style.transform = 'translate(-50%, -50%)';
photoContainer.style.textAlign = 'center';
photoContainer.style.opacity = '0';
photoContainer.style.transition = 'opacity 1s ease';
photoContainer.style.zIndex = '10';

const photoDescription = document.createElement('p');
photoDescription.style.padding = "20px";
photoDescription.style.color = '#fff';
photoDescription.style.fontSize = '24px';
photoDescription.style.fontWeight = 'bolder';
photoDescription.style.fontFamily = 'cursive';
photoDescription.style.marginTop = '30px';
photoDescription.style.marginLeft = 'auto';
photoDescription.style.marginRight = 'auto';
photoDescription.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.7)';
photoDescription.style.backgroundColor = "rgba(0, 0, 0)";
photoDescription.style.borderRadius = "14px";
photoDescription.style.borderStyle = "solid";
photoDescription.style.borderColor = "#F6EBD9";
photoDescription.style.borderWidth = "4px";
photoContainer.appendChild(photoDescription);

document.body.appendChild(photoContainer);

function setChoicesStyles() {
  choicesContainer.style.display = 'flex';
  choicesContainer.style.flexDirection = 'row';
  choicesContainer.style.alignItems = 'center';
  choicesContainer.style.justifyContent = 'center';
  choicesContainer.style.position = 'absolute';
  choicesContainer.style.top = '80%';
  choicesContainer.style.left = '50%';
  choicesContainer.style.transform = 'translate(-50%, -50%)';
  choicesContainer.style.padding = '20px';
  choicesContainer.style.backgroundColor = 'rgba(0, 0, 0)';
  choicesContainer.style.borderRadius = '10px';
  choicesContainer.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  
  [choice1, choice2].forEach(choice => {
    choice.style.fontSize = '40px';
    choice.style.color = '#000';
    choice.style.margin = '10px';
    choice.style.width = '600px';
    choice.style.padding = '10px 20px';
    choice.style.cursor = 'pointer';
    choice.style.border = 'none';
    choice.style.borderRadius = '5px';
    choice.style.backgroundColor = '#fff';
    choice.style.transition = 'background-color 0.3s ease';
    choice.style.textAlign = 'center';
  });
  choice1.addEventListener('mouseenter', () => {
    choice1.style.backgroundColor = '#fdc262';
  });
  choice1.addEventListener('mouseleave', () => {
    choice1.style.backgroundColor = '#F6EBD9';
  });
  choice2.addEventListener('mouseenter', () => {
    choice2.style.backgroundColor = '#fdc262';
  });
  choice2.addEventListener('mouseleave', () => {
    choice2.style.backgroundColor = '#F6EBD9';
  });

  [choice3, choice4].forEach(choice => {
    choice.style.display = 'none';
    choice.style.fontSize = '40px';
    choice.style.color = '#000';
    choice.style.margin = '10px';
    choice.style.width = '600px';
    choice.style.padding = '10px 20px';
    choice.style.cursor = 'pointer';
    choice.style.border = 'none';
    choice.style.borderRadius = '5px';
    choice.style.backgroundColor = '#F6EBD9';
    choice.style.transition = 'background-color 0.3s ease';
    choice.style.textAlign = 'center';
  });
  choice3.addEventListener('mouseenter', () => {
    choice3.style.backgroundColor = '#fdc262';
  });
  choice3.addEventListener('mouseleave', () => {
    choice3.style.backgroundColor = '#F6EBD9';
  });
  choice4.addEventListener('mouseenter', () => {
    choice4.style.backgroundColor = '#fdc262';
  });
  choice4.addEventListener('mouseleave', () => {
    choice4.style.backgroundColor = '#F6EBD9';
  });

  [choice5].forEach(choice => {
    choice.style.fontSize = '40px';
    choice.style.color = '#000';
    choice.style.margin = '10px';
    choice.style.width = '600px';
    choice.style.padding = '10px 20px';
    choice.style.cursor = 'pointer';
    choice.style.border = 'none';
    choice.style.borderRadius = '5px';
    choice.style.backgroundColor = '#fff';
    choice.style.transition = 'background-color 0.3s ease';
    choice.style.textAlign = 'center';
  });
  choice5.addEventListener('mouseenter', () => {
    choice5.style.backgroundColor = '#fdc262';
  });
  choice5.addEventListener('mouseleave', () => {
    choice5.style.backgroundColor = '#F6EBD9';
  });

  [choice6].forEach(choice => {
    choice.style.fontSize = '40px';
    choice.style.color = '#000';
    choice.style.fontWeight = 'bolder'
    choice.style.margin = '10px';
    choice.style.width = '600px';
    choice.style.padding = '10px 20px';
    choice.style.cursor = 'pointer';
    choice.style.border = 'none';
    choice.style.borderRadius = '5px';
    choice.style.backgroundColor = '#F6EBD9';
    choice.style.transition = 'background-color 0.3s ease';
    choice.style.textAlign = 'center';
  });
  choice6.addEventListener('mouseenter', () => {
    choice6.style.backgroundColor = '#7678ED';
    choice6.style.color = '#000';
  });
  choice6.addEventListener('mouseleave', () => {
    choice6.style.backgroundColor = '#F6EBD9';
    choice6.style.color = '#000';
  });

  [choiceBack].forEach(choice => {
    choice.textContent = 'Back';
    choice.style.display = 'none';
    choice.style.fontSize = '40px';
    choice.style.color = '#000';
    choice.style.fontWeight = 'bolder'
    choice.style.margin = '10px';
    choice.style.width = '200px';
    choice.style.padding = '10px 20px';
    choice.style.cursor = 'pointer';
    choice.style.border = 'none';
    choice.style.borderRadius = '5px';
    choice.style.backgroundColor = '#F6EBD9';
    choice.style.transition = 'background-color 0.3s ease';
    choice.style.textAlign = 'center';
  });
  choiceBack.addEventListener('mouseenter', () => {
    choiceBack.style.backgroundColor = '#7678ED';
    choiceBack.style.color = '#000';
  });
  choiceBack.addEventListener('mouseleave', () => {
    choiceBack.style.backgroundColor = '#F6EBD9';
    choiceBack.style.color = '#000';
  });
}

setChoicesStyles();

choicesContainer.style.display = 'none';

words.forEach((word, index) => {
  setTimeout(() => {
    word.style.opacity = 1;
    helpText.textContent = "Waiting for conversation...";

    if (index === words.length - 1) {
      setTimeout(() => {
        storyText.style.visibility = 'hidden';
        storyText.style.opacity = '0';
        helpText.textContent = "Select a path to continue";

        doors.forEach(door => {
          door.style.pointerEvents = 'auto';
        });
      }, storyDuration);
    }
  }, delay * index);
});

doors.forEach(door => {
  door.addEventListener('mouseenter', (e) => {
    const message = e.target.getAttribute('data-message');
    hoverMessage.textContent = message;
    hoverMessage.style.visibility = 'visible';
    hoverMessage.style.opacity = '1';
  });

  door.addEventListener('mouseleave', () => {
    hoverMessage.style.visibility = 'hidden';
    hoverMessage.style.opacity = '0';
  });

  door.addEventListener('click', (e) => {
    const path = e.target.getAttribute('data-path');
    handlePathSelection(path);

  });
});

function handlePathSelection(path) {
  blackScreen.style.visibility = 'visible';
  blackScreen.style.opacity = '1';
  helpText.textContent = "Loading...";

  let message = '';
  let choices = [];
  let newBackground = '';
  let descriptionText = '';

  doors.forEach(door => {
    door.style.pointerEvents = 'none';
});

  switch (path) {
    case 'darkPath':
      message = "Stitch steps into the dark path. The air is cold and filled with mystery...";
      choices = ["Explore the iron door", "Search for another route >" , "Go back to choose anoter bath ..."];
      doings = ["You explored the iron gate", "You found the key!", "You enterd the room."];
      newBackground = 'url("images/Darkpath.jpg")';
      resultMessage = ["Stitch notices an old, complicated door and begins searching for something to open it, believing it could lead him to the treasure. The door seems to hold the key to his next adventure.","Finally... The door has opened! It’s really dark inside. You have to decide if you want to go back to the three doors or explore the room. What will you do?"
        ,"It seems this is the end of the road, and I might need to go back. However, there might be a clue here, as it looks like someone was here before."];  
      descriptionText = "The path is dimly lit, with jagged rocks and a heavy mist that makes it hard to see.";
      break;

    case 'waterfall':
      message = "The roar of the waterfall grows louder. Behind it, there seems to be a hidden path...";
      choices = ["Cross the waterfall", "Search for another route >"];
      doings = ["You crossed the waterfall!","You are now under water!","YOU WIN!"]
      newBackground = 'url("images/River.jpg")';
      resultMessage = ["The seahorse looked intimidating. But maybe it's here to protect the treasure. What should I do? Should I take the risk and cross the waterfall, or should I turn back?","I found the treasure!! I have to escape the horse and go outside","Congratulation! You won the game!"];
      descriptionText = "The waterfall is massive, with water cascading down over smooth rocks, creating a mist that cools the air.";
      break;

    case 'bigCave':
      message = "The vast cave opens up, filled with ancient carvings and strange echoes...";
      choices = ["Explore the cave", "Search for another route >"];
      doings = ["You go inside the cave","Search for symbols","Nice Work!","Watch Out!!"];
      newBackground = 'url("images/Temple.jpg")';
      resultMessage = ["Stitch realizes the carvings point to the location of the treasure. But strange creatures inhabit the area, and there are numerous traps and challenges ahead.","I have to find any thing that tells me about the treasure.","I found something maybe will tell me where the treasure is. should do I back or continue exploring? ","The place is falling apart. I have to run."];
      descriptionText = "The cave walls are covered with carvings, some depicting strange creatures and others with symbols of an ancient civilization.";
      break;
}

  previousBackground = document.body.style.backgroundImage;
  storyMessage.textContent = message;
  photoDescription.textContent = descriptionText;
  photoContainer.style.opacity = '0';
  choicesContainer.style.display = 'none';

  setTimeout(() => {
    blackScreen.style.opacity = '0';
    blackScreen.style.visibility = 'hidden';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    blackScreen.style.position = 'fixed';
    blackScreen.style.width = '100%';
    blackScreen.style.height = '100%';
    container.style.display = 'none';
    document.body.style.backgroundImage = newBackground;
    photoContainer.style.opacity = '1';

    setTimeout(() => {
      photoContainer.style.opacity = '0';
      setTimeout(() => {
        showChoices(message, choices, resultMessage);
      }, 500);
    }, 3000);
  }, 3000);
}

function showChoices(message, choices, resultMessage) {
  storyMessage.textContent = message;

  choicesContainer.style.display = 'flex';
  choicesContainer.style.opacity = '0';
  choicesContainer.style.transition = 'opacity 1s ease';

  choice1.textContent = choices[0] || '';
  choice2.textContent = choices[1] || '';

  [choice1, choice2, choice3, choice4, choice5, choice6].forEach(choice => {
    if (!choice.textContent) {
      choice.style.display = 'none';
    } else {
      choice.style.display = 'block';
    }
  });
  Result1.textContent = resultMessage[0];

  setTimeout(() => {
    choicesContainer.style.opacity = '1';
  }, 100);
}

const overlayImageTemple = document.createElement('div');
overlayImageTemple.id = 'overlayImageTemple';
overlayImageTemple.style.position = 'absolute';
overlayImageTemple.style.top = '40%'; 
overlayImageTemple.style.left = '75%';
overlayImageTemple.style.transform = 'translate(-50%, -50%)';
overlayImageTemple.style.width = '120px';
overlayImageTemple.style.height = '110px';
overlayImageTemple.style.backgroundImage = 'url("images/wall.jpg")'; 
overlayImageTemple.style.backgroundSize = 'contain';
overlayImageTemple.style.backgroundRepeat = 'no-repeat';
overlayImageTemple.style.backgroundPosition = 'center';
overlayImageTemple.style.opacity = '1';
overlayImageTemple.style.transition = 'opacity 0.3s ease, filter 0.3s ease'; 
overlayImageTemple.style.zIndex = '10'; 

const overlayImage = document.createElement('div');
overlayImage.id = 'overlayImageKey';
overlayImage.style.position = 'absolute';
overlayImage.style.top = '42%';
overlayImage.style.left = '78%';
overlayImage.style.transform = 'translate(-50%, -50%) rotate(10deg)';
overlayImage.style.width = '220px'; 
overlayImage.style.height = '240px';
overlayImage.style.backgroundImage = 'url("images/key.png")';
overlayImage.style.backgroundSize = 'contain';
overlayImage.style.backgroundRepeat = 'no-repeat';
overlayImage.style.backgroundPosition = 'center';
overlayImage.style.opacity = '0';
overlayImage.style.transition = 'opacity 0.3s ease'; 
overlayImage.style.zIndex = '-1'; 

document.body.appendChild(overlayImageTemple);
document.body.appendChild(overlayImage);

overlayImageTemple.style.opacity = '0';
overlayImageTemple.style.zIndex = '-1';
overlayImage.style.opacity = '0';
overlayImage.style.zIndex = '-1'; 

choice2.addEventListener('click', () => {
  helpText.textContent = "Select a path to continue";
  choicesContainer.style.display = 'none';
  Result1.style.opacity = "0";
  document.body.style.backgroundImage = previousBackground;
  container.style.display = 'block';

  doors.forEach(door => {
    door.style.pointerEvents = 'auto';
  });
});

choice1.addEventListener('click', () => {
  overlayImage.style.pointerEvents = 'none';
  Result1.style.opacity = "1";
  Result1.style.bottom = "22%";
  betweenText.textContent = doings[0];
  betweenText.style.display = 'block';
  choice1.style.display = 'none';
  choice2.style.display = 'none';
/////Waterfall ///////////////////////////////////////////////
  if (choice1.textContent === "Cross the waterfall") {
    document.body.style.backgroundImage = 'url("images/River2.png")'; 
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    
    setTimeout(() => {
      Result1.textContent = resultMessage[1];
      Result1.style.opacity = "0";
      Result1.style.bottom = "10%";
      betweenText.style.display = "none"; 
      storyMessage.style.display = 'none';  
      photoContainer.style.opacity = '0'; 
      choice3.style.display = 'block';
      choice4.style.display = 'block';   
    }, 3000);

    choice4.textContent = 'Run away from it!';
    choice3.textContent = 'Go Under the water'; 
  
    choice4.onclick = () => {
      helpText.textContent = "Select a path to continue";
      storyMessage.style.opacity = '0';
      choicesContainer.style.display = 'none';
      storyMessage.style.display = 'block';
      storyMessage.style.opacity = '1';
      choice4.textContent = null;
      choice3.textContent = null;
  
      document.body.style.backgroundImage = previousBackground;
      container.style.display = 'block';
  
      doors.forEach(door => {
        door.style.pointerEvents = 'auto';
      });
    };

    choice3.onclick = () => {
      choice5.textContent = 'Go outside with your treasure!';
      storyMessage.style.opacity = '1';
      choicesContainer.style.display = 'block';
  
      document.body.style.backgroundImage = 'url("images/UnderWater.png")';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
  
      Result1.style.opacity = "1";
      Result1.style.bottom = "22%";
      betweenText.textContent = doings[1];
      betweenText.style.display = 'block';
      choice3.style.display = 'none';
      choice4.style.display = 'none';
      choice5.style.display = 'none';
  
      setTimeout(() => {
        Result1.style.opacity = "0";
        Result1.style.bottom = "10%";
        betweenText.style.display = 'none';
        choice5.style.display = 'block';
      }, 3000);

      choice5.onclick = () => {
        choice6.textContent = 'Go back to our Website';
        choice3.textContent = null;
        choice4.textContent = null;
        choice5.textContent = null;
        storyMessage.style.opacity = '1';
        choicesContainer.style.display = 'block';
    
        document.body.style.backgroundImage = 'url("images/winning.png")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        
        Result1.style.color = "Gold";
        Result1.style.opacity = "1";
        Result1.style.bottom = "22%";
        betweenText.textContent = doings[2];
        betweenText.style.display = 'block';
        betweenText.style.color = 'gold';
        choice5.style.display = 'none';
        choice6.style.display = 'none';

        setTimeout(() => {
          betweenText.style.display = 'none';
          betweenText.style.color = 'white';
          choice6.style.display = 'block';
        }, 4000);
  }   
  choice6.onclick = () => {
    window.location.href = "../index.html";
  };
}}
//// Iron Door ///////////////////////////////////////////////
  else if (choice1.textContent === "Explore the iron door") {
  document.body.style.backgroundImage = 'url("images/Darkpath2.jpg")'; 
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  overlayImage.style.opacity = '0'; 
  overlayImage.style.zIndex = '20'; 

  setTimeout(() => {
    Result1.textContent = resultMessage[1];
    overlayImage.style.pointerEvents = 'auto';
    Result1.style.opacity = "0";
    Result1.style.bottom = "10%";
    betweenText.style.display = "none";
    choicesContainer.style.display = 'none';  
    if (keyFound == true) {
      choicesContainer.style.display = 'block';
      choiceBack.style.display = 'block';
    }
    storyMessage.style.display = 'none';  
    photoContainer.style.opacity = '0';     
  }, 3000);

overlayImage.addEventListener('mouseenter', () => {
  if (document.body.style.backgroundImage.includes("Darkpath2")) {
    if (clicked == false) {
      overlayImage.style.opacity = '1'; 
      overlayImage.style.zIndex = '15';
    }
  }
});

overlayImage.addEventListener('mouseleave', () => {
  if (clicked == false) {
    overlayImage.style.opacity = '0';
    overlayImage.style.zIndex = '20'; 
  }
});

overlayImage.addEventListener('click', () => {
  overlayImage.style.pointerEvents = 'none';
  overlayImage.remove();
  keyFound = true;
  clicked = true;
  overlayImage.style.opacity = '0';
  overlayImage.style.zIndex = '20'; 
  document.body.style.backgroundImage = 'url("images/Darkpath3.jpg")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  Result1.style.opacity = "1";
  Result1.style.bottom = "22%";
  betweenText.textContent = doings[1];
  betweenText.style.display = 'block';
  choice3.style.display = 'none';
  choice4.style.display = 'none';

  setTimeout(() => {
    Result1.textContent = resultMessage[2];
    overlayImage.style.pointerEvents = 'auto';
    Result1.style.opacity = "0";
    Result1.style.bottom = "10%";
    betweenText.style.display = "none";  
    storyMessage.style.display = 'none';  
    photoContainer.style.opacity = '0'; 
    choice3.style.display = 'block';
    choice4.style.display = 'block';    
  }, 3000);

  choice4.textContent = 'Go back to choose another route';
  choice3.textContent = 'Explore the room';

  choice4.onclick = () => {
    helpText.textContent = "Select a path to continue";
    storyMessage.style.opacity = '0';
    choicesContainer.style.display = 'none';
    storyMessage.style.display = 'block';
    storyMessage.style.opacity = '1';
    choice4.textContent = null;
    choice3.textContent = null;

    document.body.style.backgroundImage = previousBackground;
    container.style.display = 'block';

    doors.forEach(door => {
      door.style.pointerEvents = 'auto';
    });
  };

  choice3.onclick = () => {
    choice5.textContent = 'Go back to choose another path ...';
    storyMessage.style.opacity = '1';
    choicesContainer.style.display = 'block';

    document.body.style.backgroundImage = 'url("images/Darkpath4.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    Result1.style.opacity = "1";
    Result1.style.bottom = "22%";
    betweenText.textContent = doings[2];
    betweenText.style.display = 'block';
    choice3.style.display = 'none';
    choice4.style.display = 'none';
    choice5.style.display = 'none';

    setTimeout(() => {
      Result1.style.opacity = "0";
      Result1.style.bottom = "10%";
      betweenText.style.display = 'none';
      choice5.style.display = 'block';
    }, 3000);

    choiceBack.onclick = () => {
      helpText.textContent = "Select a path to continue";
      storyMessage.style.opacity = '0';
      choicesContainer.style.display = 'none';
      storyMessage.style.display = 'block';
      storyMessage.style.opacity = '1';
      choice4.textContent = null;
      choice3.textContent = null;
  
      document.body.style.backgroundImage = previousBackground;
      container.style.display = 'block';
      choiceBack.style.display = 'none';
  
      doors.forEach(door => {
        door.style.pointerEvents = 'auto';
      });
    };

    choice5.onclick = () => {
      choice3.textContent = null;
      choice4.textContent = null;
      choice5.textContent = null;
      overlayImage.remove();
      helpText.textContent = "Select a path to continue";
      storyMessage.style.opacity = '0';
      choicesContainer.style.display = 'none';
      storyMessage.style.display = 'block';
      storyMessage.style.opacity = '1';
  
      document.body.style.backgroundImage = previousBackground;
      container.style.display = 'block';
  
      doors.forEach(door => {
        door.style.pointerEvents = 'auto';
      });
    };
    const overlayImage = document.createElement('div');
    overlayImage.style.position = 'absolute';
    overlayImage.style.top = '41%';
    overlayImage.style.left = '7%';
    overlayImage.style.transform = 'translate(-50%, -50%)';
    overlayImage.style.width = '140px';
    overlayImage.style.height = '165px';
    overlayImage.style.backgroundImage = 'url("images/paper.png")';
    overlayImage.style.backgroundSize = 'contain';
    overlayImage.style.backgroundRepeat = 'no-repeat';
    overlayImage.style.backgroundPosition = 'center';
    overlayImage.style.zIndex = '10';
    overlayImage.style.opacity = '1';
    document.body.appendChild(overlayImage);

    overlayImage.addEventListener('mouseover', () => {
        overlayImage.style.opacity = '1';
        overlayImage.style.transition = 'opacity 0.3s ease'; 
        overlayImage.style.filter = 'brightness(1.5)';
    });

    overlayImage.addEventListener('mouseout', () => {
        overlayImage.style.opacity = '0'; 
    });

    overlayImage.addEventListener('click', () => {
        const blackOverlay = document.createElement('div');
        blackOverlay.style.position = 'fixed';
        blackOverlay.style.top = '0';
        blackOverlay.style.left = '0';
        blackOverlay.style.width = '100%';
        blackOverlay.style.height = '100%';
        blackOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        blackOverlay.style.zIndex = '20';
        document.body.appendChild(blackOverlay);
        choicesContainer.style.display = 'none';

        const largeImage = document.createElement('div');
        largeImage.style.position = 'fixed';
        largeImage.style.top = '50%';
        largeImage.style.left = '50%';
        largeImage.style.transform = 'translate(-50%, -50%)';
        largeImage.style.width = '600px';
        largeImage.style.height = '600px';
        largeImage.style.backgroundImage = 'url("images/paper2.jpg")'; 
        largeImage.style.backgroundSize = 'contain';
        largeImage.style.backgroundRepeat = 'no-repeat';
        largeImage.style.backgroundPosition = 'center';
        largeImage.style.zIndex = '30';
        document.body.appendChild(largeImage);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'fixed';
        closeButton.style.top = '10%';
        closeButton.style.right = '10%';
        closeButton.style.fontSize = '24px';
        closeButton.style.color = 'white';
        closeButton.style.background = 'none';
        closeButton.style.border = '2px solid white';
        closeButton.style.padding = '10px 20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.zIndex = '40';
        closeButton.style.borderRadius = '5px';
        document.body.appendChild(closeButton);

        closeButton.addEventListener('click', () => {
            blackOverlay.remove();
            largeImage.remove();
            closeButton.remove();
            choicesContainer.style.display = 'block';
        });
    });
};

choicesContainer.style.display = 'flex';
});
}//// Cave Door ///////////////////////////////////////////////
else if(choice1.textContent === "Explore the cave") {
  document.body.style.backgroundImage = 'url("images/Temple2.jpg")'; 
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';

  setTimeout(() => {
    Result1.textContent = resultMessage[1];
    Result1.style.opacity = "0";
    Result1.style.bottom = "10%";
    betweenText.style.display = "none"; 
    storyMessage.style.display = 'none';  
    photoContainer.style.opacity = '0'; 
    choice3.style.display = 'block';
    choice4.style.display = 'block'; 
  }, 3000);

  choice4.textContent = 'Continue the path';
  choice3.textContent = 'Explore the symbols'; 

  choice4.onclick = () => {
    overlayImageTemple.remove();
    choice5.textContent = 'Go Back to three doors...';
    storyMessage.style.opacity = '1';
    choicesContainer.style.display = 'block';
  
    document.body.style.backgroundImage = 'url("images/Templeescape.png")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  
    const caveSound = new Audio('sounds/Destruction.wav');
    caveSound.loop = false;  
    caveSound.play();

    Result1.textContent = resultMessage[3];
    Result1.style.opacity = "1";
    Result1.style.bottom = "22%";
    betweenText.textContent = doings[3];
    betweenText.style.display = 'block';
    choice3.style.display = 'none';
    choice4.style.display = 'none';
    choice5.style.display = 'none';

    setTimeout(() => {
      Result1.style.opacity = "0";
      Result1.style.bottom = "10%";
      betweenText.style.display = 'none';
      choice5.style.display = 'block';
    }, 3000);
  };

  choice3.onclick = () => {
    overlayImageTemple.style.pointerEvents = 'auto';
    overlayImageTemple.style.display = 'flex';
    overlayImageTemple.style.opacity = '1';
    overlayImageTemple.style.zIndex = '25';
    choice5.textContent = 'Go Back to three doors...';
    storyMessage.style.opacity = '1';
    choicesContainer.style.display = 'block';

    Result1.style.opacity = "1";
    Result1.style.bottom = "22%";
    betweenText.textContent = doings[1];
    betweenText.style.display = 'block';
    choice3.style.display = 'none';
    choice4.style.display = 'none';
    choice5.style.display = 'none';

    setTimeout(() => {
      Result1.style.opacity = "0";
      Result1.style.bottom = "10%";
      if (symbolFound == true) {
        choicesContainer.style.display = 'flex';
        choiceBack.style.display = 'block';
      }
    }, 3000);

    overlayImageTemple.addEventListener('mouseenter', () => {
      overlayImageTemple.style.opacity = '1';
      overlayImageTemple.style.filter = 'brightness(2)';
    });
  
    overlayImageTemple.addEventListener('mouseleave', () => {
      overlayImageTemple.style.opacity = '1';
      overlayImageTemple.style.filter = 'brightness(1)';
    });
  
  overlayImageTemple.addEventListener('click', () => {
    const blackOverlay = document.createElement('div');
    overlayImageTemple.remove();
    symbolFound = true;
    overlayImageTemple.style.pointerEvents = 'none';
    overlayImageTemple.style.opacity = '0';
    overlayImageTemple.style.zIndex = '-1';
    blackOverlay.style.position = 'fixed';
    blackOverlay.style.top = '0';
    blackOverlay.style.left = '0';
    blackOverlay.style.width = '100%';
    blackOverlay.style.height = '100%';
    blackOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    blackOverlay.style.zIndex = '20';
    document.body.appendChild(blackOverlay);
    choicesContainer.style.display = 'none';
    Result1.textContent = resultMessage[2];

    const largeImage = document.createElement('div');
    largeImage.style.position = 'fixed';
    largeImage.style.top = '50%';
    largeImage.style.left = '50%';
    largeImage.style.transform = 'translate(-50%, -50%)';
    largeImage.style.width = '600px';
    largeImage.style.height = '600px';
    largeImage.style.backgroundImage = 'url("images/Temple3.jpg")';
    largeImage.style.backgroundSize = 'contain';
    largeImage.style.backgroundRepeat = 'no-repeat';
    largeImage.style.backgroundPosition = 'center';
    largeImage.style.zIndex = '30';
    document.body.appendChild(largeImage);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10%';
    closeButton.style.right = '10%';
    closeButton.style.fontSize = '24px';
    closeButton.style.color = 'white';
    closeButton.style.background = 'none';
    closeButton.style.border = '2px solid white';
    closeButton.style.padding = '10px 20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '40';
    closeButton.style.borderRadius = '5px';
    document.body.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
      blackOverlay.remove();
      largeImage.remove();
      closeButton.remove();
      overlayImageTemple.style.opacity = '0';
      overlayImageTemple.style.display = 'block';
      choicesContainer.style.display = 'flex';
      betweenText.textContent = doings[2];
      Result1.style.opacity = "1";
      Result1.style.bottom = "22%";

      setTimeout(() => {
        Result1.style.opacity = "0";
        Result1.style.bottom = "10%";
        betweenText.style.display = 'none';
        choice5.style.display = 'block';
        choice4.style.display = 'block';
      }, 3000);
    });
  });

  choiceBack.onclick = () => {
    helpText.textContent = "Select a path to continue";
    storyMessage.style.opacity = '0';
    choicesContainer.style.display = 'none';
    storyMessage.style.display = 'block';
    storyMessage.style.opacity = '1';
    choice5.textContent = null;
    choice4.textContent = null;
    choice3.textContent = null;

    document.body.style.backgroundImage = previousBackground;
    container.style.display = 'block';
    choiceBack.style.display = 'none';
    betweenText.style.display = 'none';

    doors.forEach(door => {
      door.style.pointerEvents = 'auto';
    });
  };

  choice5.onclick = () => {
    helpText.textContent = "Select a path to continue";
    storyMessage.style.opacity = '0';
    choicesContainer.style.display = 'none';
    storyMessage.style.display = 'block';
    storyMessage.style.opacity = '1';
    choice4.textContent = null;
    choice3.textContent = null;
    choice5.textContent = null;

    document.body.style.backgroundImage = previousBackground;
    container.style.display = 'block';

    doors.forEach(door => {
      door.style.pointerEvents = 'auto';
    });
  };
};
}})