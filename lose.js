var phrases = ["Don't give up, try harder", 
        "Failure doesn't mean, Game over", 
        "The game is not over untill it is", 
        "If you give up the game is already over",
        "Failure is the stepping stone to success"
    ]

    window.onload=  function showQuote() {
        var randomNumber = Math.floor(Math.random()*(phrases.length));
        document.getElementById('phrases').innerHTML = phrases[randomNumber];
    }