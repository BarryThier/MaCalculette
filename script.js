document.addEventListener("DOMContentLoaded", () => {
    const bill = document.getElementById("bill");
    const tipButtons = document.querySelectorAll(".tip-btn");
    const peopleInput = document.getElementById("numberOfPeople");
    const tipAmount = document.getElementById("tipAmount");
    const totalAmount = document.getElementById("totalAmount");
    const reset = document.getElementById("reset");

    tipButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const billInput = parseFloat(bill.value);
            const percentage = parseFloat(event.target.getAttribute("data-percentage"));
            const people = parseFloat(peopleInput.value);

            if (!isNaN(billInput) && !isNaN(people)) {
                const tip = (billInput * (percentage / 100)) / people;
                const total = (billInput + (billInput * (percentage / 100))) / people;

                tipAmount.textContent = tip.toFixed(2);
                totalAmount.textContent = total.toFixed(2);
            }
        });
    });

    reset.addEventListener("click", () => {
        tipAmount.textContent = "0.00";
        totalAmount.textContent = "0.00";
        bill.value = "";
        peopleInput.value = "";
    });
});
