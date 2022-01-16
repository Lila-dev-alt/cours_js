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

function createButton() {
    let button = document.createElement("button");
    button.textContent = 'Submit';
    return button;
}



function appendFormAndButton() {
    let form = createForm();
    let button = createButton();
    document.body.append(form);
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
}
let form = appendFormAndButton();
//appendInput();

let input = appendInput(form);
const div = appendDiv();



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
                        console.log(event.target.innerHTML);
                        console.log(nameValue);
                        nameValue = event.target.textContent;
                        input.value = nameValue;
                    });
                }
            }


        });




    }, { once: true });


// quand on clique sur un li ca ajoute a l input
//submit plus un todo remettre a 0 la value 