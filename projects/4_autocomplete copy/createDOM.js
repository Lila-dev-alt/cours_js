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

function appendDiv(form) {
    let div = createDiv();
    form.append(div);
    return div;
}
function appendTODODiv() {
    let div = createTodoDiv();
    document.body.append(div);
    return div;
}

export { appendFormAndButton, appendInput, appendDiv, appendTODODiv }