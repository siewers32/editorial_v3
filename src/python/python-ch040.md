---
title: Lists
date: 2022-04-06
---

# {{ course-title }}

{% video "hNvzvMwyCZA" %}


## {{ title }}
Lists, tuples en dictionaries bieden de mogelijkheid om een set van informatie op te slaan. Lists zijn bijvoorbeeld handig als je alle namen van files in een directory op wil slaan. Of je wilt de namen en adressen van medewerkers opslaan. Als het gaat om een set van waarden die met elkaar te maken hebben, dan kan een list uitkomst bieden.
Je kunt bijvoorbeeld de (eerste) letters van het alfabet opslaan in een list...
```python
my_list = ["A", "B", "C", "D", "E", "F"]
```
Je kunt een letter opzoeken op basis van de plek waar hij in de lijst staat. De letter "A" staat op de eerste plek. Bij een list begin je altijd te tellen vanaf 0. Je zou dus kunnen zeggen dat de letter "A" op de 0-de plek staat. Om de letter "A" te printen doe je dit...
```python
print(my_list[0])
```
Zo toon je het eerste element van de list my_list op het scherm.
```python
print(my_list[0])
A
print(my_list[2])
C
print(my_list[3])
D
```
Je kunt ook vanaf de andere kant van de list beginnen te tellen.
Bijvoorbeeld:
```python
print(my_list[-1])
F
print(my_list[-2])
E
```

## Elementen in een list aanpassen
Stel je hebt een lijst motoren en je wilt er 1 aanpassen
```python
motorcycles = ['honda', 'yamaha', 'suzuki'] 
print(motorcycles)

# honda wordt aangepast naar ducati
motorcycles[0] = 'ducati' 
print(motorcycles)
# output: ['ducati', 'yamaha', 'suzuki']
```

## Elementen toevoegen aan een list
De honda moet toch weer terugkomen in de lijst. We willen dus een extra element toevoegen. Dat doe je met de methode <code>append()</code>
```python
motorcycles.append('honda') 
print(motorcycles)
# output: ['ducati', 'yamaha', 'suzuki', 'honda']
```

## Elementen op een bepaalde plek toevoegen in een lijst
Een KTM ontbreekt nog, maar die willen we toevoegen na de ducati. Dit kun je doen met de methode <code>insert()</code>. Insert neemt 2 argumenten, namelijk de plek waar moet worden ingevoegd en de waarde.
```python
motorcycles.insert(0, 'ktm') 
print(motorcycles)
# output: ['ktm', 'ducati', 'yamaha', 'suzuki', 'honda']

motorcycles.insert(3, 'kawasaki') 
print(motorcycles)
# output: ['ktm', 'ducati', 'yamaha', 'kawasaki', 'suzuki', 'honda']

```

## Elementen weggooien
Dat kan natuurlijk ook..
```python
del motorcycles[3]
print(motorcycles)

# output: ['ktm', 'ducati', 'yamaha', 'suzuki', 'honda']
```

## List methoden
Eigenlijk heb je al gewerkt met list methoden. Je kunt door een methode te gebruiken gegevens toevoegen aan een list met <code>insert()</code> of <code>append()</code>. Er zijn nog meer mogelijkheden met lists. Een opsomming vind je op [w3schools python list methods](https://www.w3schools.com/python/python_ref_list.asp)

## Een list in een list
Lists kunnen zelf ook weer onderdeel uitmaken van een list. Stel dat je een list hebt met voertuigen:
```python
voertuigen = ["vliegtuig", "auto", "fiets"]
```
Je hebt nog een 2e list met dieren
```python
dieren = ["aap", "mier", "rat"]
```
En nu voegen we beide lists toe aan een nieuwe list
```python
allebei = [voertuigen, dieren]
```
Als je dan "mier" wilt printen dan moet je op zoek naar het 2e element in de 2e list. Aangezien we beginnen te tellen bij 0 wordt dat...
```python
print(allebei[1][1])
```
De aap is dan het eerste element in de 2e list <code>allebei[1][0]</code>  
Het vliegtuig is het eerste element in de 1e list <code>allebei[0][0]</code>  

We voegen nog een dictionary toe. In een dictionary hebben elementen een naam, bijvoorbeeld: 
```python
b = { "naam": "Benny", "fav_kleur": "groen" }
g = { "naam": "Gerard", "fav_kleur": "paars" }
allebei.append(b)
allebei.append(g)
print(allebei)
```
Als je nu de naam van de eerste dictionary wil printen, dan moet je dus zijn bij het 3e element in de list allebei. Van dat 3e element wil je de naam printen:
```python
print(allebei[2]["naam"])
```
  
 
