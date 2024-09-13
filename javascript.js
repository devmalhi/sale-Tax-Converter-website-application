function calculateTax() {
    let amount = parseFloat(document.querySelector('input[name="Tax"]').value);
    let netTax = 0;

    if (amount <= 600000) {
        netTax = 0;
    } else if (amount <= 1200000) {
        netTax = (amount - 600000) * 0.05;
    } else if (amount <= 1800000) {
        netTax = (600000 * 0) + ((amount - 1200000) * 0.10);
    } else if (amount <= 2400000) {
        netTax = (600000 * 0) + (600000 * 0.05) + ((amount - 1800000) * 0.15);
    } else {
        netTax = (600000 * 0) + (600000 * 0.05) + (600000 * 0.10) + ((amount - 2400000) * 0.15);
    }

    document.querySelector('input[name="Net"]').value = netTax.toFixed(2);
}