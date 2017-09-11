//pick random number between 0 and words.length
//use this function to pick a word when start button pressed
//

var words = {
    0:{
        word: 'albacore',
        hint: 'A fish!',
        positions: ['a','l','b','a','c','o','r','e']
    },
    1:{
        word: 'avacados',
        hint: 'Green',
        positions: ['a','v','a','c','a','d','o','s']
    },
    2:{
        word: 'bazookas',
        hint: 'Bubblegum',
        positions: ['b','a','z','o','o','k','a','s']
    },
    3:{
        word: 'cerebrum',
        hint: 'Brain',
        positions: ['c','e','r','e','b','r','u','m']
    }
};

var word;
var hint;
var positions;
var guesses = 0;
var play = false;

function hung() {
        $("#graphic").attr("src", "assets/images/hungman.gif");
}

function updateGraphic() {
    if (guesses === 0) {
        $("#graphic").attr("src", "assets/images/hangman-1.png");
    } else if (guesses === 1) {
        $("#graphic").attr("src", "assets/images/hangman-2.png");
    } else if (guesses === 2) {
        $("#graphic").attr("src", "assets/images/hangman-3.png");
    } else if (guesses === 3) {
        $("#graphic").attr("src", "assets/images/hangman-4.png");
    } else if (guesses === 4) {
        $("#graphic").attr("src", "assets/images/hangman-5.png");
    } else if (guesses === 5) {
        $("#play-btn").show(1300);
        hung();
    }
}

function getWord() {
    var keys = Object.keys(words);
    var i = Math.floor(Math.random() * (keys.length));
    word = words[i].word;
    hint = words[i].hint;
    positions = words[i].positions;
    console.log(word);
    console.log(hint);
    console.log(positions);
}

function checkGuess(guess, id) {
    var matched = false;
    for (var x = 0; x < positions.length; x++) {
        if (guess === positions[x]) {
            displayCharacter(x);
            matched = true;
        }
    }
    if (matched === true) {
        $(id).css('background-color', 'green').fadeOut(1300);
    } else {
        guesses++;
        $(id).css('background-color', 'red').fadeOut(1300);
    }
    updateGraphic();
}

function displayCharacter(x) {
    x += 1;
    if (x === 1) {
        $("#pos-1").text(positions[(x - 1)]);
    } else if (x === 2) {
        $("#pos-2").text(positions[(x - 1)]);
    } else if (x === 3) {
        $("#pos-3").text(positions[(x - 1)]);
    } else if (x === 4) {
        $("#pos-4").text(positions[(x - 1)]);
    } else if (x === 5) {
        $("#pos-5").text(positions[(x - 1)]);
    } else if (x === 6) {
        $("#pos-6").text(positions[(x - 1)]);
    } else if (x === 7) {
        $("#pos-7").text(positions[(x - 1)]);
    } else if (x === 8) {
        $("#pos-8").text(positions[(x - 1)]);
    }
}


$(document).ready(function () {
    $("#play-btn").click(function () {
        play = true;
        getWord();
        updateGraphic();
        $("#play-btn").hide(1300);
    });
    $("#a-btn").click(function () {
        checkGuess('a', '#a-btn');
    });
    $("#b-btn").click(function () {
        checkGuess('b', '#b-btn');
    });
    $("#c-btn").click(function () {
        checkGuess('c', '#c-btn');
    });
    $("#d-btn").click(function () {
        checkGuess('d', '#d-btn');
    });
    $("#e-btn").click(function () {
        checkGuess('e', '#e-btn');
    });
    $("#f-btn").click(function () {
        checkGuess('f', '#f-btn');
    });
    $("#g-btn").click(function () {
        checkGuess('g', '#g-btn');
    });
    $("#h-btn").click(function () {
        checkGuess('h', '#h-btn');
    });
    $("#i-btn").click(function () {
        checkGuess('i', '#i-btn');
    });
    $("#j-btn").click(function () {
        checkGuess('j', '#j-btn');
    });
    $("#k-btn").click(function () {
        checkGuess('k', '#k-btn');
    });
    $("#l-btn").click(function () {
        checkGuess('l', '#l-btn');
    });
    $("#m-btn").click(function () {
        checkGuess('m', '#m-btn');
    });
    $("#n-btn").click(function () {
        checkGuess('n', '#n-btn');
    });
    $("#o-btn").click(function () {
        checkGuess('o', '#o-btn');
    });
    $("#p-btn").click(function () {
        checkGuess('p', '#p-btn');
    });
    $("#q-btn").click(function () {
        checkGuess('q', '#q-btn');
    });
    $("#r-btn").click(function () {
        checkGuess('r', '#r-btn');
    });
    $("#s-btn").click(function () {
        checkGuess('s', '#s-btn');
    });
    $("#t-btn").click(function () {
        checkGuess('t', '#t-btn');
    });
    $("#u-btn").click(function () {
        checkGuess('u', '#u-btn');
    });
    $("#v-btn").click(function () {
        checkGuess('v', '#v-btn');
    });
    $("#w-btn").click(function () {
        checkGuess('w', '#w-btn');
    });
    $("#x-btn").click(function () {
        checkGuess('x', '#x-btn');
    });
    $("#y-btn").click(function () {
        checkGuess('y', '#y-btn');
    });
    $("#z-btn").click(function () {
        checkGuess('z', '#z-btn');
    });
});
