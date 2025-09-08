---
title: Berekeningen
date: 2022-04-05
---

# {{ course-title }}

{% video "Gke1mGBNIRc" %}

## {{ title }}
Zoals veel andere script- en programmeertalen kun je in python verbluffend goed rekenen. Je kunt natuurlijk optellen, aftrekken, vermenigvuldigen en delen maar er zijn nog een aantal bewerkingen die handig zijn zoals de modulus, machtsverheffen.
Met de modulus bewerking (%) kun je bepalen of een getal deelbaar is door een ander getal. Als het niet deelbaar is de restwaarde de uitkomst
> 5 % 3 = 2 want als je 5 door 3 deelt dan kan dat 1 keer en hou je 2 over  
> 6 % 3 = 0 want als je 6 door 3 deelt dan kan dat 2 keer en hou je niks over  
> 0.3 % 3 = 0.3 want als je 0.3 deelt door 3 dan kan dat 0 keer en hou je 0.3 over
> 8.3 % 0.3 = 0.2 want 0.3 x 27 = 8.1 dus hou je 0.2 over. 

Machtsverheffen doe je met (**)
> 2 ** 2 = 4 want 2 tot de macht 2 = 2 x 2 = 4  
> 2 ** 3 = 8 want 2 tot de macht 3 = 2 x 2 x 2 = 8  
> 5 ** 4 = 625 want 5 x 5 x 5 x 5 = 625  

Delen is altijd tricky
> 9 / 3 = 3  
> 19 / 3 = 6.33333333 (float) 
> 21 / 0 = ZeroDivisionError: division by zero 

Als je een integer deelt door een andere integer dan kan de uitkomst een float zijn. Python kan niet door 0 delen dus zie een division by zero error op het scherm. Je kunt ook delen en altijd een integer als uitkomst hebben. Je gebruikt dan <code>//</code> ipv <code>/</code>

> 9 // 3 = 3  
> 19 // 3 = 6  
> 21 // 0 = ZeroDivisionError: integer division or modulo by zero

## Bewerkingen en prioriteiten
Als je meer dan 2 waarden moet bewerken, dan moet je opletten in welke volgorde de berekening wordt uitgevoerd...
> 24 / 4 - 3 = 3 en niet 24 (eest delen dan aftrekken)  
> 8 + 16 // 4 = 12 en niet 8 (eerst delen dan optellen)  

Je kunt prioriteit afdwingen door haakjes te gebruiken:
> (8 + 16) // 4 = 6 en niet 12 (eerst haakjes dan delen)

## Opdrachten
De opdrachten bij dit hoofdstuk staan op...