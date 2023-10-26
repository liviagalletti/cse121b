document.addEventListener("DOMContentLoaded", function () {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const amountInput = document.getElementById("amount");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    const apiKey = "73ae1d3f3e5a47ee84a604655b4d93eb";

    function displayError(message) {
        console.error(message);
        resultDiv.textContent = message;
    }

    function fetchCurrencies() {
        fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`)
            .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch currencies"))
            .then(data => {
                const currencyOptions = Object.keys(data.rates).map(code => {
                    const option = document.createElement("option");
                    option.value = code;
                    option.textContent = code;
                    return option;
                });
                fromCurrencySelect.append(...currencyOptions);
                toCurrencySelect.append(...currencyOptions.map(option => option.cloneNode(true)));
                convertButton.disabled = false;
            })
            .catch(error => displayError("Failed to load the list of currencies."));
    }

    function convertCurrency() {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount)) {
            return displayError("Please enter a valid number.");
        }

        fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${fromCurrency},${toCurrency}`)
            .then(response => response.ok ? response.json() : Promise.reject("Failed to fetch conversion rate"))
            .then(data => {
                const fromRate = data.rates[fromCurrency];
                const toRate = data.rates[toCurrency];
                const exchangeRate = toRate / fromRate;
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => displayError("Failed to fetch the conversion rate."));
    }

    fetchCurrencies();
    convertButton.addEventListener("click", convertCurrency);
});
