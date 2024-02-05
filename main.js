import { tableau } from './data_bis.js';

const TYPE_SELECTION = document.querySelector('#type');
const FUNC_SELECTION = document.querySelector('#func');
const DESCRIPTION = document.querySelector('#texte');
const EXAMPLE_CONTAINER = document.querySelector('#exemple');

function updateType() {
    FUNC_SELECTION.innerHTML = '<option value="default">Sélectionner une fonction</option>';
    addOptions(selection());
    addDescription(selection());
}

function addOptions(options) {
    for (let i = 0; i < options.length; i++) {
        const NOUVELLE_OPTION = document.createElement('option');
        NOUVELLE_OPTION.innerText = options[i].method;
        NOUVELLE_OPTION.value = options[i].method;
        FUNC_SELECTION.add(NOUVELLE_OPTION);
    }
}

function addDescription(options) {
    const SELECTED_OPTION = options.find(option => option.method === FUNC_SELECTION.value);
    if (SELECTED_OPTION) {
        DESCRIPTION.innerText = SELECTED_OPTION.description;
    } else {
        DESCRIPTION.innerText = " Selectionner une fonction";
    }
}

function selection() {
    const selectedType = tableau.find(category => category.category === TYPE_SELECTION.value);
    return selectedType ? selectedType.methods : [];
}

function addExample(options) {
    const SELECTED_OPTION = options.find(option => option.method === FUNC_SELECTION.value);
    if (SELECTED_OPTION && SELECTED_OPTION.example) {
        EXAMPLE_CONTAINER.innerText = `Exemple :\n${SELECTED_OPTION.example}`;
    } else {
        EXAMPLE_CONTAINER.innerText = "Aucun exemple disponible pour cette fonction.";
    }
}


TYPE_SELECTION.addEventListener('change', updateType);
FUNC_SELECTION.addEventListener('change', () => {
    addDescription(selection());
    addExample(selection());
});
updateType();






