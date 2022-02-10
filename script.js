window.onload = function () {
    const show_lives = document.getElementById("mylives");
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const words = [
        "python", "java", "django", "script", "javascript", "include", "mysql", "database", "double",
        "while", "algorithm", 'function', "object oriented"
    ];
    let word, lives, guessed_letters_counter, space_between_words, win = 0;
    let guesses = [];

    function letter_buttons_construct() {
        let buttons = document.getElementById('buttons');
        let letters = document.createElement('ul');
        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('button');
            list.id = 'letter';
            list.setAttribute("class", "btn btn-dark")
            list.setAttribute("style", "height:40px;width:35px")
            list.innerHTML = alphabet[i];
            buttons.appendChild(letters);
            letters.appendChild(list);
            check_letter();
        }
    }

    function check_letter() {
        let image = document.getElementById('image');
        list.onclick = function () {
            const guess = (this.innerHTML);
            this.setAttribute("class", "btn btn-dark");
            this.disabled = true;
            this.onclick = null;
            for (let i = 0; i < word.length; ++i) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    ++guessed_letters_counter;
                }
            }
            const j = (word.indexOf(guess));
            if (j === -1) {
                --lives;
                image.setAttribute("src", "/images" + lives + ".jpg")
                game_comments();
            } else { game_comments(); }
        }
    }

    function result() {
        let word_holder = document.getElementById('hold');
        let correct = document.createElement('ul');
        for (let i = 0; i < word.length; ++i) {
            correct.setAttribute('id', 'my-word');
            const guess = document.createElement('li');
            guess.setAttribute('class', 'btn');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space_between_words = 1;
            } else { guess.innerHTML = "_"; }
            guesses.push(guess);
            word_holder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    function game_comments() {
        show_lives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            show_lives.innerHTML = "Game Over";
            game_over();
        }
        for (let i = 0; i < guesses.length; ++i) {
            if (guessed_letters_counter + space_between_words === guesses.length) {
                show_lives.innerHTML = "You Win!";
                win = 1;
                game_over();
            }
        }
    }

    function game_over() {
        let letters = document.getElementsByClassName("btn btn-dark");
        if (win === 1 || lives === 0) {
            for (let i = 0; i < letters.length; ++i) {
                letters[i].disabled = true;
            }
        }
    }

    function play() {
        word = words[Math.floor(Math.random() * words.length)];     // get a random word from words list
        word = word.replace(/\s/g, "-");                            // if the word is compound will change the space between words with "-"
        console.log(word);                                         
        letter_buttons_construct();
        guesses = [];
        lives = 6;
        guessed_letters_counter = 0;
        space_between_words = 0;
        result();
        game_comments();
    }
    play();
}