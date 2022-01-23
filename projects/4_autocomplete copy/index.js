import {
    appendFormAndButton,
    appendInput,
    appendDiv,
    appendTODODiv
} from "./createDOM.js";

import getJson from "./getJson.js";

import createOl from "./createOl.js";

import renderToDoList from "./renderTodoList.js";


let contentToDo = [];

let form = appendFormAndButton();
//appendInput();
let input = appendInput(form);


const div = appendDiv(form);
let todo = appendTODODiv();
// transform in function
let p = document.createElement("p");
todo.append(p);
p.textContent = 'TODOS :';
let olTD = document.createElement("ol");
olTD.classList.add('content');
todo.append(olTD);


function useValue() {
    let nameValue = input.value;
    return nameValue;
}


document.addEventListener(
    'DOMContentLoaded',
    function () {
        const url = 'https://api-adresse.data.gouv.fr/search/';
        const autocomplete = '&autocomplete=1';
        input.addEventListener("input", async function (event) {
            let res = document.getElementById('result');

            let nameValue = useValue();
            let encodeInput = `?q=${encodeURIComponent(nameValue)}`;
            let final = url + encodeInput + autocomplete;
            if (nameValue == ' ') {
                return;
            }
            let apiData = await getJson(final);

            let apiDataFeatures = apiData.features;
            let datas = apiDataFeatures.map(function (data) {
                let displayLi = data.properties.label;
                return displayLi;
            });

            res.innerHTML = '';
            let ol = createOl(datas);
            res.append(ol);

            let li = document.getElementsByClassName('li-class');
            if (li) {
                for (var i = 0; i < li.length; i++) {
                    li[i].addEventListener("click", function (event) {
                        nameValue = event.target.textContent;
                        input.value = nameValue;
                    });
                }
            }

        });

        const button = document.getElementById('button');
        button.addEventListener("click", function (event) {

            event.preventDefault();

            let nameValue = useValue();
            if (nameValue != "") {
                let toDoElement = [nameValue, 0];
                contentToDo.push(toDoElement);

                renderToDoList(contentToDo);
            }
            input.value = "";
        });


    }, { once: true }



);