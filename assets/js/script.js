let userName = window.prompt("What is your name?");

let compliment = [" your smile is contagious", " I bet you make babies smile", " you light up the room", " you have a great sense of humor", " if cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now", " you're like sunshine on a rainy day", " you bring out the best in other people", " I bet you sweat glitter", " colors seem brighter when you're around", " you're more fun than a ball pit filled with candy", " jokes are funnier when you tell them", " you always know how to find that silver lining", "Being around you is like a happy little vacation", "You're more fun than bubble wrap", "You're like a breath of fresh air", "You're someone's reason to smile"];

for (let i = 0; i < compliment.length; i++) {
    window.alert (userName + compliment[i]);
}