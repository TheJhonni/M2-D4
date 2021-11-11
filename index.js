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
    let names = listNames.name
    for(let i=0; i<names; i++) {
        NamesContainer.innerHTML += `
        <ul class="list-unstyled card-columns">
        <ul class="row">
        <li class="col"> name player: ${names[i]}</li>
        <li class="col"> team player: ${numberTeams[i]}</li>
        </ul>
        </ul>` ;
    } 
};

const createImputRandomPeople = function() {
    let containerInput1 = document.getElementsByClassName(".form-inline")
    for(let y=0; y<waitingList.length; y++) {
        let randomPeople = Math.floor(Math.random) * waitingList.length;

        containerInput1.innerHTML += `    
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
};


const createImputRandomTeam = function() {
    let containerInput2 = document.getElementsByClassName(".inputn2")
    let numberTeams = listNames.Group
    for(let j=0; j<numberTeams; j++) {
        let randomTeam = Math.floor(Math.random) * numberTeams.length;

        containerInput2.innerHTML += `    
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
        <option selected>Choose...</option>
        <option value="1">${randomTeam[j]}</option>
        <option value="2">${randomTeam[j]}</option>
        <option value="3">${randomTeam[j]}</option>
        </select>
        
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="p${j}">
        </div>
        
        <button type="submit" class="btn btn-primary my-1">choose</button> `
    }    
};
/* 
let randomTeam = Math.floor(Math.random) * numberTeams.length; */


window.onload = function (){
    displayNames()
    createImputRandomPeople()
    createImputRandomTeam()
}