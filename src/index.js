// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };
    let money = {};
    if(currency <= 0) {
        return money;
    };
    for(let step = 1; step <= 5; step++) {
        let key;
        let divider;
        switch (step) {
            case 1: {
                key = "H";
                divider = 50;
                break;
            };
            case 2: {
                key = "Q";
                divider = 25;
                break;
            };
            case 3: {
                key = "D";
                divider = 10;
                break;
            };
            case 4: {
                key = "N";
                divider = 5;
                break;
            };
            case 5: {
                key = "P";
                divider = 1;
                break;
            };
        };
        let coins = Math.floor(currency/divider);
        if(coins > 0) {
            money[key] = coins;
            currency = currency - coins*divider;
        };
    };
    return money;
};
