---
title: Opdrachten
date: 2025-09-09
---

::: section
### Eenvoudige queries
* Geef de query voor een overzicht van de naam en roepnaam van alle cursisten die in Oosterhout wonen.
* Geef de query voor een overzicht van het cursistnummer en de roepnaam van alle cursisten die niet in Oosterhout wonen.
* Geef de query voor een overzicht van alle cursisten die vrouw zijn.
* Geef de query voor een overzicht van alle cursisten die niet man zijn. (dit is een andere query dan de vorige vraag, maar met hetzelfde resultaat)
* Geef de query voor een overzicht van alle cursisten die in Breda wonen en vrouw zijn.
* Geef de query voor een overzicht van alle cursisten die in Oosterhout of Made wonen.
* Geef de query voor een overzicht van alle plaatsen waar cursussen worden gegeven.
:::

::: section
### Aggregeren
:::

::: section
### Databases maken
## Oefeningen
Voeg onderstaande records toe aan de tabel boeken van de database:
```shell
+----+----------------------------+------+------+
| id | titel                      | jaar | druk |
+----+----------------------------+------+------+
|  1 | De Avonden                 | 1947 |    1 |
|  2 | Het Diner                  | 2009 |    1 |
|  3 | De Ontdekking van de Hemel | 1992 |    1 |
|  4 | De Aanslag                 | 1982 |    1 |
+----+----------------------------+------+------+
```

Voeg onderstaande records toe aan de tabel klanten:
```shell
+----+----------+------------+--------------------------+
| id | voornaam | achternaam | emailadres               |
+----+----------+------------+--------------------------+
|  1 | Jan      | Jansen     | jan.jansen@email.com     |
|  2 | Piet     | Pietersen  | piet.pietersen@email.com |
|  3 | Klaas    | Klaassen   | klaas.klaassen@email.com |
|  4 | Emma     | de Vries   | emma.devries@email.com   |
+----+----------+------------+--------------------------+
```

Voeg onderstaande records toe aan de tabel uitleengegevens:
```shell
+----+--------------+-------------+----------+---------+
| id | uitleendatum | retourdatum | klant_id | boek_id |
+----+--------------+-------------+----------+---------+
|  5 | 2023-01-01   | 2023-01-15  |        1 |       1 |
|  6 | 2023-01-02   | 2023-01-16  |        2 |       2 |
|  7 | 2023-01-03   | 2023-01-17  |        3 |       3 |
|  8 | 2023-12-29   | 2024-01-12  |        4 |       4 |
+----+--------------+-------------+----------+---------+
```

Maak nu het sql-script voor een database met 3 tabellen:
* Voor een autoverhuurbedrijf moet je een database maken
* De tabel auto's bevat gegevens over het merk, kenteken, kilometerstand en aankoopdatum
* De tabel huurders bevat gegevens zoals voornaam, achternaam, rijbewijsnummer, adres, postcode, plaats en geboortedatum.
* De tabel verhuur bevat gegevens over de auto, de datum van verhuur, de verwachte datum waarop de auto wordt ingeleverd en de huurder.
* Gebruik logische namen voor de naam van velden en denk om primaire en vreemde sleutels!
:::

::: section
### CRUD oefeningen
* Maak een nieuwe database aan met de naam 'reisbureau' en voer de queries uit van [dit sql-bestand](https://static.edutorial.nl/projecten/reisbureau_001.sql).
* Geef de query om alle tabellen in de database 'reisbureau' weer te gegeven
* Voeg 2 nieuwe klanten toe aan de tabel 'customers' (je mag de waarden zelf bedenken)
* Geef de query om de eerste 10 boekingen te verwijderen (reservations)
* De klant met id 13 is verhuist naar 'De van der veldensteeg 81' in 'Apeldoorn'. Pas het record aan en geef de query om het record weer te geven. Controleer of de gegevens correct zijn.
:::

::: section
### Tabellen combineren
Maak gebruik van de database `bibliotheek` die je bij het onderdeel 'Database maken' hebt gemaakt.  
Zorg ervoor dat de gegevens correct zijn toegevoegd.  
Maak de queries bij onderstaande vragen:
* Schrijf een query om alle klanten met hun voornaam, achternaam en emailadres te tonen.
* Schrijf een query om de titel, het jaar en de druk van alle boeken te tonen die na het jaar 2000 zijn gepubliceerd.
* Schrijf een query om de voornaam en achternaam van klanten te tonen die een boek hebben geleend in 2023.
* Schrijf een query om de titel van de boeken te tonen die momenteel zijn uitgeleend (retourdatum is nog niet bereikt).
* Schrijf een query om het aantal keren dat elk boek is uitgeleend te tonen, samen met de titel van het boek.
* Schrijf een query om het totale aantal boeken dat in 2022 is uitgeleend te tonen.
* Schrijf een query om de voornaam en achternaam van klanten te tonen die meer dan 3 boeken hebben uitgeleend.
* Schrijf een query om de gemiddelde uitleenperiode (verschil tussen uitleendatum en retourdatum) van alle boeken te berekenen.
* Schrijf een query om alle boeken die na de 3e druk zijn gepubliceerd te tonen.
* Schrijf een query om de klantgegevens van klanten die nog geen enkel boek hebben uitgeleend te tonen.
* Schrijf een query om de 5 meest uitgeleende boeken te tonen, inclusief hun titel en het aantal keer dat ze zijn uitgeleend.
* Schrijf een query om de naam en emailadres van klanten te tonen die een boek met de titel 'De Hobbit' hebben uitgeleend.
* Schrijf een query om de titel van de boeken en de totale uitleenperiode per boek te tonen (het totaal aantal dagen dat elk boek is uitgeleend).
* Schrijf een query om de klant(en) te tonen die het vaakst een boek hebben geleend, samen met het aantal keer dat ze iets hebben geleend.
* Schrijf een query om de titel van boeken te tonen die zowel in 2022 als in 2023 zijn uitgeleend.
:::