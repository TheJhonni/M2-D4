const listNames = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10", "name11", "name12", "name13","name14","name15"];

let waitingList = listNames[3, 5, 8, 9, 10];

let numberTeams = [1,2,3];

let assignedTeam = 0;

const displayNames = function() {

    let NamesContainer = document.getElementsByClassName(".container-fluid")
    for(let i=0; i<listNames.length; i++) {

        for(lety=0; y<numberTeams.length; y++) {
            let randomTeam = Math.floor(Math.random) * numberTeams.length;
            
            NamesContainer.innerHTML += `
            <ul class="list-unstyled card-columns">
            <ul class="row">
            <li class="col">${listNames[i]}</li>
            <li class="col">${randomTeam[y]}</li>
            </ul>
            </ul>` ;
        } 
    }
};


window.onload = function (){
    displayNames()
}