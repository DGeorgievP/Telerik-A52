const bankAccount = (function createBankAccount(balance = 0) {
    const checkValidNumberInput = (numberInput) => {
        if (!(typeof numberInput === 'number') || numberInput < 0) {
            throw new Error('The input number should be a positive number!');
        }
    }

    checkValidNumberInput(balance);

    const getBalance = () => balance;

    const deposit = (amount) => {
        checkValidNumberInput(amount);

        balance += amount;
        return getBalance();
    }

    const withdraw = (amount) => {
        checkValidNumberInput(amount);

        if (balance < amount) {
            throw new Error('The withdraw amount should be less than the balance!');
        }
        balance -= amount;

        return getBalance();
    }

    return {
        get internalBalance() {
            return getBalance();
        },
        deposit,
        withdraw
    };
})();
