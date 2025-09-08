---
title: PyPi
date: 2022-04-14
---

# {{ course-title }}

## {{ title }}

PyPi staat voor Python Package index. Het is de plek waar ontwikkelaars hun open source modules beschikbaar stellen voor anderen. Python heeft veel van zijn populariteit te danken aan de eigen developer gemeenschap en de wil om code te delen.
In dit onderdeel worden de volgende modules behandeld:
* PSUtil
* Netmiko

## PSUtil
PSUtil is een module waarmee je gegevens over processen en gegevens over het gebruik van resources zoals CPU, geheugen en netwerkverkeer kunt meten.


## Externe module
PSUtil is een externe module. Deze module moet je dus eerst installeren.
Dit doe je met <code>pip</code>...
````python
python -m pip install psutil

````

Stel je maakt een nieuw <code>main.py</code>-bestand, dan kun je gebruik maken van de module door deze te importeren...

````python
import psutil
print(psutil.cpu_times())
````

## Opdracht
Bekijk de [PSUtil documentatie](https://pypi.org/project/psutil/) en probeer uit te vogelen hoe je met
een python-script de IPv4 adressen opvraagt van alle netwerkinterfaces in je computer.

