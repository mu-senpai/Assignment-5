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

    const dateClass = new Date;
    const date = dateClass.toString();
    const historyContent = document.createElement('div');
    historyContent.className = "card bg-base-100 w-full border border-[#1111111A] rounded-2xl";
    historyContent.innerHTML = `
    <div class="card-body">
        <h3 class="text-sm sm:text-base lg:text-xl font-bold">${donateAmount} taka is donated for Flood Relief in Feni,Bangladesh</h3>
        <p class="text-xs sm:text-sm lg:text-base font-light text-[#111111B3]">Date: ${date}</p>
    </div>
    `
    document.getElementById('history-section').append(historyContent);
})