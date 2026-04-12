# Theorien der Literaturgeschichtsschreibung

## Ziel

Diese digitale Lerneinheit vermittelt Literaturgeschichte nicht als neutrale Chronologie, sondern als umstrittenes, konstruiertes und kulturpolitisch wirksames Deutungsfeld. Die Plattform richtet sich an Maturand*innen einer bilingualen Klasse Deutsch/Englisch und verbindet:

- Literaturgeschichtsschreibung als Auswahl- und Narrativpraxis
- klassische theoretische Ansätze der Literaturwissenschaft
- Kritik an Epochenbegriffen
- Kanonisierung, Schulkanon und Macht
- Kulturpolitik und nationale Programme
- Primärtexte aus mehreren Sprachräumen
- Digital Humanities mit didaktisch reduzierter Mini-Simulation

## Struktur

Die Lernumgebung ist als statisches GitHub-Pages-Projekt aufgebaut:

- `index.html`
- `assets/css/style.css`
- `assets/js/glossary.js`
- `assets/js/data.js`
- `assets/js/progress.js`
- `assets/js/tasks.js`
- `assets/js/dh-demo.js`
- `assets/js/app.js`
- `assets/data/dh-corpus.json`

Inhaltlich enthält die Plattform:

1. Startseite mit Lernzielen, Vergleichsachsen und Modulkarten
2. Modul 1: Was ist Literaturgeschichte?
3. Modul 2: Klassische theoretische Ansätze
4. Modul 3: Epochenbegriffe und ihre Probleme
5. Modul 4: Kanonisierung und Macht
6. Modul 5: Kulturpolitik und nationale Programme
7. Modul 6: Primärtexte im Vergleich
8. Modul 7: Digital Humanities und neue Zugänge
9. Modul 8: Synthese, Vertiefung, Transfer
10. Glossar DE/EN
11. Lehrpersonenbereich mit Lösungen und didaktischen Hinweisen

## Einsatz im Unterricht

Die Plattform ist für selbständige Lernphasen, Hausaufgaben, Flipped-Classroom-Formate oder gelenkte Unterrichtssequenzen geeignet.

Didaktische Eigenschaften:

- unmittelbares Feedback bei Aufgaben
- sequentielle Freischaltung innerhalb jedes Moduls
- lokale Speicherung des Lernstands via `localStorage`
- Reset-Funktion für einzelne Module oder den gesamten Lernstand
- bilingual eingebaute Schlüsselbegriffe
- textnahe Primärtextstationen mit Vergleichsperspektiven
- DH-Simulation mit Filterung und Auswertung

Empfohlene Einsatzweisen:

- Modul 1 und 3: gemeinsame Begriffsarbeit im Plenum
- Modul 2 und 6: Gruppenpuzzle oder Stationenlernen
- Modul 4 und 5: Diskussion, Debatte, schulische Kanonreflexion
- Modul 7: Laptoparbeit mit gemeinsamer Auswertung
- Modul 8: Synthese, Prüfungsvorbereitung oder Schreibauftrag

## GitHub Pages

Das Projekt benötigt keine Build-Schritte und kein Backend.

### Lokal starten

Einfach den Ordner in ein Repository legen und `index.html` über einen Browser oder einen lokalen statischen Server öffnen.

Beispiel mit Python:

```bash
python3 -m http.server
```

Dann im Browser `http://localhost:8000` aufrufen.

### Auf GitHub Pages veröffentlichen

1. Repository mit diesem Projekt anlegen oder den Ordner in ein bestehendes Repository kopieren.
2. Sicherstellen, dass `index.html` im veröffentlichten Root liegt.
3. In GitHub unter `Settings` → `Pages` die Veröffentlichung aus dem Branch `main` oder `master` aktivieren.
4. Als Quelle den Root-Ordner wählen.

## Lehrpersonenbereich

Der Lehrpersonenmodus ist rein clientseitig und deshalb für den Schulalltag gedacht, nicht als Hochsicherheitslösung.

- Standardpasswort: `kanon2026`
- zusätzliche einfache Aliasformen sind in `assets/js/data.js` hinterlegt

Der Bereich enthält:

- didaktische Hinweise pro Modul
- empfohlene Sozialformen
- Musterlösungen zu allen Aufgaben
- Hinweise zur Leistungsbeobachtung

## Anpassungsmöglichkeiten

Typische Anpassungen:

- Fachbegriffe im Glossar erweitern: `assets/js/glossary.js`
- Module, Texte und Aufgaben anpassen: `assets/js/data.js`
- Feedbacklogik oder Aufgabentypen verändern: `assets/js/tasks.js`
- lokale Speicherung verändern: `assets/js/progress.js`
- DH-Korpus erweitern: `assets/js/data.js` und optional `assets/data/dh-corpus.json`
- Layout und Farben anpassen: `assets/css/style.css`

## Technische Übersicht

- reines HTML, CSS und JavaScript
- keine externen Frameworks
- keine externen CDN-Abhängigkeiten
- lokal im Browser lauffähig
- GitHub-Pages-kompatibel
- Aufgabenreihenfolge mit gestufter Hilfelogik
- Bilingualität über Glossar und EN-Hilfesystem
- DH-Simulation mit Filterlogik, Tabellen- und Balkendarstellung

## Hinweis zur Inhaltsarbeit

Die Einheit arbeitet bei Primärtexten bewusst mit kurzen Textsignalen, Paraphrasen und didaktisch fokussierten Arbeitsimpulsen. Ziel ist keine Vollzitatsammlung, sondern eine urheberrechtlich saubere, methodisch reflektierte und schulpraktisch nutzbare Lernumgebung.
