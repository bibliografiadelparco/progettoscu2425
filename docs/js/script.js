function cercaParola() {
    const input = document.getElementById("inputRicerca").value.toLowerCase();
    const tabella = document.querySelector("#bibliografia table tbody");
    const righe = tabella.querySelectorAll("tr"); // Usa querySelectorAll per ottenere un NodeList
  
    let risultatiTrovati = false;
    let numeroRisultati = 0; // Inizializza il contatore dei risultati
  
    if (input.trim() === "") {
      // Se il campo di input è vuoto, mostra tutte le righe
      righe.forEach((riga) => (riga.style.display = "")); // Usa forEach per iterare sul NodeList
      document.getElementById("risultati").textContent = "";
      return;
    }
  
    righe.forEach((riga) => {
      const celle = riga.querySelectorAll("td"); // Usa querySelectorAll per ottenere un NodeList
      let trovato = false;
  
      celle.forEach((cella) => {
        if (cella.textContent.toLowerCase().includes(input)) {
          trovato = true;
          risultatiTrovati = true;
        }
      });
  
      if (trovato) {
        riga.style.display = "";
        numeroRisultati++; // Incrementa il contatore dei risultati
      } else {
        riga.style.display = "none";
      }
    });
  
    if (!risultatiTrovati) {
      document.getElementById("risultati").textContent = "Nessun risultato trovato.";
    } else {
      document.getElementById("risultati").textContent = `Trovati ${numeroRisultati} risultati.`; // Mostra il numero di risultati
    }
  }
  
  // Ottieni il riferimento al pulsante di ricerca
  const pulsanteRicerca = document.querySelector("#ricerca button");
  
  // Aggiungi un listener di eventi al pulsante
  pulsanteRicerca.addEventListener("click", cercaParola);