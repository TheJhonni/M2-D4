const listNames = [
    {
        name: "name1",
        Group: 1,
    },
    {
        name: "name2",
        Group: 1,
    },
    {
        name: "name3",
        Group: 2,
    },
    {
        name: "name4",
        Group: 2,
    },
    {
        name: "name5",
        Group: 2,
    },
    {
        name: "name6",
        Group: 1,
    },
    {
        name: "name7",
        Group: 3,
    },
    {
        name: "name8",
        Group: 3,
    },
    {
        name: "name9",
        Group: 3,
    },
]
    
let waitingList = ["name11", "name12", "name13"];


const displayNames = function() {
    
    let NamesContainer = document.getElementsByClassName(".container-fluid")
    for(let i=0; i<listNames.name.length; i++) {
        let names = listNames.name
        let numberTeams = listNames.Group

        for(let y=0; y<numberTeams.length; y++) {
            let randomPeople = Math.floor(Math.random) * waitingList.length;

            let randomTeam = Math.floor(Math.random) * numberTeams.length;

            NamesContainer.innerHTML += `
            <ul class="list-unstyled card-columns">
            <ul class="row">
            <li class="col"> name player: ${names[i],}</li>
            <li class="col"> team player: ${numberTeams[i]}</li>
            <li class="col"> Random player: ${randomPeople[y]}</li>
            <li class="col"> in a random Team: ${randomTeam[y]}</li>
            </ul>
            </ul>` ;
        } 
    }
};




window.onload = function (){
    displayNames()
}