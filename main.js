// document.addEventListener('DOMContentLoaded', () => {
//     // Define conversion rates
//     const conversionRates = {
//         '1': { '2': 0.012, '3': 0.018, '4': 0.015, '5': 0.011, '6': 0.016 }, // INR
//         '2': { '1': 86.0, '3': 1.5, '4': 1.3, '5': 0.9, '6': 1.3 }, // USD
//         '3': { '1': 55.0, '2': 0.67, '4': 0.87, '5': 0.60, '6': 0.87 }, // AUD
//         '4': { '1': 68.0, '2': 0.77, '3': 1.15, '5': 0.69, '6': 1.15 }, // CAD
//         '5': { '1': 90.0, '2': 1.11, '3': 1.66, '4': 1.45, '6': 1.66 }, // EUR
//         '6': { '1': 63.0, '2': 0.77, '3': 1.15, '4': 0.87, '5': 0.60 }  // SGD
//     };

//     const fromSelect = document.querySelector('.fromPart select');
//     const toSelect = document.querySelector('.toPart select');
//     const valueInput = document.querySelector('.btnPart input[type="number"]');
//     const resultLabel = document.querySelector('.answerPart label:nth-of-type(1)');
//     const rateLabel1 = document.querySelector('.answerPart label:nth-of-type(2)');
//     const rateLabel2 = document.querySelector('.answerPart label:nth-of-type(3)');
//     const percentChangeLabel = document.querySelector('.answerPart label:nth-of-type(4)');
    
//     document.querySelector('.btn1').addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent form submission

//         const fromCurrency = fromSelect.value;
//         const toCurrency = toSelect.value;
//         const amount = parseFloat(valueInput.value);

//         if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
//             alert('Please fill out all fields correctly.');
//             return;
//         }

//         const rate = conversionRates[fromCurrency][toCurrency];
//         const convertedValue = amount * rate;

//         resultLabel.textContent = `Converted value: ${convertedValue.toFixed(2)} ${toSelect.options[toSelect.selectedIndex].text}`;
//         rateLabel1.textContent = `1 ${fromSelect.options[fromSelect.selectedIndex].text} = ${rate.toFixed(2)} ${toSelect.options[toSelect.selectedIndex].text}`;
//         rateLabel2.textContent = `1 ${toSelect.options[toSelect.selectedIndex].text} = ${(1 / rate).toFixed(2)} ${fromSelect.options[fromSelect.selectedIndex].text}`;

//         // Calculate percentage change (example assumes change from USD to INR)
//         const baseRate = conversionRates['2']['1']; // 1 USD = X INR
//         const percentageChange = ((rate - baseRate) / baseRate * 100).toFixed(2);
//         percentChangeLabel.textContent = `Change from USD to INR: ${percentageChange}%`;
//     });

//     document.querySelector('.btn2').addEventListener('click', () => {
//         valueInput.value = '';
//         resultLabel.textContent = '';
//         rateLabel1.textContent = '';
//         rateLabel2.textContent = '';
//         percentChangeLabel.textContent = '';
//     });
// });
