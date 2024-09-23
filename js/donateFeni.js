document.getElementById('donate-amount-feni').addEventListener('keyup', function (event) {

    let text = event.target.value;
    if (typeof parseInt(text) === 'number' && parseInt(text) > 0) {
        document.getElementById('donate-feni-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('donate-feni-btn').setAttribute('disabled', true);
    }
})

document.getElementById('donate-feni-btn').addEventListener('click', function() {
    let donateAmount = parseInt(getInputTextById('donate-amount-feni'));
    let myBalance = parseInt(getInnerTextById('balance'));
    let donateCollection = parseInt(getInnerTextById('donate-feni-collection'));

    myBalance = myBalance - donateAmount;
    donateCollection = donateCollection + donateAmount;

    document.getElementById('balance').innerText = String(myBalance);
    document.getElementById('donate-feni-collection').innerText = String(donateCollection);
    document.getElementById('donate-amount-feni').value = "";
    document.getElementById('donate-feni-btn').setAttribute('disabled', true);
})