let score = 0;
let currentQuestion = 1;

function answer(points) {
    score += points;

// questions are hidden until the previous one is answered https://www.w3schools.com/TAGS/att_hidden.asp also asked chatgpt for help on this line because i got stuck
    document.getElementById("q" + currentQuestion).hidden = true;
    currentQuestion++;

// only shows result if all questions are answered
    if (currentQuestion <= 7) {
        document.getElementById("q" + currentQuestion).hidden = false;
    } else {
        showResult();
    }
}

function showResult() {
    //when the answers are not hidden anymore, the result is shown (determined by score below)
    document.getElementById("result").hidden = false;

    const carName = document.getElementById("carName");
    const carImage = document.getElementById("carImage");
    const carDescription = document.getElementById("carDescription");

if (score <= 3) {
    carName.textContent = "Peel P50";
    carImage.src = "peelp50.jpg";
    carDescription.textContent = "you are probably 12 years old, or act like a child. this is why you get a mini clown car that weighs about 130 pounds, and has a 49cc engine (weakkkkk). you can't even legally drive haha and you probably say 67 at least thrice a day";
} else if (score <= 5) {
    carName.textContent = "Reliant Robin";
    carImage.src = "reliantrobin.jpg";
    carDescription.textContent = "what a strange 3 wheeled car. you're probably a bit mentally unstable (who isn't?), which is why you get this odd little car. it's not horribly slow with its 850cc engine and a max speed of 85 mph, but just be careful when turning too sharply, you wouldn't want to tip over!";
} else if (score <= 8) {
    carName.textContent = "Chevrolet SSR";
    carImage.src = "chevyssr.jpg";
    carDescription.textContent = "produced in the early 2000s, the chevrolet ssr is a \"pickup truck\" that has a retractable roof. powered by a 5.3-liter v8 engine, it produces 300 horsepower and is kinda bad at both towing and carrying. you get this flashy yet impractical vehicle because you're probably funny and like to show off a bit.";
} else if (score <= 11) {
    carName.textContent = "Fiat Multipla";
    carImage.src = "fiatmultipla.jpg";
    carDescription.textContent = "famed for looking like a platypus, the fiat multipla is a compact mpv that surprisingly seats 6 people. it is not very fast but is practical for families. you probably have a big family or just like to carry a lot of friends around, which is why you get this quirky car.";
} else if (score <= 14) {
    carName.textContent = "Messerschmitt KR200";
    carImage.src = "mskr200.jpg";
    carDescription.textContent = "the messerschmitt kr200 is a 3 wheeled microcar that was produced in the 1950s. it has a 200cc engine and a max speed of 45 mph. you're so niche and chic that you get this cute little vintage car!";
} else if (score <= 17) {
    carName.textContent = "Tesla Cybertruck";
    carDescription.textContent = "i apologize. no explanation.";
} else if (score <= 20) {
    carName.textContent = "OshKosh Mail Van";
    carImage.src = "mailtruck.jpeg";
    carDescription.textContent = "you sound like you have a job, so you get the newest concept of a mail truck! it either has a turbocharged 2.0-liter four-cylinder engine, or a fully electric system. it's definitely... unique, but it serves its function well.";
} else if (score <= 25) {
    carName.textContent = "Spirit of Tomorrow";
    carImage.src = "spiritoftmr.webp";
    carDescription.textContent = "the spirit of tomorrow looks like a spaceship that learned to drive. built by canadian Horace Basil “Barney” Oldfield in the late 1930s, this one-off car was inspired by streamlined futuristic ideas. it could apparently go up to 130mph, which is crazy fast for its time. you might be unc but you're pretty cool!";
} else {
    carName.textContent = "Aston Martin Cygnet V8";
    carImage.src = "amcygnet.jpg";
    carDescription.textContent = "a one off-special, the aston martin cygnet is the most insane microcar ever made. it packs a v8 engine capable of producing 430 horses, all in a rwd package that is about the size of a fiat 500. you are having a midlife crisis, and you are so rich that you have nothing to spend your money on, so you bought this stupid little car. good for you i guess.";
}
}
