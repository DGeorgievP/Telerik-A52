document.addEventListener('DOMContentLoaded', function () {
    
    function onButtonClick() {
        alert('This should add new todos, its work in progress!');
    }

    const todoButton = document.querySelector('#add-todo-button');
    todoButton.addEventListener('click', onButtonClick);
});
