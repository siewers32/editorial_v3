---
title: Tekstfuncties
date: 2022-04-04
---

# {{ course-title }}

## {{ title }}
Een function of methode is een actie die je kunt uitvoeren op een stukje data. Je kunt bijvoorbeeld in een stukje tekst automatisch alle woorden met een hoofdletter wil laten beginnen. Hiervoor gebruik je de methode title()

```python
stukje_tekst = "dit is een stukje tekst"
print(stukje_tekst.title())

# output: Dit Is Een Stukje Tekst
```
Je kunt ook alle letters hoofletters maken...
```python
print(stukje_tekst.upper())

# output: DIT IS EEN STUKJE TEKST
```
... of juist weer kleine letters....
```python 
print(stukje_tekst.lower())
# output: dit is een stukje tekst
```
## Variabelen en functies
Je kunt ook variabelen printen en aanpassen.
```python
fname = "ariane"
lname= "grande"
fullname = f"{fname} {lname}"
print(fullname.title())

# output: Ariane Grande
```
De letter f bij fullname staat voor format.  Met format kun je variabelen en tekst door elkaar gebruiken. Aan <code>fullname</code> wordt nu de string "ariane grande" toegekend. Door de title-methode krijgen alle woorden een hoofdletter aan het begin.

## Gedoe met aanhalingstekens
Aanhalingstekens heb je in 2 smaken <code>'</code> en <code>"</code>. Je gebruikt ze vaak in teksten, maar ze worden ook gebruikt om aan python aan te geeven dat een string ergens begint of eindigt.
```python
# Dit kan wel...
kroegnaam = "The World's Best Place to Be"
print(kroegnaam)

# Maar dit kan niet....
kroegnaam = 'The World's Best Place to Be'
print(kroegnaam)
```
Je kunt best gebruik maken van aanhalingstekens in een string, maar gebruik dan niet dezelfde aanhalingstekens om een string te beginnen en te eindigen.
Soms ontkom je er niet aan. Je kunt dan een \ voor een speciaal karakter (bijv. een aanhalingsteken) zetten...
```python
# Zo kan het ook....
kroegnaam = 'The World\'s Best Place to Be'
print(kroegnaam)
```
Een zogenaamd escape-karakter \ heeft dus een speciale functie in python. Je kunt een escape-karakter ook printen...
```python
# Zo kan het ook....
# locatie = "C:\python\mapje wordt dan"
locatie = "C:\\python\\mapje"
print(locatie)

#output C:\python\mapje
```
Door een escape-karakter \ voor een karakter met een speciale betekenis te zetten, acteert het weer als een gewoon karakter.

In teksten heb je ook te maken met karakters die je niet kunt zien! Denk aan een karakter om naar de volgende regel te gaan of een tab. In python kun je deze karakters wel gebruiken. Een volgende-regel of next-line charakter is een <code>\n</code>. Een tab wordt aangeduid met een <code>\t</code>.

```python
eerste = "Deze tekst staat op de eerste regel"
tweede = "Deze tekst staat op de tweede regel"
print(f"{eerste}\n{tweede}")

#output
Deze tekst staat op de eerste regel
Deze tekst staat op de tweede regel
```

## Berekeningen met tekst
Met teksten kun je natuurlijk niet echt rekenen, maar python neemt berekeningen wel serieus. Bekijk onderstaande code maar eens:
```python
mijn_tekst = "***"
print(mijn_tekst * 2)

#output is twee keer zoveel sterren!!
******
```
```python
mijn_tekst = "***"
print(mijn_tekst + mijn_tekst)

#output is twee keer zoveel sterren!!
******
```
Je kunt niet alle bewerkingstekens gebruiken. Je kunt tekst niet delen en teksten van elkaar aftrekken werkt ook niet.

## Opdrachten
De opdrachten bij dit hoofdstuk vind je op [github](https://github.com/DeltionICT/python_basis/tree/main/opdrachten/tekstfuncties)