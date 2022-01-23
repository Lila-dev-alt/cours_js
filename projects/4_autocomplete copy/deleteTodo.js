import renderToDoList from "./renderTodoList.js";

export default function deleteTodo(contentToDo) {
    let spanDelete = document.querySelectorAll('ol.content > li > span.span-delete');
    spanDelete.forEach(function (element, index) {
        element.addEventListener("click", function (event) {
            let currentElement = event.target.parentNode;
            contentToDo.splice(currentElement.dataset.id, 1);
            renderToDoList(contentToDo);
        })

    })
}
