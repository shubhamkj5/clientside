var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function() {
     let name = $("name").value;
    let score = $("score").value;
    if(name==""){
        alert("Please Enter Name");
        $("name").focus();
    }
    else{
        names.push(name);
         $("name").value = "";
    }
     if(score==""){
        alert("Please Enter Score");
         $("score").focus();
    }
    else{
        scores.push(score);
         $("score").value = "";
    } 
    $("name").focus();
   // displayResults();
  //  displayScores();
}

var displayResults = function() {
     let sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += parseInt(scores[i], 10);
    }
    let avg = sum / scores.length;
    let mx_score=scores.indexOf(Math.max(...scores));

    let max_score=scores[mx_score];
    let max_name=names[mx_score];

    let results=document.getElementById("results");
    
    let header = document.createElement("h2");
    let text = document.createTextNode("Results");
    header.appendChild(text);
    
    let para= document.createElement("p");
    let average = document.createTextNode("Average score is: "+avg);
    let high_score = document.createTextNode("High score : "+max_name+" with a score of "+max_score);
    para.appendChild(average); 
    para.appendChild(high_score); 
    
    results.appendChild(header);
    results.appendChild(para);
}
var displayScores = function() {
    
}
window.onload = function () {
     $("name").focus();
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


