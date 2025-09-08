---
title: Condities
date: 2022-04-09
---

# {{ course-title }}

## {{ title }}
Op basis van condities kun je beslissen wat je programma moet doen in een bepaalde situatie. Stel je wil weten of een bepaalde waarde voorkomt in een list. Dan kan je dat zo doen....
```python
autos = ['audi', 'bmw', 'subaru', 'toyota']
for auto in autos:
    if auto == "bmw":
        print("yep, er zit een bmw bij!")
```
In bovenstaande code zie je het if-statement weer zijn eigen code-block heeft. Je ziet het if-commando - een conditie die wel of niet waar kan zijn - en een <code>:</code>
Daarna zie je de ingesprongen tekst <codeprint("yep, er zit een bmw bij!")</code>. Dit stukje code wordt alleen uitgevoerd als de conditie <code>auto == "bmw"</code> waar is (True).

De dubbele <code>==</code>-tekens staan voor: 'gelijk aan'.
```python
# x krijgt de waarde 10 toegewezen
x = 10 

# x wordt vergeleken met 10
x == 10

# Als x gelijk is aan 10 dan is x == 10 gelijk aan True
print(x == 10)

# output
True
```
Vergelijken is dus iets anders dan toekennen waarbij je een waarde in een variabele stopt. Op [w3schools](https://www.w3schools.com/python/gloss_python_comparison_operators.asp) vind je een heel overzicht van vergelijkings-operatoren. Dit is er ook een van:

```python
x = 9
print(x != 10)

# output
True
```

## AND en OF
Je kunt meerdere vergelijkingen maken in 1 regel...  
Met <code>and</code> moeten beide vergelijkingen <code>True</code> zijn
```python
x = 9
print(x != 10 and x == 10)
# output
False
```
Met <code>or</code> moet een van de vergelijkingen <code>True</code> zijn

```python
print(x != 10 or x == 10)
#output
True
```

Controleren of een element voorkomt in een list..
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'audi' in lst:
    print('audi is in the list')
```
of juist niet...
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'mercedes' not in lst:
    print('mercedes is niet in list')
```

## if-else statements
Je kunt ook de uitkomst van een conditie koppelen aan code die wordt uitgevoerd als de uitkomst <code>True</code> is en weer ander code als de uitkomst juist <code>False</code> is....
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'mercedes' in lst:
    print('Mercedes is wel in de list')
else:
    print('Mercedes is niet in de list')
```
En nog veelzijdiger wordt het als je ook nog verschillende condities kunt testen....
```python
clubs = ['PEC Zwolle', 'Ajax', 'Feijenoord', 'AZ', 'FC Knudde']

for club in clubs:
    if club[0] == 'A':
        print(f"{club} begint met de letter A")
    elif club[0] == 'F':
        print(f"{club} begint met de letter F")
    else:
        print(f"De eerste letter van {club} begint niet met een A of F")

```
Zoals je ziet kun je met de rechte haken ook in een string refereren naar de plek waar een karakter zich bevindt. Je kunt ook teksten slicen met <code>[:]</code>!