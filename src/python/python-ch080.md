---
title: Werken met tekst
date: 2022-04-10
---

# {{ course-title }}

## {{ title }}
We hebben eerder gezien dat je code kunt herhalen in een for-loop. Een while-loop doet in principe precies hetzelfde, maar er zijn situaties waarbij een while-loop een betere oplossing is dan een for-loop.
Een van die situaties is bij applicaties waar user-input wordt gevraagd.  
Bekijk onderstaande code eens..

```python
prompt = "Vertel me iets dan geef ik terug wat je invoerde! \n" \
         "Vul 'q' in om het programma te eindigen. \n"

active = True
while active:
    message = input(prompt)
    if message == 'q':
        active = False
    else:
        print(message)
```
In gewoon nederlands:  
Zolang de variabele <code>active</code> gelijk is aan <code>True</code> gaan we het volgende doen:  
* Er wordt gechecked of de gebruiker de letter 'q' heeft ingegvoerd.
* Als dat zo is wordt <code>active</code> op False gezet. Het programma wordt dan gestopt.
* Als dan niet zo is dan wordt hetgeen de gebruiker heeft ingevoerd op het scherm getoond.

Bij een while-loop wordt de code dus net zo lang herhaald totdat de conditie achter <code>while</code>-loop <code>False</code>is. Dan stopt de while loop.

Als het programma stopt, dan gaat alle gebruikers-input verloren. In het volgende stukje code zie je hoe je die gebruikersinput op kan slaan in een tekst-bestand:

```python
prompt = "Vertel me iets dan geef ik terug wat je invoerde! \n" \
         "Vul 'q' in om het programma te eindigen. \n"

active = True
lst = []
while active:
    message = input(prompt)
    if message == 'q':
        active = False
        fo = open('newtext.txt', 'wt')
        for i in lst:
            fo.write(i + "\n")
        fo.close()
    else:
        lst.append(message)
```
Er wordt een lege list toegevoegd aan de code <code>lst</code>  
Alle gebruikersinput wordt toegevoegd aan de list <code>lst</code>.
Als er op <code>q</code> wordt gedrukt wordt er....
* Een nieuw tekstbestand aangemaakt met de naam <code>newtext.txt</code>
* Alle elementen in <code>lst</code> worden in een for-loop naar het text-bestand geschreven

## Werken met tekstbestanden
```python
fo = open('newtext.txt', 'wt')
```
<code>fo</code> is een zogenaamde 'handle' naar het tekstbestand <code>newtext.txt</code>. De methode <code>open</code> accepteert 2 argumenten. De naam van het bestand en wat je met dat bestande gaat doen. De optie <code>wt</code> staat voor 'write text'. Python gaat anders om met textbestanden dan met binaire bestanden zoals afbeeldingen e.d. De functie write betekent dat het tekstbestand wordt aangemaakt als het nog niet bestaat, maar als het wel bestaat, dan wordt het overschreven. 
Als je informatie toe wilt voegen aan een bestaand bestand, dan gebruik je de optie <code>at</code>. Dit staat voor 'append' zodat je meer tekst toe kan voegen.
Je kunt ook teksten uit bestanden lezen. Dan geef je de optie <code>rt</code>

## Charactersets
Voor de computer zijn letters eigenlijk gewoon nummers. Een karakter wordt omgezet naar nullen en enen in een byte. Byte betekent letterlijk by eight. Dus er zijn 8 nullen en enen beschikbaar om een karakter op te slaan. Met 8 nullen en enen kun je 2<sup>8</sup> = 256 verschillende tekens maken. De letter 'a' wordt opgeslagen onder code 97, letter 'b' wordt dan 98 en 'c' dus 99 enzovoort. De hoofdletter 'A' wordt opgeslagen als code '65'. Python werkt onder de motorkap ook met deze codes. Je kunt deze codes opzoeken in de [ASCII](https://nl.wikipedia.org/wiki/ASCII_(tekenset)#Standaard-ASCII) lijst. 
Kijk maar eens naar de sortering van deze list:
```python
letters = ['a', 'A', 'B', 'b']
letters.sort()
print(letters)

#output
['A', 'B', 'a', 'b']
```
De hoofdletters komen voor de kleine letters, omdat die een lagere code hebben in de ASCII lijst.
Je kunt de codering voor karakters opzoeken met python...
```python
print(ord('a'))
#output
97

print(chr(97))
#output
a
```


## Uit een loop breken
Stel je hebt dit programma....
```python
prompt = "Geef me de naam van een voetbalclub \n" \
          "(vul een 'q' in om te stoppen) \n"
while True:
      vc = input(prompt)

      if vc == 'q':
            break
      else:
            print(f"De voetbalclub {vc} is helemaal baas!")
```
Zolang while True is wordt de code herhaald. Daar komt dus nooit een einde aan. In de vorige voorbeelden hadden we nog de variabele 'active' gebruikt om de while-loop te stoppen. In dit geval stoppen we de loop met het commando <code>break</code>

## Teruggaan naar het begin van de loop
Met het commando <code>continue</code> kun je de rest van de code in een loop overslaan en direct terug gaan naar het begin van de loop.
Stel je hebt onderstaande code...
```python
num = 0
while num < 10:
      num += 1
      if num % 2 == 0:
            continue
      print(num)
```
Deze loop gaat net zo lang door totdat de variabele <code>num</code> niet meer kleiner is dan 10. In het if-statement wordt bekeken of <code>num</code> deelbaar is door 2. Als dat zo is wordt <code>num</code> niet op het scherm getoond omdat <code>continue</code> er voor zorgt dat de code wordt afgebroken en het programma weer terug gaat naar het begin van de loop. De print-opdracht aan het einde van het programma wordt dus overgeslagen!