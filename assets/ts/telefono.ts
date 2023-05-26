
class Telefono {
    private credito: number;
    private numeroChiamate: number;

    constructor(creditoIniziale: number) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(ricarica: number): void {
        this.credito += ricarica;
    }

    chiamata(durata: number): void {
        const costoChiamata: number = durata * 0.20;
    }

    getCredito(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class Telefono2 {
    private credito: number;
    private numeroChiamate: number;

    constructor(creditoIniziale: number) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(ricarica: number): void {
        this.credito += ricarica;
    }

    chiamata(durata: number): void {
        const costoChiamata: number = durata * 0.10;
    }

    getCredito(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class Telefono3 {
    private credito: number;
    private numeroChiamate: number;

    constructor(creditoIniziale: number) {
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(ricarica: number): void {
        this.credito += ricarica;
    }

    chiamata(durata: number): void {
        const costoChiamata: number = durata * 0.15;
    }

    getCredito(): number {
        return this.credito;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

function printData(telefono: Telefono): void {
    console.log(`Credito residuo: ${telefono.getCredito()}`);
    console.log(`Numero chiamate: ${telefono.getNumeroChiamate()}`);
    telefono.azzeraChiamate();
    console.log(`Chiamate azzerate: ${telefono.getNumeroChiamate()}`);
}

function printData2(telefono: Telefono2): void {
    console.log(`Credito residuo: ${telefono.getCredito()}`);
    console.log(`Numero chiamate: ${telefono.getNumeroChiamate()}`);
    telefono.azzeraChiamate();
    console.log(`Chiamate azzerate: ${telefono.getNumeroChiamate()}`);
}

function printData3(telefono: Telefono3): void {
    console.log(`Credito residuo: ${telefono.getCredito()}`);
    console.log(`Numero chiamate: ${telefono.getNumeroChiamate()}`);
    telefono.azzeraChiamate();
    console.log(`Chiamate azzerate: ${telefono.getNumeroChiamate()}`);
}

const primoUtente = new Telefono(10);
console.log('-----Primo utente-----');
primoUtente.ricarica(20);
primoUtente.chiamata(5);
primoUtente.ricarica(5);
primoUtente.chiamata(10);
printData(primoUtente);

const secondoUtente = new Telefono2(15);
console.log('-----Secondo utente-----');
secondoUtente.ricarica(5);
secondoUtente.chiamata(10);
secondoUtente.ricarica(10);
secondoUtente.chiamata(2);
printData2(secondoUtente);

const terzoUtente = new Telefono3(20);
console.log('-----Terzo utente-----');
terzoUtente.ricarica(10);
terzoUtente.chiamata(2);
terzoUtente.ricarica(10);
terzoUtente.chiamata(2);
printData3(terzoUtente);

