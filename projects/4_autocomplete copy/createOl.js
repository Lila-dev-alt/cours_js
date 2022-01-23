import createLi from "./createLi.js";

export default function createOl(adresses) {
    const ol = document.createElement('ol');

    adresses.forEach(adress => {
        const li = createLi(adress);
        li.classList.add('li-class');
        ol.append(li);
    });

    return ol;
}