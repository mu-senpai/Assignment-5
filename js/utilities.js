function sectionToggle(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function getInputTextById(id) {
    const inputText = document.getElementById(id).value;
    return inputText;
}

function getInnerTextById(id) {
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
