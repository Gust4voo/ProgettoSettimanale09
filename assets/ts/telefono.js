var Telefono = /** @class */ (function () {
    function Telefono(creditoIniziale) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }
    Telefono.prototype.ricarica = function (ricarica) {
        this.credito += ricarica;
    };
    Telefono.prototype.chiamata = function (durata) {
        var costoChiamata = durata * 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log('Credito insufficiente, la chiamata non può essere effettuata');
        }
    };
    Telefono.prototype.getCredito = function () {
        return this.credito;
    };
    Telefono.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Telefono.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Telefono;
}());
function printData(telefono) {
    console.log("Credito residuo: ".concat(telefono.getCredito()));
    console.log("Numero chiamate: ".concat(telefono.getNumeroChiamate()));
    telefono.azzeraChiamate();
    console.log("Chiamate azzerate: ".concat(telefono.getNumeroChiamate()));
}
var primoUtente = new Telefono(10);
console.log('-----Primo utente-----');
primoUtente.ricarica(20);
primoUtente.chiamata(5);
primoUtente.ricarica(5);
primoUtente.chiamata(10);
printData(primoUtente);
var secondoUtente = new Telefono(15);
console.log('-----Secondo utente-----');
secondoUtente.ricarica(5);
secondoUtente.chiamata(10);
secondoUtente.ricarica(10);
secondoUtente.chiamata(2);
printData(secondoUtente);
var terzoUtente = new Telefono(20);
console.log('-----Terzo utente-----');
terzoUtente.ricarica(10);
terzoUtente.chiamata(2);
terzoUtente.ricarica(10);
terzoUtente.chiamata(2);
printData(terzoUtente);
