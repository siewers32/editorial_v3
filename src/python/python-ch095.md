---
title: Modules
date: 2022-04-13
---

# {{ course-title }}

## {{ title }}
Naarmate je code complex wordt, ga je steeds meer code onderbrengen in functies. Hierdoor blijft je code overzichtelijk. Als je logische namen voor functies en variabelen gebruikt houdt je veel meer overzicht over de structuur van je programma.  
Naarmate het aantal functies groeit kun je ook overwegen om functies in aparte bestanden onder te brengen. Dit soort bestanden noem je modules.  

Een voorbeeld:  
Stel je krijgt een .csv bestand met namen van gebruikers die je netjes uit moet printen.
Het .csv bestand is een soort tekstbestand dat is geëxporteert uit Excel. 
In ons geval bevatten de rijen een voornaam, een tussenvoegsel en een achternaam.
Dit is het .csv bestand...  
```python
Jan,van der,vliet, zandlaan 13, 4930 FJ, Harsen
Kees,,Marijnissen, Perenboomweg 21, 3999 GG, Plaaggeest
GRIET,van der,Pol, Harlekijnplein 33, 4952 DN, Den haag
Tara,,weeslanden, Kreakenmolenweg 3, 3900 DG, Muizegat
clarijn,,Ommezwaai, Melemoor 20, 4992 DS, Haperen
Piet,De,Vries, Stelsprong 10, 4930 DF, Harsen
Jan jaap,,Siewers, De kaapstander 20, 8251 LH, Dronten
```
Je ziet dat de namen soms met hoofdletters beginnen, maar soms ook weer niet.
We hebben de taak om de namen netjes af te drukken op het scherm. Onderaan de lijst moet het aantal personen worden weergegeven.  
Dit doen we in een aantal stappen:
* Open het .csv-bestand in read modus
* Lees alle regels uit het .csv bestand en tel de regels
* Zet alle letters in een regel om naar kleine letters
* Breek iedere regel op in een voornaam, tussenvoegsel, achternaam, adres, postcode en plaats
* Zorg ervoor dat voornaam en achternaam beginnen met een hoofdletter
* Voeg een veld volledige_naam toe die is opgebouwd uit voornaam, tussenvoegsel en achternaam
* Print de volledige naam van alle personen op het scherm
* Print het aantal personen op het scherm

## Functies gebruiken
Dat zijn heel wat taken om in 1 script uit te voeren!  
Laten we de code opbreken in functies:
```python
def sanitize(line):
    # haal alle dubbele spaties en hoofdletters eruit
    pass

def create_person(lst):
    # zet de gegevens om in een dictionary

def add_fullname(person):
    # stel voor- en achternaam samen tot een volledige naam
    pass
    
def print_persons(persons, filter=["full_name"]):
    # print de van alle personen de volledige naam en het totaal aantal personen
    pass
```
Als je de functies zo bekijkt, kun je al heel goed zien wat het programma gaat doen.
Hieronder de implementatie van de functies.
1. Haal alle dubbele spaties en hoofdletters eruit
 ```python
def sanitize(line):
    # kleine letters maken en spaties voor en na het woord weghalen
    new_lst = []
    lst = line.split(',')
    for item in lst:
        new_lst.append(item.lower().strip())
    return new_lst
 ```

2. Converteer naar een dictionary zodat we toegang hebben tot de verschillende elementen van de naam:
```python
def create_person(lst):
    person = {"voornaam": "", "tussenvoegsel": "", "achternaam": ""}
    person["voornaam"] = lst[0]
    person["tussenvoegsel"] = lst[1]
    person["achternaam"] = lst[2]
    return person
```

3. Voeg de volledige naam toe aan de person dictionary:
```python
def add_fullname(person):
    if person["tussenvoegsel"] == "":
        person['full_name'] = f"{person['voornaam'].title()} {person['achternaam'].title()}"
    else:
        person['full_name'] = f"{person['voornaam'].title()} {person['tussenvoegsel']} {person['achternaam'].title()}"
    return person
```
4. Print volledige naam en aantal personen
```python
def print_persons(persons, filter=["full_name"]):
    counter = 0
    for person in persons:
        counter += 1
        for attr in filter:
            print(person[attr].title(), end=" ")
        print(end="\n")
    print(f"Er zijn in totaal {counter} personen")
```
Bovenstaande functies beslaan de totale functionaliteit van het programma. 
Het basis programma bestaat uit volgende functie-aanroepen

```python
persons = []
for line in open("test.csv", 'rt'):
    lst = sanitize(line)
    person = create_person(lst)
    person = add_fullname(person)
    persons.append(person)

print_persons(persons)
```

Dat is best veel code voor het uitprinten van een paar namen. Maar in het ontwerp is al een beetje nagedacht over toekomstige aanpassingen. Zou het niet handig zijn als je kunt aangeven welke gegevens je van personen wilt uitprinten. Misschien willen we later ook kunnen filteren op naam. Door de functies voor deze opdracht in een module onder te brengen kunnen we ze makkelijk hergebruiken en maken ze het uiteindelijke programma veel overzichtelijker.

Het idee is om nu 2 bestanden aan te maken. Het programma zelf en een module met de functies. Belangrijk is de locatie van de bestanden ten opzicht van elkaar. Als je een module maakt in dezelfde map als het programma, dan kun je de module importeren in het programma...
```python
# stel je hebt je file csv_module.py genoemd dan werkt dat zo...
import csv_module

```
Deze manier van werken is al een beetje riskant, omdat je met python ook modules van anderen kunt importeren. Sterker nog standaard wordt Python met meerdere standaard modules geïnstalleerd. De kans dat er al een module bestaat die 'csv' heet is heel aannemelijk. Sterker nog, die bestaat ook!
Probeer maar eens vanaf de commandline:
```python
python
>>>import csv
>>>dir(csv)
['Dialect', 'DictReader', 'DictWriter', 'Error', 'QUOTE_ALL', 'QUOTE_MINIMAL', 
'QUOTE_NONE', 'QUOTE_NONNUMERIC', 'Sniffer', 'StringIO', '_Dialect', '__all__','__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', 
'__package__', '__spec__', '__version__', 'excel', 'excel_tab', 'field_size_limit', 
'get_dialect', 'list_dialects', 're', 'reader', 'register_dialect', 'unix_dialect',
'unregister_dialect', 'writer']
```
Met dir kun je opvragen welke eigenschappen en functies beschikbaar zijn in een module!

Als je verwacht dat je nog veel meer functies gaat maken die te maken hebben met het manipuleren van csv bestanden, dan kun je ook een map maken waarin je meerdere modules bewaard.
Stel je noemt je programma 'main.py' en je hebt een map 'my_modules' met daarin een bestanden met csv-functies. Dit is dan je mappen-structuur
```python
programma
 |-- main.py
 |-- my_modules
        |-- csv.py
        |-- extra.py
```
In 'main.py' importeer je dan je module met...
```python
from modules import csv

```
Het voordeel is nu dat je de zelfgemaakte module gewoon 'csv' kunt noemen. Het werkt net als met bestanden. Er zijn veel bestanden die 'help.txt' heten, maar doordat bestanden in verschillende mappen staan kun je ze toch naast elkaar gebruiken. Je kunt niet 2 bestanden met dezelfde naam in een map bewaren!

## Opdracht
* Maak de module csv en plaats die in een map in je project
* Plaats de functies uit dit hoofdstuk in de module
* Maak het csv-bestand zoals hierboven is aangegeven
* Laadt de module in een python-bestand en zorg dat je de functies kunt gebruiken om de lijst met personen weer te geven.
* Voeg een functie do_filter() toe aan de module waarmee je kunt filteren op voornaam of achternaam!
* Test het filter met <code>do_filter("achternaam", "V")</code>. Output is dan:
> Jan van der Vliet  
> Piet de Vries

<code>do_filter("plaats", "d")</code>

> Griet van der Pol  
> Jan Jaap Siewers