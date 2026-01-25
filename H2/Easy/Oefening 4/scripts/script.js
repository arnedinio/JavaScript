let score = 3

function checkScore(score){
    if (score >= 5) {
        console.log("Geslaagd");
    }
    else{
        console.log("Niet geslaagd");
    }
}

checkScore(score);

score += 4

checkScore(score);

score -= 2

checkScore(score);