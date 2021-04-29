let stepExplanations  = document.getElementsByClassName("steps-explanation");
let buttons = document.getElementsByClassName("step-button");

for(let i = 0; i < stepExplanations.length; i++)
{
    stepExplanations[i].style.display = "none";
}


for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click',() => {
        display(i);
        })
}

function display(id)
{
    for (let i = 0; i < stepExplanations.length; i++)
    {
        stepExplanations[i].style.display = "none";
        buttons[i].id = "";
    }
    stepExplanations[id].style.display = "block";
    buttons[id].id = "white-button";
    
}



