---
title: Gegevens opvragen
date: 2025-09-09
---


#### {{ title }}

::: section
### Starten met queries
Bekijk welke tabellen er zijn:
```sql
show tables;
+------------------+
| Tables_in_school |
+------------------+
| c_regel          |
| cursist          |
| cursus           |
| docent           |
+------------------+
```
Bekijk welke records er zijn in de tabel docent:
```sql
select * from docent;
+----------+------------+---------------+----------+------------+------------+---------+------------+
| doc_code | doc_naam   | straat        | postcode | plaats     | telefoon   | uurloon | geb_datum  |
+----------+------------+---------------+----------+------------+------------+---------+------------+
| WI       | Witlok     | Madeseweg 8   | 4841 PT  | Oosterhout | 071-123378 |  100.00 | 1957-04-25 |
| HM       | Hooymayers | Ignatiusstr 6 | 4847 EZ  | Breda      | 076-442786 |  200.00 | 1952-09-01 |
| GR       | Grond      | Bolwerk 10    | 4541 CC  | Tilburg    | 013-426786 |  150.00 | 1958-10-25 |
| PE       | Peters     | Breedonk 64   | 4142 EC  | Oosterhout | 01620-3429 |  185.50 | 1963-10-08 |
| SE       | Sengers    | Bredaseweg 2  | 4344 DE  | Bavel      | NULL       |  110.00 | 1955-05-17 |
| MO       | Mol        | Waterstr 8    | 4841 KA  | Breda      | 076-227788 |  300.00 | 1948-11-30 |
+----------+------------+---------------+----------+------------+------------+---------+------------+
```
Bekijk nu welke velden er zijn in de tabel 'docent':
```sql
show fields from docent;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| doc_code  | varchar(2)   | YES  |     | NULL    |       |
| doc_naam  | varchar(25)  | YES  |     | NULL    |       |
| straat    | varchar(25)  | YES  |     | NULL    |       |
| postcode  | varchar(7)   | YES  |     | NULL    |       |
| plaats    | varchar(25)  | YES  |     | NULL    |       |
| telefoon  | varchar(12)  | YES  |     | NULL    |       |
| uurloon   | decimal(5,2) | YES  |     | NULL    |       |
| geb_datum | date         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+

```
Je ziet nu dat de eerste rij van de records van docent overeenkomst met de eerste kolom in het overzicht van de velden van een docent.  
In de query <code>select * from docent</code> staat het sterretje voor 'alle velden/kolommen'.  
Alle kolommen worden weergegeven uit de tabel docent.  
Met <code>select</code> bepaal je dus welke kolommen worden weergegeven
Met <code>from</code> bepaal je welke tabel je gebruikt.  
Je kunt na <code>select</code> opgeven welke kolommen je wil zien:
```sql
select doc_naam, telefoon from docent;

+------------+------------+
| doc_naam   | telefoon   |
+------------+------------+
| Witlok     | 071-123378 |
| Hooymayers | 076-442786 |
| Grond      | 013-426786 |
| Peters     | 01620-3429 |
| Sengers    | NULL       |
| Mol        | 076-227788 |
+------------+------------+
```
:::

::: section
### Gegevens filteren
{% video "9_5Ey_3oi30" %}

Stel dat je niet alle records uit een tabel wil opvragen maar je wilt gegevens filteren.  
In onderstaand voorbeeld worden alleen de kolommen <code>doc_naam</code> en <code>telefoon</code> weergegeven uit de tabel docent. Met <code>where</code> worden de gegevens gefilterd. De data uit de kolom <code>doc_naam</code> moet overeenkomen met de tekst 'Witlok'. Omdat het om tekst gaat, moet 'Witlok' tussen aanhalingstekens worden geplaatst.

```sql
 select doc_naam, telefoon from docent where doc_naam = 'Witlok';
+----------+------------+
| doc_naam | telefoon   |
+----------+------------+
| Witlok   | 071-123378 |
+----------+------------+
```
Filteren op plaatsnaam:
```sql
 select doc_naam, telefoon from docent where plaats = 'Oosterhout';
+----------+------------+
| doc_naam | telefoon   |
+----------+------------+
| Witlok   | 071-123378 |
| Peters   | 01620-3429 |
+----------+------------+
```
#### LIKE
Zowel Peters al Witlok wonen in Oosterhout!

Er kan ook gefilterd worden op een deel van de data. Stel dat alle namen en telefoonnumers van docenten uit plaatsen die beginnen met de letter 'B' moeten worden weergegeven. Dan kan dat door weer gebruik te maken van <code>where</code> en de operator <code>like</code>.
```sql
select doc_naam, plaats, telefoon from docent where plaats like 'B%';
+------------+--------+------------+
| doc_naam   | plaats | telefoon   |
+------------+--------+------------+
| Hooymayers | Breda  | 076-442786 |
| Sengers    | Bavel  | NULL       |
| Mol        | Breda  | 076-227788 |
+------------+--------+------------+

```
Met bovenstaande query worden de docenten uit 'Bavel' en 'Breda' weergegeven. 
Het '%'-tekentje in de query staat voor een 'wildcard'. Je kunt voor een %-teken iedere reeks van karakters in de plaats zetten. Zo moet een plaats in ieder geval beginnen met de letter 'B', maar maakt het niet uit welke karakters daar nog achteraan komen.

#### Filters combineren
Het is ook mogelijk om op meerdere criteria te filteren.
```sql
select doc_naam, plaats, telefoon from docent where plaats = 'Bavel' or plaats = 'Oosterhout';
+----------+------------+------------+
| doc_naam | plaats     | telefoon   |
+----------+------------+------------+
| Witlok   | Oosterhout | 071-123378 |
| Peters   | Oosterhout | 01620-3429 |
| Sengers  | Bavel      | NULL       |
+----------+------------+------------+
```
In <code>where plaats = 'Bavel' or plaats = 'Oosterhout'</code> uit bovenstaand voorbeeld worden alle docenten getoond die wonen in Bavel **of** Oosterhout. Beide plaatsen worden in het overzicht getoond. 

Je kunt de criteria ook aanscherpen zodat data aan meerdere voorwaarden moet voldoen.
Hieronder worden alle docenten getoond waarvan de naam eindigt op 'rs' **en** de plaats begint met een 'B'. Met <code>where doc_naam like '%rs' and plaats like 'B%'</code> gelden beide voorwaarden alleen voor Hooymayers en Sengers!
```sql
select doc_naam, plaats, telefoon from docent where doc_naam like '%rs' and plaats like 'B%';
+------------+--------+------------+
| doc_naam   | plaats | telefoon   |
+------------+--------+------------+
| Hooymayers | Breda  | 076-442786 |
| Sengers    | Bavel  | NULL       |
+------------+--------+------------+
```

#### IS NULL
Er kan ook gefilterd worden op velden die leeg zijn. Sommige docenten hebben geen telefoon. Om te bepalen wie dat zijn kan de volgende query worden gebruikt:
```sql
select doc_naam, telefoon from docent where telefoon is null;
+----------+----------+
| doc_naam | telefoon |
+----------+----------+
| Sengers  | NULL     |
+----------+----------+
```
Met <code>is null</code> vind je alle lege velden.

De omgekeerde select kan ook handig zijn. In onderstaand voorbeeld worden alle docenten met een telefoon weergegeven:
```sql
select doc_naam, telefoon from docent where not telefoon is null;
+------------+------------+
| doc_naam   | telefoon   |
+------------+------------+
| Witlok     | 071-123378 |
| Hooymayers | 076-442786 |
| Grond      | 013-426786 |
| Peters     | 01620-3429 |
| Mol        | 076-227788 |
+------------+------------+

```
Met <code>not</code> voor de veldnaam-operator-waarde (<code>telefoon is null</code>) wordt de omgekeerde selectie getoond.

#### Distinct
Als je een overzicht wilt opvragen van de verschillende woonplaatsen van de cursisten dan kun je de volgende query gebruiken:
``` sql
select plaats from cursist;
```
``` shell
+------------+
| plaats     |
+------------+
| Made       |
| Oosterhout |
| Goirle     |
| Breda      |
| Dronten    |
| Dronten    |
+------------+
```
Zoals je ziet krijg je ook dubbele waarden. Er zijn meerdere cursisten die uit Dronten komen. Je kunt alleen unieke waarden opvragen door de dubbele waarnden te filteren met <code>distinct</code>.
``` sql
select distinct plaats from cursist;
```
``` shell
+------------+
| plaats     |
+------------+
| Made       |
| Oosterhout |
| Goirle     |
| Breda      |
| Dronten    |
+------------+
```
Dronten komt nog maar 1 keer voor in de uitvoer.
:::

::: section
### Aggregatie
#### Sorteren van data
Data kan gesorteerd worden weergegeven. Om de cursussen in de tabel te sorteren voeg je aan het einde van de query 'order by' en het veld waarop gesorteerd moet worden toe. Bijvoorbeeld:
```sql
select omschr, curs_prijs from cursus order by curs_prijs; 
+---------------------+------------+
| omschr              | curs_prijs |
+---------------------+------------+
| Framework           |     850.00 |
| Wordperfect         |    1450.00 |
| Programmeren in C++ |    1450.00 |
| Open Access 2.1     |    2400.00 |
| Open Access 3.0     |    2600.00 |
| Normaliseren        |    3000.00 |
| Dbase III Plus      |    3300.00 |
| Dbase IV            |    3600.00 |
+---------------------+------------+
```
De gegevens worden gesorteerd op prijs weergegeven.
Standaard wordt er oplopend gesorteerd (ascending). Om aflopend te sorteren moet de afkorting 'desc' na de veldnaam komen. Bijvoorbeeld:
```sql
select omschr, curs_prijs from cursus order by curs_prijs desc; 
+---------------------+------------+
| omschr              | curs_prijs |
+---------------------+------------+
| Dbase IV            |    3600.00 |
| Dbase III Plus      |    3300.00 |
| Normaliseren        |    3000.00 |
| Open Access 3.0     |    2600.00 |
| Open Access 2.1     |    2400.00 |
| Wordperfect         |    1450.00 |
| Programmeren in C++ |    1450.00 |
| Framework           |     850.00 |
+---------------------+------------+
```
In bovenstaand voorbeeld hebben 'Wordperfect' en 'Programmeren in C++' dezelfde prijs. In de query kunnen we nog specificeren dat nadat er op prijs is gesorteerd er ook nog gesorteerd moet worden op omschrijving, zodat eerst 'Programmeren in C++' wordt weergegeven en dan pas 'Wordperfect'. Dat gaat zo:
```sql
select omschr, curs_prijs from cursus order by curs_prijs desc, omschr asc;
+---------------------+------------+
| omschr              | curs_prijs |
+---------------------+------------+
| Dbase IV            |    3600.00 |
| Dbase III Plus      |    3300.00 |
| Normaliseren        |    3000.00 |
| Open Access 3.0     |    2600.00 |
| Open Access 2.1     |    2400.00 |
| Programmeren in C++ |    1450.00 |
| Wordperfect         |    1450.00 |
| Framework           |     850.00 |
+---------------------+------------+
```
#### Berekeningen
MySQL kan ook gebruikt worden om berekeningen uit te voeren op data. Het aantal records kan geteld worden of de gemiddelde prijs kan worden berekend. Hieronder 2 voorbeelden:
Tel het aantal records in de tabel cursus
```sql
select count(*) from cursus;
+----------+
| count(*) |
+----------+
|        8 |
+----------+
```
Om de weergave wat interessanter te maken kun je de kop in de eerste regel aanpassen. In dit geval zit er een spatie tussen aantal en records. Hierdoor moet `aantal records` tussen 'backticks' worden geplaatst. Dit zijn niet de normale aanhalingstekens, maar een speciaal naar links hellend aanhalingsteken dat je meestal aan de linkerkant van je toetsenbord kunt vinden.
```sql
select count(*) as `aantal records` from cursus;
+----------------+
| aantal records |
+----------------+
|              8 |
+----------------+
```
In dit voorbeeld wordt gekeken naar de cursus die het meeste kost.
```sql
select omschr, max(curs_prijs) as `kost het meest` from cursus;
+----------------+----------------+
| omschr         | kost het meest |
+----------------+----------------+
| Dbase III Plus |        3600.00 |
+----------------+----------------+
```
Vind nog meer voorbeelden op W3Schools.com:
* https://www.w3schools.com/sql/sql_min_max.asp
* https://www.w3schools.com/sql/sql_count_avg_sum.asp

#### Groeperen van data
Om berekeningen te maken over groepen data kun je in mysql gebruik maken van 'group by'. Door data te groeperen kun je gemiddelden uitrekenen of data optellen en tellen hoe vaak gegevens voorkomen.
Stel er moet een overzicht komen van het aantal cursussen per plaats. In het voorbeeld hieronder worden de unieke plaatsnamen weergegeven en er wordt met de functie <code>count()</code> geteld hoe vaak iedere naam voorkomt in de tabel.
```sql
select curs_plts, count(curs_plts) as aantal from cursus group by curs_plts;
+-----------+--------+
| curs_plts | aantal |
+-----------+--------+
| Breda     |      5 |
| Etten     |      1 |
| Made      |      2 |
+-----------+--------+
```
Je kunt gegevens die zijn gegenereerd met group by ook nog filteren. Je gebruikt dan 'having' in plaats van 'where'. 'Where' gebruik je voor groepering en 'having' erna.
```sql
select curs_plts, count(curs_plts) as aantal 
from cursus 
group by curs_plts having aantal > 1;
+-----------+--------+
| curs_plts | aantal |
+-----------+--------+
| Breda     |      5 |
| Made      |      2 |
+-----------+--------+
```

In onderstaand voorbeeld wordt er eerst gefilterd op cursusprijs. Met die selectie wordt er gegroepeerd. Als er in een plaats meer dan 1 cursussen zijn die meer kosten dan 1400 euro, dan wordt de plaats weergegeven en het aantal cursussen dat voldoet aan de criteria. 
```sql
select curs_plts, count(curs_plts) as aantal 
from cursus where curs_prijs > 1400 
group by curs_plts having aantal > 1;
+-----------+--------+
| curs_plts | aantal |
+-----------+--------+
| Breda     |      4 |
| Made      |      2 |
+-----------+--------+
```

:::

::: section
### Databases maken

Stel je moet een database maken voor een bibliotheek. De database bestaat uit 3 tabellen:
* De tabel klanten bestaat uit de volgende velden: `voornaam`, `achternaam`, `emailadres`
* De tabel boeken bestaat uit de velden: `titel`, `jaar` en `hoeveelste druk`
* De tabel uitleen bestaat uit `uitleendatum`, `retourdatum`, `klant_id`, `boek_id`
* Alle tabellen hebben een veld `id` dat tevens de primaire sleutel is.
* De tabel uitleen heeft 2 vreemde sleutels: 
    * `klant_id` die refereert naar de primaire sleutel `id` in de tabel klanten
    *  en `boek_id` die refereert naar de primaire sleutel `id` in de tabel boeken.

Hieronder zie je het script om de database aan te maken:
```sql
CREATE DATABASE bibliotheek;
USE bibliotheek;

CREATE TABLE klanten (
    id INT AUTO_INCREMENT PRIMARY KEY,
    voornaam VARCHAR(50),
    achternaam VARCHAR(50),
    emailadres VARCHAR(100)
);

CREATE TABLE boeken (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titel VARCHAR(100),
    jaar INT,
    druk INT
);

CREATE TABLE uitleengegevens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uitleendatum DATE,
    retourdatum DATE,
    klant_id INT,
    boek_id INT,
    FOREIGN KEY (klant_id) REFERENCES klanten(id),
    FOREIGN KEY (boek_id) REFERENCES boeken(id)
);
```
#### Uitleg
* In de regel `id INT AUTO_INCREMENT PRIMARY KEY` geef je aan dat je een veld met de naam `id` wilt aanmaken van het type `INT`. `id` is een primaire sleutel. De waarde is een unieke integer die het record identificeert. Met `AUTO_INCREMENT` wordt aangegeven bij ieder nieuw record het `id` automatisch wordt gegenereerd naar het eerst volgende integer. 
* Met `VAR_CHAR(50)` wordt aangegeven dat de waarde van het type `string` of `tekst` is. Het mag maximaal 50 karakters bevatten.
* Met `INT` wordt een geheel getal bedoeld
* Met `DATE` gaat het om een datum-veld.
* Onderaan bij uitleen zie je dat de vreemde sleutels `FOREIGN KEY` verwijzen naar de velden id in de klanten- en boekentabel.

:::

::: section
### Crud
CRUD staat voor CReate, Update en Delete. Het toevoegen, aanpassen of verwijderen van records uit een tabel. Stel dat er nieuwe cursist zich heeft aangemeld. De cursist moet worden toegevoegd aan de tabel <code>cursist</code>.

#### Records toevoegen
Om records toe te kunnen voegen aan de tabel moet helder zijn wat de structuur van de tabel is.
Hieronder worden de velden weergegeven met hun eigenschappen. Zo kun je zien dat de postcode van het type <code>varchar</code> moet zijn en maximaal 7 karakters mag hebben. <code>varchar</code> staat voor variabel aantal karakters. In de kolom 'Null' staat bij ieder veld 'YES'. Dit betekent dat dit veld leeg gelaten mag worden. Het is dus niet nodig om alle gegevens te gebruiken voor het aanmaken van een nieuwe cursist!

```sql
show fields from cursist;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| cursistnr | varchar(4)  | YES  |     | NULL    |       |
| naam      | varchar(25) | YES  |     | NULL    |       |
| roepnaam  | varchar(25) | YES  |     | NULL    |       |
| straat    | varchar(25) | YES  |     | NULL    |       |
| postcode  | varchar(7)  | YES  |     | NULL    |       |
| plaats    | varchar(25) | YES  |     | NULL    |       |
| geslacht  | varchar(1)  | YES  |     | NULL    |       |
| geb_datum | date        | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
```
Stel 'Kees Stofman' moet worden toegevoegd. Van 'Kees' is zijn naam, zijn postcode en plaats bekend...
```sql
insert into cursist (cursistnr, roepnaam, postcode, plaats) 
values (92, 'Kees', '4889 HJ', 'Rotterdam');

Query OK, 1 row affected (0,00 sec)
```
Met <code>insert into cursist</code> wordt aangegeven dat er een record toegevoegd gaat worden aan de tabel 'cursist'. Tussen aanhalingstekens volgen dan de veldnamen waar waarden voor beschikbaar zijn. De waarden die moeten worden toegevoegd staan tussen haakjes achter values. Ze corresponderen met de positie van de velden.

#### Records updaten
Stel dat inmiddels de geboortedatum van Kees bekend is. Het record van Kees wordt op de volgende manier aangepast.
```sql
update cursist set geb_datum = '1999-03-22' where cursistnr = 92;

Query OK, 1 row affected (0,00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
Met <code>update cursist</code> wordt aangegeven dat het om de tabel cursist gaat. Met <code>set geb_datum = '1999-03-22'</code> wordt aangegeven welk veld aangepast moet worden. Gelukkig heeft Kees ook een uniek cursistnummer gekregen zo is precies bekend welke 'Kees' aangepast moet worden. Je kunt meerdere records tegelijk aanpassen, dus zorg ervoor dat de where-clause klopt! Zonder where-clause wordt van alle records in de tabel de geboortedatum aangepast.
PS: De where-clause is het gedeelte van de query dat na <code>where</code> komt.

#### Records verwijderen
Om een record te kunnen verwijderen is weer een unieke waarde nodig zoals 'cursistnr'. Met cursistnr wordt aangegeven welk record precies verwijdert moet worden.
```sql
delete from cursist where cursistnr = 92;

Query OK, 1 row affected (0,00 sec)```
```

:::

::: section
### Tabellen combineren
De mooiste resultaten krijg je als je gegevens uit tabellen kunt combineren. In de school-database is het bijvoorbeeld handig als je een lijst kunt opvragen van de namen van cursisten die aan een cursus meedoen. Om dit overzicht te maken zijn de gegevens uit meerdere tabellen nodig.
Bekijk hiervoor de inhoud uit de tabel cursisten en de tabel c_regel.  
In c_regel wordt bijgehouden wie voor welke cursus is ingeschreven.
```sql
select * from c_regel;
+-----------+-----------+--------+---------+
| curs_code | cursistnr | cijfer | betaald |
+-----------+-----------+--------+---------+
| DB3       | 64        |      8 | 3300.00 |
| DB3       | 2         |      6 |    NULL |
| DB3       | 68        |      9 | 3300.00 |
| OA2       | 14        |      5 | 2400.00 |
| OA2       | 88        |      7 | 2000.00 |
| OA2       | 2         |      9 |    NULL |
| DB4       | 14        |      6 | 3600.00 |
+-----------+-----------+--------+---------+
```
Hieronder de gegevens uit de cursisten-tabel
```sql
select * from cursist;
+-----------+---------+----------+----------------+----------+------------+----------+------------+
| cursistnr | naam    | roepnaam | straat         | postcode | plaats     | geslacht | geb_datum  |
+-----------+---------+----------+----------------+----------+------------+----------+------------+
| 64        | Broeken | Bram     | Drimmelseweg 8 | 4395 XX  | Made       | M        | 1988-03-24 |
| 88        | Vos     | Henk     | Besbeemd 64    | 4142 CE  | Oosterhout | M        | 1989-09-22 |
| 2         | Krimpen | Tanja    | Tilburgseweg 2 | 4222 BB  | Goirle     | V        | 1990-02-08 |
| 14        | Norbart | Niels    | Gershof 8      | 4841 PL  | Breda      | M        | 1987-12-06 |
| 89        | Stofman | Kees     | Lindenlaan 23  | 4998 XF  | Dronten    | M        | 1987-03-22 |
| 91        | Stofman | Kees     | Lindenlaan 23  | 4998 XF  | Dronten    | M        | NULL       |
+-----------+---------+----------+----------------+----------+------------+----------+------------+
```
#### Join
In tabel c_regel vind je de cursus-code, terwijl in de tabel cursisten de namen van de cursisten te vinden zijn. Je kunt beide tabellen combineren omdat in de tabel c_regel cursistnummers worden gebrukt om aan te geven wie aan welke cursus meedoet. In de eerste rij zie je dat cursist 64 meedoet met de cursus 'DB3'. De cursistnummers in de tabel c_regel komen overeen met cursistnummers in de tabel cursist. Met <code>join</code> worden de tabellen gecombineerd. Daarna wordt er met <code>on</code> aangegeven wat de relatie is tussen de tabellen. Het cursistnummer in tabel cursisten moet corresponderen met het cursistnummer in de tabel c_regel...
```sql
select roepnaam, naam, curs_code from cursist c join c_regel cr on c.cursistnr = cr.cursistnr;
+----------+---------+-----------+
| roepnaam | naam    | curs_code |
+----------+---------+-----------+
| Bram     | Broeken | DB3       |
| Tanja    | Krimpen | DB3       |
| Niels    | Norbart | OA2       |
| Henk     | Vos     | OA2       |
| Tanja    | Krimpen | OA2       |
| Niels    | Norbart | DB4       |
+----------+---------+-----------+
```
In de query wordt de naam van de tabel cursist afgekort naar de letter c. Dat scheelt veel tekst en maakt de query overzichtelijker. De naam van de tabel c_regel wordt afgekort naar cr. Zo kun je beide tabellen combineren op basis van het cursistnummer. 
In het volgende voorbeeld willen we de volledige naam van de cursus weergeven. Deze naam komt wel voor in de cursus-tabel, maar niet in c_regel. Beide tabellen kunnen worden gecombineerd omdat de cursus-code wel in beide tabellen voorkomt. Op basis van de cursuscode kan in de cursus-tabel de omschrijving van de cursus worden opgehaald.

#### Joins combineren
```sql
select roepnaam, naam, omschr from cursist c 
join c_regel cr on c.cursistnr = cr.cursistnr 
join cursus cu on cr.curs_code = cu.curs_code;
+----------+---------+-----------------+
| roepnaam | naam    | omschr          |
+----------+---------+-----------------+
| Bram     | Broeken | Dbase III Plus  |
| Tanja    | Krimpen | Dbase III Plus  |
| Niels    | Norbart | Dbase IV        |
| Niels    | Norbart | Open Access 2.1 |
| Henk     | Vos     | Open Access 2.1 |
| Tanja    | Krimpen | Open Access 2.1 |
+----------+---------+-----------------+

```
Na het samenvoegen van tabellen kan er weer gefilterd en gegroepeerd worden. Met filtering worden alleen de Dbase-cursussen getoond:
```sql
select roepnaam, naam, omschr from cursist c 
join c_regel cr on c.cursistnr = cr.cursistnr 
join cursus cu on cr.curs_code = cu.curs_code 
where omschr like 'Dbase%';
+----------+---------+----------------+
| roepnaam | naam    | omschr         |
+----------+---------+----------------+
| Bram     | Broeken | Dbase III Plus |
| Tanja    | Krimpen | Dbase III Plus |
| Niels    | Norbart | Dbase IV       |
+----------+---------+----------------+

```

#### Berekeningen en filteren
Een overzicht genereren van de cursussen met hoogst behaalde cijfers;
```sql
select omschr, max(cijfer) as `highest score` from cursist c 
join c_regel cr on c.cursistnr = cr.cursistnr 
join cursus cu on cr.curs_code = cu.curs_code 
group by cu.curs_code order by cu.curs_code desc;
+-----------------+---------------+
| omschr          | highest score |
+-----------------+---------------+
| Open Access 2.1 |             9 |
| Dbase IV        |             6 |
| Dbase III Plus  |             8 |
+-----------------+---------------+

```

Een overzicht van de namen en resultaten van de studenten aflopend gesorteerd op gemiddeld cijfer:
```sql
select roepnaam, naam, avg(cijfer) as `gemiddelde score` 
from cursist c 
join c_regel cr on c.cursistnr = cr.cursistnr 
join cursus cu on cr.curs_code = cu.curs_code 
group by c.cursistnr order by avg(cijfer) desc;
+----------+---------+------------------+
| roepnaam | naam    | gemiddelde score |
+----------+---------+------------------+
| Bram     | Broeken |           8.0000 |
| Tanja    | Krimpen |           7.5000 |
| Henk     | Vos     |           7.0000 |
| Niels    | Norbart |           5.5000 |
+----------+---------+------------------+
```

:::