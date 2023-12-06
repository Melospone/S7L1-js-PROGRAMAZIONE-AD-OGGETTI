/* const { ThemeProvider } = require("react-bootstrap");

const User = function (nome, cognome, eta, locazione) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.locazione = locazione;

    this.Tutto = function() {
        console.log(nome + " " +  cognome + " " + eta + " " + locazione)
    }

    this.Confronto = function() {
        if (persona1.eta < persona2.eta) {
            console.log("melo è piu piccolo di persona2")
        } else {
            console.log(("melo è piu grande di persona2"))
        }
    }
}


const persona1 = new User("melo" , "bonanno" , 24 , "catania");
console.log(persona1.Tutto())

const persona2 = new User("mario" , "rossi" , 27 , "catania");
console.log(persona2.Tutto()) */




/* --------sintassi REAL-------- */

/* class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    getDati() {
        console.log(this.nome + " " +  this.cognome )
    }
}

class Programmatore extends Persona {
    constructor(nome, cognome, materia, eta) {
        //richiama il construttore di Persona
        super  (nome, cognome);
        this.materia = materia;
        this.eta = eta
    }
}

const persona1 = new Persona();
persona1.nome = "melo";
persona1.cognome = "bonanno";
persona1.getDati();

const persona2 = new Persona();
persona2.nome = "mario";
persona2.cognome = "rossi";
persona2.getDati();

programmatore1 = new Programmatore("giulio", "verdi", "italiano", 17)
programmatore1.getDati();
 */


/* -------auto------- */

/* class casaCostruttrice {
    constructor(nome, sede) {
        this.nome = nome;
        this.sede = sede;
        this._capitale = 1000
    }

    getNome() {
        console.log(this.nome);
    }

    getSede() {
        console.log(this.sede);
    }

    setCapitale(valore) {
        this._capitale = valore;
    }

    brochure() {
        console.log("Siamo " + this.nome + " e siamo di " + this.sede)
    }
}

class Concessionaria extends casaCostruttrice {
    constructor(nome, sede, numeroDipendenti) {
        super(nome, sede)
        this.numeroDipendenti = numeroDipendenti;
    }


getNome() {
    console.log(this.nome + " concessionaria");
}

vendita(value) {
    this.setCapitale(this._capitale + value)
}

brochure() {
    super.brochure();
    console.log("questa è la concessionaria")
}

getDipendenti() {
    console.log(this.numeroDipendenti);
}

}

class Suv extends Concessionaria {
    constructor(nome, sede, numeroDipendenti, modello, colore, prezzo){
        super(nome, sede, numeroDipendenti);
        this.modello = modello;
        this.colore = colore;
        this.prezzo = prezzo
    }
    getProvenienza() {
        console.log("arrivo da "+ this.sede + " e siamo di " + this.nome);
    }

    getColore() {
        console.log(this.colore);
    }

    getPrezzo() {
        console.log(this.prezzo);
    }

    getModello() {
        console.log(this.modello);
    }
}

RangeRoverEvoque = new Suv("range rover", "roma", 10, "evoque", "rosso", 50000)
RangeRoverEvoque.getProvenienza();
RangeRoverEvoque.getColore();
RangeRoverEvoque.getPrezzo();
RangeRoverEvoque.getModello();
RangeRoverEvoque.getDipendenti();

class Berlina extends Concessionaria {
    constructor(nome, sede, numeroDipendenti, modello, colore, prezzo, problemi){
        super(nome, sede, numeroDipendenti);
        this.modello = modello;
        this.colore = colore;
        this.prezzo = prezzo;
        this.problemi = problemi;
    }
    
    getProvenienza() {
        console.log("arrivo da "+ this.sede + " e siamo di " + this.nome);
    }

    getColore() {
        console.log(this.colore);
    }

    getPrezzo() {
        console.log(this.prezzo);
    }

    getModello() {
        console.log(this.modello);
    }

    getProblemi() {
        console.log(this.problemi);
    }
    
}

ferrari = new Berlina("ferrari", "milano", 11, "898", "verde", 10000, "motore")
ferrari.getProvenienza();
ferrari.getColore();
ferrari.getPrezzo();
ferrari.getModello();
ferrari.getDipendenti();
ferrari.getProblemi(); */




/* ESERCIZIO/1 SET/7  */


class User {
    constructor(nome, cognome, eta, locazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.locazione = locazione;
    }

    Tutto() {
        console.log(this.nome + " " + this.cognome + " " + this.eta + " " + this.locazione);
    }

    Confronto(altroUser) {
        if (this.eta < altroUser.eta) {
            console.log(this.nome + " è più giovane di " + altroUser.nome);
        } else if (this.eta > altroUser.eta) {
            console.log(this.nome + " è più anziano di " + altroUser.nome);
        } else {
            console.log(this.nome + " ha la stessa età di " + altroUser.nome);
        }
    }
}

const x = new User("carmelo", "bonanno", 24, "catania");
const y = new User("mario", "verdi", 28, "catania");

x.Tutto(); 
y.Tutto(); 

x.Confronto(y); 
y.Confronto(x); 



/* ESERCIZIO/2 SET/7  */

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName; 
        this.species = species;
        this.breed = breed;
    }

    stessoPropietario(altroPet) {
        return this.ownerName === altroPet.ownerName; 
    }
}

function aggiungiPet() {
    let petName = document.getElementById("petName").value;
    let ownerName = document.getElementById("ownerName").value;
    let species = document.getElementById("species").value;
    let breed = document.getElementById("breed").value;

    const pets = new Pet(petName, ownerName, species, breed);
    displayPet(pets);
}

function displayPet(pet) {
    const petList = document.getElementById("petList");
    const listItem = document.createElement("li");
    listItem.textContent = "Pet: " + pet.petName + ", Owner: " + pet.ownerName + ", Species: " + pet.species + ", Breed: " + pet.breed;
    petList.appendChild(listItem);
}

