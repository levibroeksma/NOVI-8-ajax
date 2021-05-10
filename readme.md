# API met Axios oefening

- `npm init`
- `touch .gitignore`
- `npm install axios --save`
- zet `node_modules/` in de `.gitignore`
- maak een .js bestand aan voor de oefening
- importeer axios in dat bestand: `const axios = require('axios')`
- doe een `get` request naar de [Chuck Norris API](https://api.chucknorris.io/)

Je kunt je bestand in de terminal runnen met `nodemon bestand.js`. 

## Bonus
Maak een HTML bestand waar je je script inlaadt. Probeer het grapje dat je van de API heb opgehaald, in de browser te laten verschijnen. Je wilt dan niet meer `nodemon` gebruiken, maar de browser en de inspector (console) openen.

## Bonus bonus
Voeg een knop toe, die je een nieuw grapje laat zien zodra je erop klikt

## Bonus bonus bonus
Laat de bezoeker een categorie van grapjes kiezen. De lijst met grapjes categoriën haal je op via de Chuck Norris API.