var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function ask(){
    // console.log(document.querySelector("#question").value);
    if(document.querySelector("#question").value == ""){
        document.querySelector("#answer").innerHTML = "42"
    }
    else{
        document.querySelector("#img").setAttribute("src", "ball.gif");
        setTimeout(replace, 1200);
    }
    document.querySelector("#question").setAttribute("placeholder", "Ask Again!");
}

function replace(){
    document.querySelector("#img").setAttribute("src", "ballStill.jpg");
    var random = Math.floor(Math.random()* lifesAnswers.length);
    console.log(lifesAnswers[random]);
    document.querySelector("#answer").innerHTML = lifesAnswers[random];
}
