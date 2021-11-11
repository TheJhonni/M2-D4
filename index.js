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
    
    let NamesContainer = document.getElementsByClassName("container-fluid")
    for(let i=0; i<listNames.name.length; i++) {
        let names = listNames.name
        let numberTeams = listNames.Group
            NamesContainer.innerHTML += `
            <ul class="list-unstyled card-columns">
            <ul class="row">
            <li class="col"> name player: ${names[i],}</li>
            <li class="col"> team player: ${numberTeams[i]}</li>
            </ul>
            </ul>` ;
    } 
};

const createImputs = function() {
    let containerInput = document.getElementsByClassName("form-inline")

    for(let y=0; y<numberTeams.length; y++) {
        let randomPeople = Math.floor(Math.random) * waitingList.length;

        let randomTeam = Math.floor(Math.random) * numberTeams.length;
        containerInput.innerHTML += `    
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected>Choose...</option>
              <option value="1">${randomPeople[y]}</option>
              <option value="2">${randomPeople[y]}</option>
              <option value="3">${randomPeople[y]}</option>
            </select>
          
            <div class="custom-control custom-checkbox my-1 mr-sm-2">
              <input type="checkbox" class="custom-control-input" id="p${y}">
            </div>
          
        <button type="submit" class="btn btn-primary my-1">choose</button> `
    }    
}






window.onload = function (){
    displayNames()
}