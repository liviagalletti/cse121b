document.addEventListener("DOMContentLoaded", function () {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const amountInput = document.getElementById("amount");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    const apiKey = "73ae1d3f3e5a47ee84a604655b4d93eb";


    fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const currencies = data.rates;
            Object.keys(currencies).forEach(currencyCode => {
                const option = document.createElement("option");
                option.value = currencyCode;
                option.textContent = currencyCode;
                fromCurrencySelect.appendChild(option);
                toCurrencySelect.appendChild(option.cloneNode(true));
            });
       
            convertButton.disabled = false;
        })
        .catch(error => {
            console.error("Error fetching the list of currencies:", error);
            resultDiv.textContent = "Failed to load the list of currencies.";
        });


    convertButton.addEventListener("click", () => {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = parseFloat(amountInput.value);

      
        if (isNaN(amount)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}&symbols=${fromCurrency},${toCurrency}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const fromRate = data.rates[fromCurrency];
                const toRate = data.rates[toCurrency];
                const exchangeRate = toRate / fromRate;
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                console.error("Error fetching the conversion rate:", error);
                resultDiv.textContent = "Failed to fetch the conversion rate.";
            });
    });
});
