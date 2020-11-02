// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show Todays Date

const today = new Date();
const options = {weekday: "long", month: "short", day: "numeric"};

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add a Todo function

function addToDo(toDo){

    const item = 
                    `<li class="item">
                        <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                        <p class="text">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id="0"></i>
                    </li>
                `;

    const position = "beforeend";

    list.insertAdjacentElement(position, item);

}

