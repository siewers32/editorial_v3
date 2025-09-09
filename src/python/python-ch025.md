---
title: Werkwijze
date: 2022-04-03
---

# {{ course-title }}

## {{ title }}


{% video "bJQXeNb_xAw" %}

* Bekijk de video. Hierin wordt stap voor stap uitgelegd hoe je Python en de Pycharm editor moet installeren.
* [Een stappenplan waarin wordt uitgelegd hoe je python kunt installeren vind je hier](https://phoenixnap.com/kb/how-to-install-git-windows)

## De Pycharm editor installeren
In deze cursus maken we gebruik van de producten van Jetbrains. Er zijn twee versies beschikbaar van de editor PyCharm. De community-version van PyCharm is gratis, maar mist een aantal functies (maar is prima geschikt voor deze cursus!). De commerciële versie van PyCharm is gratis beschikbaar voor studenten. Met je schoolmail kun je die versie downloaden en installeren. 

#### Installatie
* In de video wordt uitgelegd hoe en wat je moet installeren om met Pycharm aan de slag te gaan. Je leert tevens hoe je een virtuele omgeving maakt om in te werken.
* [Hier vind je een stappenplan om Pycharm te installeren](https://www.jetbrains.com/help/pycharm/installation-guide.html)
* Meestal maak je een virtuele omgeving (=geen virtuele machine). [Lees hier waarom dit handig is en hoe je een virtuele omgeving in Pycharm maakt](https://tms-outsource.com/blog/posts/how-to-create-virtual-environment-in-pycharm/)


Kijk of alles goed werkt....
> ### Opdracht 1.1
> Check of python is geïnstalleerd op je computer  
> Start een terminal op en type "python --version"  

```python
(venv) janjaap@iMac-Pro-van-Jan pythoncisco % python --version
Python 3.9.2
```

> ### Opdracht 1.2
> Schrijf je eerste script, laat met behulp van de functie print "Hello World" op het scherm zien!
> Open de commandline en type python  
> Type vervolgens de code print("Hello World")

``` python
(venv) janjaap@iMac-Pro-van-Jan pythoncisco % python
Python 3.9.2 (v3.9.2:1a79785e3e, Feb 19 2021, 09:06:10) 
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello World")
Hello World
>>> 
```
Bovenstaand voorbeeld is op een mac gemaakt. Op windows zal je soortgelijke informatie zien, maar dan afgeleid van jouw naam en systeem.

## Git
Om je opdrachten op te slaan en versiebeheer toe te kunnen passen heb je Git nodig. Git is een soort OneDrive voor programmeurs. 

{% video "zfzxrley6nU" %}

* In de video wordt uitgelegd hoe je git kunt installeren. 
* Deze video maakt onderdeel van een [lijst met video's](https://www.youtube.com/watch?v=zfzxrley6nU&list=PLBtXOV0WuE_GRm9onlLXE2QPhWB96poCS). In de overige video's wordt uitgelegd hoe git werkt en wat je er verder mee kan. Zie ook [de cursus versiebeheer met Git](https://www.edutorial.nl/git/introductie/) om er meer over te leren.

> ### Opdracht 2
> 1. Fork de [repository met opdrachten](https://github.com/DeltionICT/python_basis_opdrachten) naar je eigen github-omgeving
> 2. Clone de repository vanuit je eigen github-omgeving naar je lokale computer.
> 3. Maak de opdrachten die bij de verschillende hoofdstukken horen en commit en push het resultaat weer terug naar je github-omgeving.
> 4. Als je alle opdrachten hebt afgerond stuur je een pull-request. (hoe dit moet, wordt later in de cursus uitgelegd.)


* Clone de opdrachten op [Deltion Github](https://github.com/DeltionICT/python_basis_opdrachten?tab=readme-ov-file)
    * Door te `git clone` te gebruiken maak je een kopie van de repository op github
* Voeg `siewers32` toe als collaborator
    * Zo kan ik meekijken met je inleveropdrachten
* Iedere opdracht bestaat uit een `.md` bestand met daarin uitleg over de opdracht
* Meestal is er een `.py` bestand toegevoegd, hierin vind je al een stukje code om je op weg te helpen.
* Maak een nieuw bestand of pas het `.py`-bestand aan zodat de uitvoer klopt met de opdracht!
* Gebruik na iedere opdracht `git add .` en `git commit -m "met jouw commentaar"`.
* Gebruik vervolgens `git push origin master` om je code op github te zetten.

## Planning en beoordeling
* De planning en beoordeling staan op Teams!
* Als je verder wilt met andere opdrachten, omdat je al klaar bent of je verder wilt verdiepen kijk dan naar de opdrachten op [Lucy](https://deltionict.github.io/lucy/subjects/python/introductie/)




