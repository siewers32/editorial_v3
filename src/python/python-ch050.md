---
title: Input functions
date: 2022-04-07
---

# {{ course-title }}


{% video "pDOpoHsTPLs" %}


## {{ title }}
Python is veelzijdig, je kunt er desktop-apps mee maken, websites, maar je kunt er ook interactieve programma's mee maken die draaien vanaf de command-line.
Om input van gebruikers te kunnen verwerken kun je gebruik maken van de gelijknamige functie <code>input()</code>

## User input is altijd van het type string
Wat je ook invult het resultaat is altijd een string.
Je kunt berekeningen maken met invoer via <code>input()</code>, maar dan moet je de ingevoerde gegevens omzetten naar een integer of een float.
```python
num = input("Geef me een nummertje tussen 0 en 10 \n")
print(num * 5)

Geef me een nummertje tussen 0 en 10
9
99999
```
## Typecasting
In plaats van de uitkomst van 9 * 5 wordt de variabele num als een string gezien en wordt zodanig 5 keer herhaald dus 99999. Om met input te kunnen rekenen moet de waarde gecast worden naar een ander type. Casting is het omzetten van string naar integer of van integer naar float. Casting lukt niet altijd. De letter "A" is geen getal, dus als je een letter naar een integer probeert te casten krijg je een ValueError. 
Hieronder de aangepaste code
```python
num = int(input("Geef me een nummertje tussen 0 en 10 \n"))
print(num * 5)

Geef me een nummertje tussen 0 en 10
9
45
```

Mogelijke conversies:
```python
a = "1"
num = int(a)
num = float(num)
print(num)

#output 1.0

a = "Tekstje"
a = tuple(a)
a = list(a)

a.reverse()
print(a)

#output
['e', 'j', 't', 's', 'k', 'e', 'T']

```


