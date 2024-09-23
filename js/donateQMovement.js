document.getElementById('donate-qmovement-btn').addEventListener('click', function() {

    const text = getInputTextById('donate-amount-qmovement');
    if (isNaN(text) === true || parseInt(text) < 0) {
        document.getElementById('donate-amount-qmovement').value = "";
        alert("Invalid input amount! Please enter the valid input.");
    } else {
        let donateAmount = parseInt(getInputTextById('donate-amount-qmovement'));
        let myBalance = parseInt(getInnerTextById('balance'));
        let donateCollection = parseInt(getInnerTextById('donate-qmovement-collection'));

        if (myBalance > 0 && donateAmount <= myBalance) {
            myBalance = myBalance - donateAmount;
            donateCollection = donateCollection + donateAmount;
        
            document.getElementById('balance').innerText = String(myBalance);
            document.getElementById('donate-qmovement-collection').innerText = String(donateCollection);
            document.getElementById('donate-amount-qmovement').value = "";
        
            const dateClass = new Date;
            const date = dateClass.toString();
            const historyContent = document.createElement('div');
            historyContent.className = "card bg-base-100 w-full border border-[#1111111A] rounded-2xl";
            historyContent.innerHTML = `
            <div class="card-body">
                <h3 class="text-sm sm:text-base lg:text-xl font-bold">${donateAmount} taka is donated for Injured in the Quota Movement</h3>
                <p class="text-xs sm:text-sm lg:text-base font-light text-[#111111B3]">Date: ${date}</p>
            </div>
            `
            document.getElementById('history-section').append(historyContent);
    
            document.getElementById('my_modal_3').showModal();
        } else {
            document.getElementById('donate-amount-qmovement').value = "";
            alert("You don't have sufficient balance to donate.");
        }
    }

})