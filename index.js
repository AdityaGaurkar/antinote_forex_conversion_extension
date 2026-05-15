// Extension for currency conversion
// by @adityagaurkar

(function() {
    const extensionName = "fx_converter";
    var from_default = "USD";
    var to_default = "INR";

    const extensionRoot = new Extension({
        name: extensionName,
        version: "1.0.0",
        author: "Aditya Gaurkar",
        category: "Utility",
        dataScope: "none"
    });

    const fx = new Command({
        name: "fx",
        type: "insert",
        helpText: "Convert currency from one to another",
        parameters: [
            new Parameter({type: "float", name: "amount", helpText: "Amount to convert"}),
            new Parameter({type: "string", name: "from", helpText: "Currency code to convert from (e.g., USD)", default: from_default}),
            new Parameter({type: "string", name: "to", helpText: "Currency code to convert to (e.g., INR)", default: to_default})
        ],
        extension: extensionRoot
    });

    fx.execute = function(payload){

        const [amount, fromCurrency, toCurrency] = this.getParsedParams(payload);
        const from = fromCurrency.toUpperCase();
        const to = toCurrency.toUpperCase();

        if (from === to) {
            return new ReturnObject({status: "error", message: `${amount} ${from} is equal to ${amount} ${to}`});
        }

        function convert(amount) {
            return amount * 95.90;
        }

        const result = convert(amount);
        
        return new ReturnObject({status: "success", message: "retrieved", payload: `${result} ${to}`});
    }

    // fx.execute = function(payload){
    // return new ReturnObject({
    //     status: "success",
    //     payload: "IT WORKS"
    // });
})();