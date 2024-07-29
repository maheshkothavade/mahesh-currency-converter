import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_qzPd71f1Ib2fAKytOgUZoMtdsnlMm2qZiVvrfjTC');

//convertCurrency("INR","USD",3);
 export async function convertCurrency(fromcurrenncy,tocurrency,units){
    const res = await freecurrencyapi.latest({
        base_currency:fromcurrenncy,
        currencies:tocurrency
    });
    const multiplier = res.data[tocurrency];
    console.log(multiplier);
    return multiplier*units;
    
 }