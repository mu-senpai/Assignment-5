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

function validateInputText(id) {
    document.getElementById(id).addEventListener('keyup', function (event) {

        const text = event.target.value;
        if (typeof parseInt(text) === 'number' && parseInt(text) > 0) {
            document.getElementById('donate-noakhali-btn').removeAttribute('disabled');
        }
        else {
            document.getElementById('donate-noakhali-btn').setAttribute('disabled', true);
        }
    })
}
