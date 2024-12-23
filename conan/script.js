document.addEventListener("DOMContentLoaded", () => {
    const caseText = document.getElementById("case-text");
    const nextArrow = document.getElementById("next-arrow");
    const prevArrow = document.getElementById("prev-arrow");
    const solveBtn = document.getElementById("solve-btn");
    const finishBtn = document.getElementById('finish-btn')
    const caseImg = document.querySelector('.case-img');
    var firstCase = false;

    //Array for images
    var images = ["image1.jpg", "image2.png", "image3.png", "image1.jpg", "image1.jpg", "image4.webp", "image5.webp", "image6.webp", "image7.jpg"];
    // Array of texts to display
    var texts = [
        `Hello! My name is Conan! They call me Detective Conan, but I’m not actually a
            detective—haha. Anyway, I need your help to solve some cases. There will be a showcase, which you need to
            read carefully. After that, you’ll start solving the case. For every suspect, there will be an image and a
            description, and your job is to figure out who the killer is. You’ll have one more chance if you fail, but
            after that, you lose! If the case is hard to solve, there will be a hint for each one to make it a bit
            easier for you. Alright, champ, let’s get started!`,

            `<span class ="case-title">Chapter one: <span>Study in pink</span></span>
            <hr>
            A string of mysterious deaths has left the police baffled. All the victims appear to have taken their own lives by ingesting poison. 
            However, something doesn’t add up. The latest victim, a woman in pink, left behind an intriguing clue. Her fingernail was chipped, and the word 
            "RACHE" was scratched into the floor beside her. What could it mean?
            The victim was lying far from where she was last seen. Her shoes were wet despite no rain that day, 
            There were marks around her leg points that she was holding a case. and her lipstick was smudged ,as if she had been trying to speak before her death.`,

            `Was "RACHE" her final message? Does it hold the key to solving the case?
            <br><b>But there something is missing.</b> The case remember ? all of her stuff found in crime scene but only something was missing! 
            so the killer made a mistake and took the pink case and drop it in the way. Where do you think the case would be ? after Conan found the case there was a ticket at her case
            with her email address on it incase she forgot here case somewhere. Poor woman, Anyway! something was missing too her mobile phone, this is the second mistake the killer took the phone.`,
            `You have enough clues to solve your first case. <b>Now the game is on!</b>`,

            `<span class = "congrats">Congratulations on solving your first case!</span>
            As you noticed, the woman in pink wasn't writing "RACHE" as the German word for revenge. Instead, she was trying to give us the password to her email, allowing us to track her phone and find the killer.

            Who could this mysterious figure be? Someone we don’t know, yet we trust. Someone who knows every street and alley. Someone who works tirelessly in the shadows.

            Of course—it’s the taxi driver.

            Once again, congratulations on cracking your first case, champ! Let’s see what challenge awaits you next.`,
            `<span class ="case-title">Chapter two: <span>The Silent Witness</span></span>
            <hr>
            On a stormy night at the Moonlight Hotel, tragedy struck. The renowned pianist, 
            Mr. Kenji Hayama, was found dead in his luxurious suite. The room was eerily silent, save for the rain tapping against the balcony doors. 
            There was no sign of forced entry, but the scene left investigators puzzled. A cryptic message was scrawled in red ink on the music sheet resting on the piano: "IVORY FANGS." 
            The haunting melody of an unfinished song lingered in the air, as if the piano itself mourned its master.
            `,
            `The Moonlight Hotel had only four other individuals present during the fateful night. 
            Sophia Takano, a timid waitress, was the last known person to serve Mr. Hayama dinner. 
            Alan Kuroki, the young bellboy, was seen delivering a package to the victim’s room shortly before the storm began. Dr. Mira Shinjo, 
            a reserved guest and long-time acquaintance of Mr. Hayama, claimed to have been in her room all evening. Lastly, Victor Aizawa, the enigmatic hotel manager, 
            appeared unusually nervous when questioned by authorities.
            `,
            `The evidence was as puzzling as the crime itself. 
            A shattered wine glass lay near the piano, and muddy footprints trailed to the balcony, 
            yet no signs of anyone climbing down could be found. Strangely, 
            a hotel receipt showed Mr. Hayama had ordered "Dinner for Two," 
            though no second guest was seen entering or leaving his room. All eyes turned to the cryptic message, "IVORY FANGS," as the key to unraveling the mystery.
            Now it’s up to you to solve the case. Who among the four individuals is the killer? What does the mysterious phrase "IVORY FANGS" mean? Decipher the clues and uncover the truth behind Mr. Hayama’s tragic end.`,
            ` Congratulations, Detective! You've solved multiple mysteries and proven yourself as a true detective. With each case, your sharp instincts and relentless pursuit of the truth have led you to uncover the secrets hidden in the shadows. Just like Conan, you've pieced together the clues, questioned the suspects, and brought justice to the victims. Your skills have been tested time and time again, and you've come out victorious. Keep honing your detective abilities, because there are always more mysteries waiting to be solved. Thanks for playing, and never stop seeking the truth!"
            Feel free to let me know if you need any further changes!` 
    ];

    let currentIndex = 0;

    // Function to update text and button visibility
    function updateTextAndButtons() {
        caseText.innerHTML = texts[currentIndex];

        // Show or hide buttons based on the current index
        prevArrow.style.display = currentIndex === 0 ? "none" : "inline-block";
        nextArrow.style.display = currentIndex === texts.length - 1 ? "none" : "inline-block";
        solveBtn.style.display = currentIndex === 3 || currentIndex === 7 ?"inline-block" : "none";
        finishBtn.style.display = currentIndex === 8 ? "inline-block": "none";

        //Change images
        caseImg.src = "media/" + images[currentIndex];

        //Disable the next button
        if ((currentIndex === 3 && !firstCase) || (currentIndex === 7 && !secondCase)) {
            nextArrow.disabled = true;
            nextArrow.style.pointerEvents = "none";
            nextArrow.style.opacity = "0.4";
        }
        else {
            nextArrow.disabled = false;
            nextArrow.style.pointerEvents = "auto";
            nextArrow.style.opacity = "1";
        }
    }

    function removeBorder() {
        
        option.forEach(option => option.classList.remove('wrong'));
        option.forEach(option => option.classList.remove('correct'));
        option.forEach(option => option.classList.remove('selected'));
        option.forEach(option => option.classList.remove('border-color'));
        inputField.classList.remove('wrong');
        inputField.classList.remove('correct');
    }

    // Event listeners for navigation buttons
    nextArrow.addEventListener("click", () => {
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            updateTextAndButtons();
        }
        
        else {
            solveBtn.style.display = "none";
        }
        updateTextAndButtons();
    });

    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateTextAndButtons();
        }
        updateTextAndButtons();
    });

    // Initial setup
    updateTextAndButtons();


    const option = document.querySelectorAll('.option');
    const inputField = document.getElementById('crack');
    const checkBtn = document.getElementById('check');
    const hint = document.getElementById('hint');
    const closeBtn = document.getElementById('close');
    const test = document.getElementById('test');
    const container = document.querySelector('.grid-container');
    const div = document.getElementsByTagName('div');
    const boxContainer = document.querySelector('.box');
    const conanPhoto = document.querySelector('.conan');
    const hintParagraph = document.querySelector('.hint-p');
    const option1 = document.querySelector('.option-1');
    const option2 = document.querySelector('.option-2');
    const option3 = document.querySelector('.option-3');
    const option4 = document.querySelector('.option-4');
    const showcaseContainer = document.querySelector('.showcase');
    var firstCase = false;
    var secondCase = false;

    var index = -1;
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener('click', () => {
            if (index == i) {
                option[i].classList.remove('selected');
                index = -1;
            }else {
                option.forEach(option => option.classList.remove('selected'));
                option.forEach(option => option.classList.add('border-color'));
                option[i].classList.add('selected');
                index = i;
            }
            
        });
    }

    checkBtn.addEventListener('click',() => {
        removeBorder();
        var inpValue = String(inputField.value).toUpperCase();
        if (index == -1 && inpValue == '') {
            
            option.forEach(option => option.classList.add('wrong'));
            inputField.classList.add('wrong');
        }else if (index != -1 && inpValue == '') {
            
            inputField.classList.add('wrong')
        }else if (inpValue != '' && index == -1) {
            
            inputField.style.borderColor = '#28374d';
            option.forEach(option => option.classList.add('wrong'));
        }else {
            if (!firstCase || (firstCase && currentIndex === 3)) {
                if (index == 0 && inpValue == 'RACHEL') {
                    
                    inputField.classList.add('correct');
                    option[index].classList.remove('selected');
                    option[index].classList.add('correct');
                    firstCase = true;
                    container.style.animationDelay = "0.8s";
                    closeBtn.click();
                    currentIndex++;
                    updateTextAndButtons();

                }else if (index != 0 && inpValue == 'RACHEL') {
                    
                    inputField.classList.add('correct');
                    option[index].classList.remove('selected');
                    option[index].classList.add('wrong');
                }else if (inpValue != 'RACHEL' && index == 0){
                    
                    option[index].classList.remove('selected');
                    option[index].classList.add('correct');
                    inputField.classList.add('wrong');   
                }else{
                    
                    option[index].classList.remove('selected');
                    option[index].classList.add('wrong');
                    inputField.classList.add('wrong');
                }
            }else if (!secondCase || (secondCase && currentIndex === 7)) {
                if (index == 2 && inpValue == 'VICTOR AIZAWA') {
                    
                    inputField.classList.add('correct');
                    option[index].classList.remove('selected');
                    option[index].classList.add('correct');
                    secondCase = true;
                    container.style.animationDelay = "0.8s";
                    closeBtn.click();
                    currentIndex++;
                    updateTextAndButtons();
                }else if (index != 2 && inpValue == 'VICTOR AIZAWA') {
                    
                    inputField.classList.add('correct');
                    option[index].classList.remove('selected');
                    option[index].classList.add('wrong');
                }else if (inpValue != 'VICTOR AIZAWA' && index == 2){
                    option[index].classList.remove('selected');
                    option[index].classList.add('correct');
                    inputField.classList.add('wrong');   
                }else{
                    option[index].classList.remove('selected');
                    option[index].classList.add('wrong');
                    inputField.classList.add('wrong');
                }
            }
        }
    });

    closeBtn.addEventListener('click', () => {
        nextArrow.classList.remove('arrowR');  
        prevArrow.classList.remove('arrowL');
        showcaseContainer.classList.remove('opacity-del');
        showcaseContainer.classList.add('tranistion-del');
        container.classList.remove('open');
        container.style.transform = `translateY(0%)`;
        container.classList.add('close');
        const closAnumation = document.querySelector('.close');
        setTimeout(() => {
            boxContainer.classList.remove('display');
            boxContainer.classList.add('hide');
        }, 1500);
    });

    solveBtn.addEventListener('click', () => {
        nextArrow.classList.add('arrowR');  
        prevArrow.classList.add('arrowL');
        showcaseContainer.classList.remove('tranistion-del');
        showcaseContainer.classList.add('opacity-del');
        removeBorder();
        index = -1;
        inputField.value = '';
        if (!firstCase || currentIndex === 3) {
            conanPhoto.src = "./media/first_case/image2.jpg"
            hintParagraph.innerHTML = `"A person we trust, A person who knows all the places"`
            option1.src = "./media/first_case/1.webp"
            option2.src = "./media/first_case/2.webp"
            option3.src = "./media/first_case/3.jpg"
            option4.src = "./media/first_case/4.jpg"
        }else if (!secondCase || currentIndex === 7) {
            conanPhoto.src = "./media/second_case/conan.jpg";
            hintParagraph.innerHTML = `<br>The message "IVORY FANGS" is a cryptic anagram that reveals a vital clue about the killer's identity.`
            option1.src = "./media/second_case/3.jpg"
            option2.src = "./media/second_case/2.jpg"
            option3.src = "./media/second_case/1.jpg"
            option4.src = "./media/second_case/4.jpg"
        }

        container.style.animationDelay = "0s";
        container.classList.remove('close');
        // container.style.display = 'none';
        container.style.transform = `translateY(150%)`;
        container.style.display = 'grid';
        container.classList.add('open');
        boxContainer.classList.remove('hide');
        boxContainer.classList.add('display');
    });

    document.addEventListener('keydown', (es) => {
        if (es.key == 'Escape') {
            closeBtn.click();
        }else if (es.key == 'Enter'){
            checkBtn.click();
        }else if (es.key == 'ArrowLeft') {
            prevArrow.click()
        }else if (es.key == 'ArrowRight') {
            nextArrow.click()
        }else{
            inputField.focus();
        }
    });

});