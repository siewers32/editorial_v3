---
title: Functions
date: 2022-04-12
---

# {{ course-title }}

## {{ title }}
Met functies kun je stukken code schrijven die je vaker nodig hebt. In plaats van iedere keer dezelfde code in te typen, kun je een functie *definiëren* en *aanroepen* op het moment dat je de code nodig hebt.
Hieronder een voorbeeld van een simpele functie
```python
# functie definiëren
def groet_gebruiker():
    print("Hallo beste gebruiker, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker()

# output
Hallo beste gebruiker, leuk dat je er bent
```
Met 'def' geef je aan dat je een functie wil definiëren. De code die ingesprongen is, hoort bij de functie. Iedere keer als de functie groet_gebruiker() wordt aangeroepen, zoals in de regels onder de functie, wordt die code uitgevoerd. 

## Informatie doorgeven aan een functie
Natuurlijk is bovenstaand voorbeeld nog niet zo nuttig. Maar stel je voor dat je iedere gebruiker die inlogt wil begroeten met een persoonlijke groet. Dat kan met onderstaande functie...
```python
def groet_gebruiker(naam):
    print(f"Hallo beste {naam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
Hallo beste Kees, leuk dat je er bent
```

## Positional arguments
Bovenstaande functie groet_gebruiker(naam) accepteert 1 argument. Je kunt meerdere argumenten meegeven aan een functie. We kunnen de functie uitbreiden met een voornaam en een achternaam. Python weet niets van voornamen en achternamen, dus je kunt de voor- en achternaam met elkaar verwisselen als je ze in de verkeerde volgorde doorgeeft.
De positie van de argumenten is dus bepalend.

```python
def groet_gebruiker(voornaam, achternaam):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('van der Broek', 'Kees')

# output
Hallo beste van der Broek Kees, leuk dat je er bent
```

## Named arguments
Je kunt python ook forceren om te letten op de namen van de variabelen, zodat je zeker weet dat alles in de juiste volgorde wordt geprint.
```python
def groet_gebruiker(voornaam, achternaam):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker(achternaam='van der Broek', voornaam='Kees')

# output
Hallo beste Kees van der Broek, leuk dat je er bent
```

## Default waarden invullen
Als een functie 2 argumenten accepteert, maar je weet er maar 1 dan kun je het 2e argument een default waarde aan laten nemen....
```python
def groet_gebruiker(voornaam, achternaam=""):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
Hallo beste Kees , leuk dat je er bent
```
De achternaam blijft leeg, omdat dat de default waarde is. Er blijft wel een spatie staan, dat komt omdat tussen voornaam en achternaam een spatie staat.
Zonder default waarde voor achternaam, kun je niet een argument weglaten. Als je dat doet krijg je een foutmelding...
```python
def groet_gebruiker(voornaam, achternaam=):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
TypeError: groet_gebruiker() missing 1 required positional argument: 'achternaam'
```

## Return waarde
Een functie kan in plaats van iets te printen ook een waarde teruggeven. Als we bovenstaande functie ombouwen met een return-waarde dan ziet dat er zo uit.
```python
def groet_gebruiker(voornaam, achternaam=):
    return f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent"

# functie aanroepen
datum = "Het is vandaag 27 januari."   
groet =  groet_gebruiker('Kees', 'Jansen')
print(f"{datum} {groet}")

# output
Het is vandaag 27 januari. Hallo beste Kees Jansen, leuk dat je er bent
```
Je ziet dat je nu de return-waarde van de functie ergens in je programma kunt hergebruiken.
