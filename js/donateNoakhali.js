document.getElementById('donate-amount-noakhali').addEventListener('keyup', function (event) {

    const text = event.target.value;
    if (typeof parseInt(text) === 'number' && parseInt(text) > 0) {
        document.getElementById('donate-noakhali-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('donate-noakhali-btn').setAttribute('disabled', true);
    }
})

document.getElementById('donate-noakhali-btn').addEventListener('click', function() {
    let donateAmount = parseInt(getInputTextById('donate-amount-noakhali'));
    let myBalance = parseInt(getInnerTextById('balance'));
    let donateCollection = parseInt(getInnerTextById('donate-noakhali-collection'));

    myBalance = myBalance - donateAmount;
    donateCollection = donateCollection + donateAmount;

    document.getElementById('balance').innerText = String(myBalance);
    document.getElementById('donate-noakhali-collection').innerText = String(donateCollection);
    document.getElementById('donate-amount-noakhali').value = "";
    document.getElementById('donate-noakhali-btn').setAttribute('disabled', true);
})