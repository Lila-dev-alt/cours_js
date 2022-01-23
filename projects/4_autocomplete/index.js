function getJson(url) {
    return fetch(url)
        .then(function (resp) {
            return resp.json();

        })
        .catch(function (err) {
            console.error(err);
        });
}

function createInput() {
    let input = document.createElement("input");
    input.type = "text";
    return input;
}

function createForm() {
    let form = document.createElement("form");
    return form;
}

function createDiv() {
    let div = document.createElement("div");
    div.id = 'result';
    return div;
}
function createTodoDiv() {
    let div = document.createElement("div");
    div.id = 'todo';
    return div;
}

function createButton() {
    let button = document.createElement("button");
    button.textContent = 'Submit';
    return button;
}



function appendFormAndButton() {
    let form = createForm();
    let button = createButton();
    document.body.append(form);
    button.id = 'button';
    form.append(button);
    return form;
}

function appendInput(form) {
    let input = createInput();
    form.append(input);
    return input;
}

function appendDiv() {
    let div = createDiv();
    form.append(div);
    return div;
}
function appendTODODiv() {
    let div = createTodoDiv();
    document.body.append(div);
    return div;
}

let contentToDo = [];

let form = appendFormAndButton();
//appendInput();

let input = appendInput(form);
const div = appendDiv();
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
    // use it
    return nameValue;
    // just to show the new value
}

//quand on clique sur une suggestion ça l'ajoute aux TODO
function createLi(adress) {

    const li = document.createElement('li');
    li.textContent = adress;

    return li;
}




function createOl(adresses) {
    const ol = document.createElement('ol');

    adresses.forEach(adress => {
        const li = createLi(adress);
        li.classList.add('li-class');
        ol.append(li);
    });

    return ol;
}

function renderToDoList(contentToDo) {
    olTD.innerHTML = "";

    contentToDo.forEach(function (element, index) {
        let liTodo = document.createElement("li");
        let span = document.createElement('span');
        span.classList.add('span-adress');
        let span2 = document.createElement('span');
        span2.classList.add('span-delete');
        span2.textContent = 'Supprimer';
        span.textContent = element[0];
        liTodo.dataset.id = index;
        if (element[1] === 0) {
            liTodo.classList.add('incomplete');
        } else {
            liTodo.classList.add('complete');
        }

        olTD.append(liTodo);
        liTodo.append(span);
        liTodo.append(span2);
    })
    changeStateTodo();
    deleteTodo();
}
function changeStateTodo() {
    let olTodo = document.querySelectorAll('ol.content > li > span.span-adress');
    olTodo.forEach(function (element) {
        element.addEventListener("click", function (event) {
            let currentElement = event.target.parentNode;
            if (contentToDo[currentElement.dataset.id][1] === 0) {
                contentToDo[currentElement.dataset.id][1] = 1;
            } else {
                contentToDo[currentElement.dataset.id][1] = 0;
            }
            renderToDoList(contentToDo);
        })
    })

}

function deleteTodo() {
    let spanDelete = document.querySelectorAll('ol.content > li > span.span-delete');
    spanDelete.forEach(function (element, index) {
        element.addEventListener("click", function (event) {
            let currentElement = event.target.parentNode;
            contentToDo.splice(currentElement.dataset.id, 1);
            renderToDoList(contentToDo);
        })

    })
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
            // make it a function 

            let li = document.getElementsByClassName('li-class');
            if (li) {
                for (var i = 0; i < li.length; i++) {
                    li[i].addEventListener("click", function (event) {
                        nameValue = event.target.textContent;
                        input.value = nameValue;
                    });
                }
            }
            //   nameValue = input.value;
            // submit button creer le todo

        });

        const button = document.getElementById('button');
        button.addEventListener("click", function (event) {

            event.preventDefault();

            let nameValue = useValue();
            let toDoElement = [nameValue, 0];
            contentToDo.push(toDoElement);

            renderToDoList(contentToDo);

            input.value = "";
        });


    }, { once: true }



);








// quand ca marche par defaut une ligne rouge et tu cliques ligne verte
// on peut les trier ensuite par tous et todo , voir enonce 