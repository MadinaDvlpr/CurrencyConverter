let currencies = {'EUR': {'YEN': 0.0062,'GBP': 0.866600, 'USD': 1.07284}, 
                  'USD': {'YEN': 0.0066,'EUR': 0.932107,'GBP': 0.807751}, 
                  'GBP': {'YEN': 0.0054,'EUR': 1.15,'USD': 1.23801}, 
                  'YEN': {'GBP': 184.813,'EUR': 160.168,'USD': 149.284}
                }

const dropList = document.querySelectorAll('form select');
const convertBtn = document.querySelector('.submit');
let fromSelect;
let toSelect;
let fromInput;    
let result = document.querySelector('.exchange-result');
let rate = document.querySelector('.exchange-rate');

convertBtn.addEventListener("click", (e)=>{
    clear(rate);
    clear(result);
    e.preventDefault();
    let amount = document.querySelector("form input").value;
    fromSelect = document.querySelector('[name="from_currency"]').value;
    toSelect = document.querySelector('[name="to_currency"]').value;
    fromInput = document.querySelector('[name="from_amount"]').value; 
    parseFloat(fromInput);
    parseFloat(fromSelect);
    parseFloat(toSelect);
    parseFloat(amount)
    // if user don't enter any value or enter 0 then we'll put 1 value by default in the input field
    a=fromSelect.value
    // b=a.slice(0,3)
    h=toSelect.value
    // o=h.slice(0,3)
    console.log(amount);
    console.log(fromSelect.value);
    console.log(toSelect.value);
    console.log(currencies[fromSelect][toSelect]);
   
    
    
        if (fromSelect == toSelect){
            result = amount;
          } else if(amount == "" ){
                rate.innerHTML = 'Veuillez entrer un montant !';
                rate.style.color = 'hsl(357, 92%, 47%)';
             }else{
           result.innerHTML = (amount * currencies[fromSelect][toSelect]).toFixed(2);
           rate.innerHTML = 'Taux de change : ' + currencies[fromSelect][toSelect];
           rate.style.color = 'hsl(0, 0%, 100%)';
 
        }

    });


const swapIcon = document.querySelector(".icon");
swapIcon.addEventListener("click", (e)=>{
    e.preventDefault();

    fromSelect = document.querySelector('[name="from_currency"]').value;
    toSelect = document.querySelector('[name="to_currency"]').value;
    fromInput = document.querySelector('[name="from_amount"]').value; 
    parseFloat(fromInput);
    parseFloat(fromSelect);
    parseFloat(toSelect);


    let tempCurrency = fromSelect; // temporary currency code of FROM drop list
    fromSelect = toSelect; // passing TO currency code to FROM currency code
    toSelect = tempCurrency; // passing temporary currency code to TO currency code
    // getExchangeRate(); // calling getExchangeRate
    console.log(fromSelect.value);
    console.log(toSelect.value);
})

function clear(element){
    element.innerHTML = '';
}




