const addBtn = document.getElementById('add')

console.log(addBtn)

addBtn.addEventListener('click', function (event) {
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = `
        <h1>Задача</h1>
        <p>${input.value}</p>
    `;
    document.getElementById('notes').appendChild(note);
});

let notes = document.getElementById('notes');

const input = document.getElementById('input');
input.addEventListener('input', autoresize);

function autoresize() {
    let size = input.scrollWidth
    input.style.width = size + 'px';
    input.style.transition = "none";
}