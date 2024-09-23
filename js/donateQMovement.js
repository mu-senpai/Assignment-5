document.getElementById('donate-amount-qmovement').addEventListener('keyup', function (event) {

    const text = event.target.value;
    if (typeof parseInt(text) === 'number' && parseInt(text) > 0) {
        document.getElementById('donate-qmovement-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('donate-qmovement-btn').setAttribute('disabled', true);
    }
})

document.getElementById('donate-qmovement-btn').addEventListener('click', function() {
    let donateAmount = parseInt(getInputTextById('donate-amount-qmovement'));
    let myBalance = parseInt(getInnerTextById('balance'));
    let donateCollection = parseInt(getInnerTextById('donate-qmovement-collection'));

    myBalance = myBalance - donateAmount;
    donateCollection = donateCollection + donateAmount;

    document.getElementById('balance').innerText = String(myBalance);
    document.getElementById('donate-qmovement-collection').innerText = String(donateCollection);
    document.getElementById('donate-amount-qmovement').value = "";
    document.getElementById('donate-qmovement-btn').setAttribute('disabled', true);
})