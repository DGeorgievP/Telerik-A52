let history = [];

function updateHistory(event = '') {
    history.push(event);
    if (history.length > 10) {
        history.shift();
    }

    document.querySelector('#history-column').innerHTML=`<h2>History</h2>${history.map(e => `<p>${e}<p><br/>`).join('')}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Standard input event listeners

    document.querySelector('#standard-input').addEventListener('keydown', (e) => {
        updateHistory(`Standard input has changed value to "${e.target.value}".`);
    });

    document.querySelector('#standard-input').addEventListener('focusin', (e) => {
        updateHistory(`Standard input is in focus.`);
    });

    document.querySelector('#standard-input').addEventListener('focusout', (e) => {
        updateHistory(`Standard input is out of focus.`);
    });

    document.querySelector('#checkbox-input').addEventListener('change', (e) => {
        updateHistory(`Checkbox input has changed value to "${e.target.checked}".`);
    });

    
    // Add-buttons evenet listeners

    document.querySelector('#add-standard-input').addEventListener('click', () => {
        document.querySelector('#dynamic-column').innerHTML += '<br/><label>Dynamic input <input type="text" class="dynamic"></label>';
    });

    document.querySelector('#add-checkbox-input').addEventListener('click', () => {
        document.querySelector('#dynamic-column').innerHTML += '<br/><label>Dynamic checkbox <input type="checkbox" class="dynamic"></label>';
    });

    document.querySelector('#add-button').addEventListener('click', () => {
        document.querySelector('#dynamic-column').innerHTML += '<br/><button class="dynamic">Dynamic button</button>';
    });


    // Global event listeners

    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'text' && e.target.classList.contains('dynamic')) {
            updateHistory(`Dynamic input has changed value to "${e.target.value}".`);
        }
    });

    document.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'text' && e.target.classList.contains('dynamic')) {
            updateHistory(`Dynamic input is in focus.`);
        }
    });

    document.addEventListener('focusout', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'text' && e.target.classList.contains('dynamic')) {
            updateHistory(`Dynamic input is out of focus.`);
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox' && e.target.classList.contains('dynamic')) {
            updateHistory(`Dynamic checkbox input has changed value to "${e.target.checked}".`);
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('dynamic')) {
            updateHistory(`Dynamic button was clicked.`);
        }
    });
});