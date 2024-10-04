function validateForm() {
    const voucherNo = document.getElementById('voucherNo').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (!voucherNo || !date || !amount || !description) {
        alert("Please fill in all the required fields.");
        return false;
    }
    return true;
}
