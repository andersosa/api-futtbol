
var elapsedTime = document.querySelector("#elapsed");
var homeTeamlogo = document.querySelector("#homelogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamlogo = document.querySelector("#awaylogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoals = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");

function addMatchTile(data){

    var MatchTile = document.createElement('div');
    MatchTile.classList.add("match-tile");

    var homeTeam =document.createElement('div');
    homeTeam.classList.add("team");

    var homeTileLogo = document.createElement('img');
    var homeTileName = document.createElement('p');

    homeTileLogo.src = data['teams']['home']['logo'];
    homeTileName.innerHTML = data['teams']['home']['name'];

    var awayTeam =document.createElement('div');
    awayTeam.classList.add("team");

    var awayTileLogo = document.createElement('img');
    var awayTileName = document.createElement('p');

    awayTileLogo.src = data['teams']['away']['logo'];
    awayTileName.innerHTML = data['teams']['away']['name'];

    homeTeam.appendChild(homeTilelogo);
    homeTeam.appendChild(homeTileName);

    awayTeam.appendChild(awayTilelogo);
    awayTeam.appendChild(awayTileName);

    var score =document.createElement('p');
    score.innerHTML =data['goals']['home'] + " : "+ data['goals']['away'];

    MatchTile.appendChild(homeTeam);
    MatchTile.appendChild(score);
    MatchTile.appendChild(awayTeam);

    matchTable.appendChild(MatchTile);






}

//function getData(){


    fetch("https://v3.football.api-sport.io/fixture?live=all", {
        "method" : "GET" ,
        "headers" : {
            "x-rapidapi-host" : "v3.football.api-sport.io",       
        }
    
})
.then(response => response.json().then(data =>{

    var matcheslist = data['response'];
    var fixture =matcheslist[0]['fixture'];
    var goals =matcheslist[0]['goals'];
    var teams =matcheslist[0]['teams'];
    consola.log(matcheslist.length);

    elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
    homeTeamlogo.src = teams['home']['logo'];
    homeTeamName.innerHTML = teams['home']['name'];
    awayTeamlogo.src = teams['away']['logo'];
    awayTeamlogo.innerHTML = teams['away']['name'];
    lastMatchGoals.innerHTML = goal['home'] + " : " + goals['away'];


    for(var i = 1;i<matcheslist.length;i++){
        addMatchTile(matcheslist[i]);

   }


}))
.catch(err =>{
    console.log(err);

})


//getData();