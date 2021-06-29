//code to display the project detail on click
let projectExplanations  = document.getElementsByClassName("project-explanation");
let buttons = document.getElementsByClassName("");
let projectImages = document.getElementsByClassName("projectImage");

let titres = document.getElementsByClassName("titre");


for(let i = 0; i < projectExplanations.length; i++)
{
    projectExplanations[i].style.display = "none";
}


for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click',() => {
        changeState(i);
        })
}

function changeState(id)
{
    if (projectExplanations[id].style.display == "none")
    {
        inactiveAllExceptId(id)
        projectExplanations[id].style.display = "block";

        if (buttons[id].classList.contains("item-3"))
        {
            buttons[id].classList.remove("item-3");
            buttons[id].classList.add("item-1");
        }

        projectImages[id].style.display = "none";

    }
    else
    {
        activeAll();
        projectExplanations[id].style.display = "none";

        if (buttons[id].classList.contains("item-1"))
        {
            buttons[id].classList.remove("item-1");
            buttons[id].classList.add("item-3");
        }
    }
}

function inactiveAllExceptId(id)
{
    for (let i =0; i < buttons.length; i++)
    {
        if (i != id)
            buttons[i].style.display = "none";
    }

    for (let i =0; i < titres.length; i++)
    {
        titres[i].style.display = "none";
    }
}

function activeAll()
{
    for (let i =0; i < buttons.length; i++)
    {
        buttons[i].style.display = "block";
        projectImages[i].style.display = "block";
    }

    for (let i =0; i < titres.length; i++)
    {
        titres[i].style.display = "block";
    }
}