// Esercizio studenti 

// Punto 1

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.



// Punto 2

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e 
// stampare per ognuno di essi, nome e cognome.



// Punto 3

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo 
// oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto 
// inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.



// Punto 1

// Creazione dell'oggetto studente

var studenteDomenico = {

    nome: 'domenico',
    cognome: 'zummo',
    età: 25,
};

       for(var key in studenteDomenico){

        console.log( key + ' = ' +  studenteDomenico[key]);

      }


console.log('************************* Esercizio successivo *************************');
    //   Punto 2

    var studenti = [

        {
            nome: 'domenico',
            cognome: 'zummo',
            età: 25,
        },
        
        {
            nome: 'mauro',
            cognome: 'la barbera',
            età: 25,
        },

        {
            nome: 'pinco',
            cognome: 'pallino',
            età: 20,
        },

        {
            nome: 'paolo',
            cognome: 'rossi',
            età: 28,
        },

        {
            nome: 'gianni',
            cognome: 'lo nigro',
            età: 25,
        },

        {
            nome: 'roberto',
            cognome: 'romeo',
            età: 35,
        },

        {
            nome: 'paolo',
            cognome: 'duzioni',
            età: 18,
        },

    ] ;


    // Ciclare gli studenti e stanparli

    for( var i = 0; i < studenti.length;i++){

        var studente = studenti[i];

        var nomeStudente = studente.nome ;

        var cognomeStudente = studente.cognome;

        console.log(nomeStudente + ' - ' + cognomeStudente );

    }

    console.log('************************* Esercizio successivo *************************');



