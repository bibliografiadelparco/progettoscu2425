# Biblioteca Online - Progetto "Angelo De Santis" - sede di Maranola del Parco dei Monti Aurunci

## Descrizione generale

Questo progetto è una **biblioteca online** del Centro di documentazione e studi sulla storia e la cultura aurunca "Angelo De Santis", con sede presso il Parco Naturale dei Monti Aurunci a Maranola (Formia, LT)

La pagina web permette di consultare un catalogo di circa 600-700 libri (attualmente circa 400 inseriti) con funzionalità di ricerca e paginazione (100 libri per pagina).

La pagina è ospitata tramite GitHub Pages al seguente link:  
[https://bibliografiadelparco.github.io/progettoscu2425/](https://bibliografiadelparco.github.io/progettoscu2425/)

---

## Struttura del progetto

La cartella principale `/docs` contiene:

- **css/**  
  Fogli di stile per l'aspetto grafico della pagina (`styles.css`).

- **img/**  
  Contiene immagini, ad esempio il logo (`logoparco.png`).

- **js/**  
  Contiene il file JavaScript principale `script.js` che gestisce la logica di ricerca, paginazione e visualizzazione.

- **books.js**  
  File JavaScript contenente l'elenco dei libri in formato array di oggetti.

- **index.html**  
  La pagina HTML principale che struttura la pagina e carica gli script e i CSS.

- **privacy-en.html**  
  Versione in inglese della Privacy Policy (e italiana sul sito iubenda).

---

## Come funziona la pagina

- All'apertura, la pagina carica la lista libri da `books.js`.


- La tabella mostra 100 libri per pagina.
- È possibile cercare libri tramite la barra di ricerca in alto: si possono filtrare per titolo, autore, editore o tema.
- La paginazione permette di navigare tra le pagine di risultati.
- Il footer contiene link alle Privacy Policy e Cookie Policy gestite tramite Iubenda.
- Il sito è responsive e gestisce il consenso cookie con lo script Iubenda integrato nel `<head>`.

---

## Come aggiornare la lista dei libri

1. Modificare il file Excel originale contenente i dati dei libri.

2. Esportare il file Excel in CSV.

3. Convertire il CSV in un array JavaScript (array di oggetti) nel formato usato in `books.js`.  
   Puoi usare strumenti online gratuiti come [ConvertCSV.com](https://www.convertcsv.com/csv-to-json.htm) o [CSV to JSON](https://csvjson.com/csv2json).

4. Inserire il risultato in `books.js`:  
   - Sostituire il contenuto dell’array `books` con il nuovo array generato.  
   - Assicurarsi che la variabile sia dichiarata con `const books = [...]`.

5. Salvare e caricare la nuova versione su GitHub per aggiornare il sito online.

---

## Consigli per futuri manutentori

- Tenere aggiornati i link alla Privacy Policy in caso di variazioni.
- Evitare di duplicare script di terze parti come Iubenda, mantenere una sola configurazione.
- Spostare gli stili CSS dal file HTML al file `styles.css` per una migliore manutenzione.
- Per grandi liste di libri, valutare un backend o un sistema dinamico per scalare meglio.
- Controllare sempre l’ordine di caricamento degli script: `books.js` deve essere caricato prima di `script.js`.

---

## Contatti e riferimenti

- **Centro di documentazione "Angelo De Santis"**  
  Via San Luca 1 – 04023 Maranola di Formia (LT)  
  Tel: +39 0771 749015
  email: bibliotecaonlinemaranola@gmail.com

- **Link progetto GitHub:**  
  [https://github.com/bibliografiadelparco/progettoscu2425](https://github.com/bibliografiadelparco/progettoscu2425)

- **Link sito pubblico:**  
  [https://bibliografiadelparco.github.io/progettoscu2425/](https://bibliografiadelparco.github.io/progettoscu2425/)

---
Ogni oggetto nel file `books.js` ha questa struttura:

```javascript
{
  titolo: 'Titolo del libro',
  autore: 'Nome Autore',
  casa_editrice: 'Editore',
  luogo_anno: 'Città, Anno',
  isbn: 'Codice ISBN',
  tema: 'Categoria o tema'
}

*Documentazione aggiornata a giugno 2025*


