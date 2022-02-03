window.onload = function () {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const words = [
        "python", "java", "django", "script", "javascript", "include", "mysql", "database", "double",
        "while", "algorithm", 'function', "object oriented"
    ];
    let word;

    const buttons = function () {
        let myButtons = document.getElementById('buttons');
        let letters = document.createElement('ul');
        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('button');
            list.id = 'letter';
            list.setAttribute("class", "btn btn-dark")
            list.setAttribute("style", "height:40px;width:35px")
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };


    let comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            stop();
        }
        for (let i = 0; i < geusses.length; ++i) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
                win = 1;
                stop();
            }
        }
    }


    let stop = function () {
        let letters = document.getElementsByClassName("btn btn-dark");
        if(win === 1 || lives === 0) {
            for(let i = 0; i<letters.length;++i){
                letters[i].disabled = true;
            }
        }
    }


    let play = function () {
        word = words[Math.floor(Math.random() * words.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
        result();
        comments();

    }
    play();
}
