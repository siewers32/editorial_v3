---
title: Foutafhandeling
date: 2022-04-11
---

# {{ course-title }}

## {{ title }}
Om er voor te zorgen dat gebruikers niet met foutmeldingen worden geconfronteerd en applicaties niet instorten als een gebruiker iets verkeerd doet, is het belangrijk dat fouten worden afgevangen.

Bij applicaties waarbij om invoer wordt gevraagd kan niet van tevoren worden voorspeld wat een gebruiker gaat invoeren. Alles is mogelijk, maar een applicatie kan niet altijd met de invoer van een gebruiker overweg....

```python
prompt = "Geef een getal tussen 1 en 10\n"
getal = int(input(prompt))
print(10 + getal)
```
Als de gebruiker nu <code>sdfdsf</code> invult wordt onderstaande error getoond:
```python
ValueError: invalid literal for int() with base 10: 'sdfdsf'
(venv) janjaap@iMac-Pro-van-Jan pythoncisco % 
```
Python probeert de input om te zetten naar een <code>int</code>, maar dat lukt niet met <code>sdfs</code>.
Het programma wordt onderbroken.

Om te voorkomen dat de programma abrupt stopt nadat er een fout optreedt, kan de code eerst getest worden en kan de developer bepalen wat het programma moet doen bij een fout.
```python
try:
    prompt = "Geef een getal tussen 1 en 10\n"
    getal = int(input(prompt))
    print(10 + getal)
except:
    print('Oeps, er ging iets mis')
```
Door het try/except block wordt de code getest en als er iets fout gaat wordt de regel 'Oeps er ging iets mis' getoond. Nog niet geweldig, maar beter dan een lelijke foutmelding.
Het programma wordt uitgebreid met een while-lus, zodat de gebruiker net zo lang invoer kan geven totdat het programma een waarde krijgt waarmee de berekening kan worden uitgevoerd....
```python
doorgaan = True
while doorgaan:
    try:
        prompt = "Geef een getal tussen 1 en 10\n"
        getal = int(input(prompt))
        print(10 + getal)
        doorgaan = False
    except:
        print('Geef een getal anders kan het programma geen berekening uitvoeren!')
```
Hieronder de output van het programma....  
```python
Geef een getal tussen 1 en 10
bla
Geef een getal anders kan het programma geen berekening uitvoeren!
Geef een getal tussen 1 en 10
3
13
```
Het programma kan nog robuuster worden gemaakt. De gebruiker moet een getal tussen 1 en 10 geven. Python kan wel controleren of de invoer van het juiste type is, maar de programmeur bepaalt of een getal zich binnen de gewenste range bevindt. Als er een getal hoger dan 10 en lager dan 1 wordt gegeven kan je zelf een error programmeren...
```python
doorgaan = True
while doorgaan:
    try:
        prompt = "Geef een getal tussen 1 en 10\n"
        getal = int(input(prompt))
        if getal > 10 or getal < 0:
            raise Exception
        else:
            print(10 + getal)
            doorgaan = False
    except ValueError:
        print('Geef een getal anders kan het programma geen berekening uitvoeren!')
    except:
        print("Alleen getallen tussen 1 en 10 zijn geldig!")
```
Nu is het vrijwel onmogelijk om het programma nog over zijn toeren te krijgen. Alle input die niet geldig is wordt afgevangen en er wordt een passende melding gegeven. Het programma draait net zo lang door tot de gewenste input is gegeven.