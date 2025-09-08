---
title: Loops en lists
date: 2022-04-08
---

# {{ course-title }}

## {{ title }}
Vaak komt het voor dat je een bewerking wilt uitvoeren op alle elementen in een list. Als je een list print, dan zie je ook de haken van de list en komma's tussen de elementen. Stel dat je alle elementen gewoon onder elkaar wilt printen, hoe gaat dat?
```python
tovenaars = ['tita', 'merlin', 'hans klok']
print(tovenaars)

# output
['tita', 'merlin', 'hans klok']
```
Hieronder worden de tovenaars 1 voor 1 in een loop getoond op het scherm. 

```python
for tovenaar in tovenaars:
    print(tovenaar)
 
#output
tita
merlin
hans klok
```
In de regel <code>for tovenaar in tovenaars</code> wordt voor alle tovenaars 1 voor 1 een waarde aan de variabele tovenaar toegekend. Je noemt dit een 'loop' omdat deze actie net zo lang wordt herhaald totdat alle elementen in tovenaars een keer aan de beurt zijn geweest.
* De eerste keer wordt de waarde 'tita' toegekend aan de variabele tovenaar.  
* De waarde van tovenaar wordt geprint
* De volgende waarde uit tovenaars wordt opgehaald en opnieuw wordt er geprint
* Dit proces wordt herhaald totdat alle elementen uit de list aan de beurt zijn geweest.
* 
Je ziet dat de regel <code>print(tovenaar)</code> iets van de kant af staat. Deze regel is ingesprongen. In Python betekent dit dat de print-opdracht is ingebed in de for-loop. Hier moet je goed op letten, want Python is streng. Als je slordig omgaat met inspringingen dan krijg je foutmeldingen.

```python
counter = 0
for tovenaar in tovenaars:
    counter += 1
    # Dit is hetzelfde als counter = counter + 1
    # counter wordt dus steeds 1 meer in de loop

    print(tovenaar.title())
    print(f"{ tovenaar.title() } is tovenaar { counter }")
    # Je kunt meerdere opdrachten uitvoeren in een loop!
print("Zo, dat was het")
```
Zoals je ziet wordt alle code die is ingesprongen herhaald in de for-loop. Als laatste wordt nog "Zo, dat was het" getoond. Dit is niet ingesprongen. Het valt buiten de loop en wordt na de loop maar 1 keer uitgevoerd. De <code>:</code> in de eerste regel can de for-loop en de inspringing bepalen waar de code in de loop begint en waar die eindigt.

## Code herhalen zonder list
Je kunt ook zelf definiëren hoe vaak een loop moet worden gebruikt. Hieronder een voorbeeld:
```python
for v in range(1, 3):
    print(v)

#output
1
2
```
Met <code>range()</code> kun je aangeven hoe vaak de code in de for-loop moet worden herhaald. De variabele v krijgt steeds de eerstvolgende waarde uit de range.
Je ziet dat de loop maar 2x wordt uitgevoerd. De eerste waarde in range wordt getoond, maar de laatste niet!  

Je kunt ook nummers overslaan in een range...
```python
for v in range(2, 8, 2):
    print(v)

#output
2
4
6
```
Het derde argument in de functie <code>range()</code> bepaalt hoeveel er wordt opgeteld bij huidig getal.
De eerste keer wordt 2 weergegeven. Bij 2 wordt 2 opgeteld, dus wordt 4 weergegeven etc. etc.
Het laatste getal 8 wordt niet meer weergegeven!

## Berekeningen in een loop
Je kunt de variabele <code>v</code> gebruiken om berekeningen mee uit te voeren. Onderstaand voorbeeld laat zien hoe je iedere v kunt vermenigvuldigen met zichzelf (kwadraat). Het resultaat wordt toegevoegd aan een list!

```python
# Een lege list maken
lst = []

for v in range(2, 8, 2):
    # kwadraat van zichzelf
    lst.append(v ** 2)

print(lst)
    
#output
[4, 16, 36]
```

## List comprehensions
Bovenstaand voorbeeld kun je ook nog korter weergeven. Python heeft hiervoor de list comprehension. Je kunt tussen de rechte haken van een list een klein stukje code opnemen waarmee je de list genereert...
```python
kwadraten = [v ** 2 for v in range(2, 8, 2)]
print(kwadraten)

#output
[4, 16, 36]
```

## Lists to copy or not to copy
Bekijk onderstaande code...
```python
a =[1, 2, 3]
b = a
b[2] = 4
print(a)

#output
[1, 2, 4]
```
Wat gebeurt hier? Er wordt een lijst <code>a</code> gemaakt. <code>b</code> wordt gelijk aan <code>a</code>. <code>b</code> wordt veranderd, maar uit de print-opdracht blijkt dat <code>a</code> ook is veranderd!
De opdracht <code>b = a</code> levert alleen een verwijzing op in plaats van een kopie. <code>a</code> en <code>b</code> verwijzen beide naar dezelfde list!

## Lists slicen
We herhalen het bovenstaande nog een keer maar met 1 klein verschil..
```python
a =[1, 2, 3]
b = a[:]
b[2] = 4
print(a)

#output
[1, 2, 3]
```
Door de toevoeging van <code>[:]</code> wordt er wel een echte kopie gemaakt van <code>a</code>!
Met de <code>[:]</code>-syntax kun je met een gedeelte van een list een nieuwe list maken. Met <code>[:]</code> geef je aan dat je van alle elementen in een bestaande list een nieuwe list wilt maken.  
Als je alle elementen vanaf het 1e element in de list wil hebben dan doe je dat zo...
```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[1:]
print(nw_list)

#output
[2, 3, 4]
```
Alle elementen tot aan list-element 4...
```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[:3]
print(nw_list)

#output
[1, 2, 3]
```
Alle elementen vanaf 1 tot 4

```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[1:3]
print(nw_list)

#output
[2, 3]
```