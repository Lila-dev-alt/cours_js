import renderToDoList from "./renderTodoList.js";

export default function changeStateTodo(contentToDo) {
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