# SOS Toscana

SOS Toscana è un'applicazione web e mobile che permette di segnalare in modo semplice e veloce un'emergenza in Toscana.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fdb17d8-8454-4779-9019-cefd8a689b90/deploy-status)](https://app.netlify.com/sites/jazzy-meerkat-241e3e/deploys)

## Panoramica

Questo progetto è stato creato utilizzando Ionic e Capacitor ed è progettato per l'uso di una PWA. Per la distribuzione su dispositivi mobili, è necessario installare Capacitor e aggiungere le piattaforme desiderate.

## Prerequisiti

Prima di iniziare a lavorare su questo progetto, assicurati di avere installato quanto segue:

- [Node.js](https://nodejs.org/): Assicurati di avere Node.js installato.
- [Ionic CLI](https://ionicframework.com/docs/intro/cli): Installa l'interfaccia a riga di comando di Ionic.
- [Capacitor](https://capacitorjs.com/): Installa Capacitor per la distribuzione su dispositivi mobili.

## Installazione

Segui questi passaggi per installare il progetto sul tuo sistema:

```bash
git clone <https://github.com/LorenzoCruccu/sostoscana-ui>
cd sostoscana-ui
npm install
```

Uso
Dopo aver installato le dipendenze, puoi avviare il progetto localmente utilizzando il server di sviluppo di Ionic:

```bash
ionic serve
```
Per distribuire l'app su dispositivi mobili, puoi utilizzare Capacitor. Esegui i seguenti comandi per inizializzare Capacitor e aggiungere piattaforme specifiche:

```bash
npx cap init
npx cap add android
npx cap add ios
Per eseguire l'app su un dispositivo o un emulatore, usa i seguenti comandi:
```

```bash
npx cap open android
npx cap open ios
Struttura del Progetto
Spiega la struttura del progetto e dove trovare i file importanti.
```

```css
NOME_DEL_PROGETTO/
├── src/
│   ├── app/
│   │   ├── ...
│   ├── assets/
│   │   ├── ...
│   ├── ...
```

Contribuzione
Se desideri contribuire a questo progetto, segui questi passaggi:

Fai il fork del repository su GitHub.

Crea un nuovo branch per le tue modifiche:

```bash
git checkout -b tua-branch
```
Fai le tue modifiche e assicurati che il codice sia stato testato.

Fai il commit delle tue modifiche:

```bash
git commit -m "Descrizione delle modifiche"
```
Pusha il tuo branch sul tuo fork:

```bash
git push origin tua-branch
```

Crea una pull request sul repository originale.