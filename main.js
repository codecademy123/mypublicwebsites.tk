var score = 0;
var scoreTag = document.getElementById("scoreTag");
var addScore = function() {
    score += 10;
    
    scoreTag.innerHTML = "Score: " + score;
    localStorage.setItem('score', score);
}
var displayScore = function() {
    var storedScore = localStorage.getItem('score');
    scoreTag.innerHTML = "Score: " + storedScore;
}
localStorage.setItem('score', 20);
displayScore();
