import changeStateTodo from "./changeStateTodo.js";
import deleteTodo from "./deleteTodo.js";

export default function renderToDoList(contentToDo) {
    let olTD = document.getElementsByClassName('content');
    olTD = olTD[0];
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
    changeStateTodo(contentToDo);
    deleteTodo(contentToDo);
}