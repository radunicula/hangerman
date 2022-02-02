window.onload = function () {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const words = [
        "python", "java", "django", "script", "javascript", "include", "mysql", "database", "double",
        "while", "algorithm", 'function', "object oriented"
    ];
    let word;

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
