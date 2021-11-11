const listNames = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10", "name11", "name12", "name13","name14","name15"];

let numberTeams = listNames.length / 5;

const displayNames = function() {
    let NamesContainer = document.querySelector("container-fluid")
    for(let i=0; i<listNames.length; i++) {
        const names = listNames[i];

        NamesContainer.innerHTML += `
        <ul class="list-unstyled card-columns">
            <ul class="row">
                <li class="col">${names[i]}</li>
                <li class="col">Group</li>
            </ul>
        </ul>` ;
    }
};

window.onload = function () {
    displayNames()
}