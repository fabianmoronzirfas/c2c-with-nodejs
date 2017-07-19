---
title: Terminal 101  
patat:
    wrap: true
    slideLevel: 1
    incrementalLists: true
    theme:
        blockQuote: [vividBlack]
        header: [bold ,vividBlack]
        emph: [vividBlack]
        code: [dullBlack, onVividWhite]
        codeBlock: [dullWhite, onVividBlack]
        borders: [onVividWhite]
        bulletList: [vividBlack]
        linkTarget: [underline]
        linkText: [underline]
        syntaxHighlighting:
            string: [dullGreen]

...


# Was ist das Terminal?

---

Das Terminal ist ein Interface für euren Computer in dem Ihr Textbefehle eingeben und ausführen könnt.  


---

# Wie öffne ich das Terminal?

---

## macOS

Das macOS Terminal ist unter:  

    Programme > Applikationen > Dienstprogramme > Terminal.app

zu finden. (Oder per Spotlight suche nach Terminal.app)   

---

## Windows

Die Windows Eingabeaufforderung ist zu öffnen indem im Startmenü nach 

    CMD

gesucht wird. Für die Nutzung mit Node.js kann auch der `Node command prompt` genutzt werden.  

---

# Das Dateisystem im Terminal

Das Terminal ist eine textbasierte Representation des Dateisystems. Alle Ordner und Dateien die in Finder/Explorer zu finden sind, können auch in der Shell erreicht werden.  

---

# Topics  

- Durch Ordner navigieren `cd`
- Oft genutzte Befehle
    - Dateien auflisten `ls`
    - Manual anzeigen `man` / `HELP`
    - Inhalt von Dateien sehen `cat` / `type`
    - Historie anzeigen `history`
    - Aktuelle Position ermitteln `pwd`
    - Dateien erstellen `touch` 
    - Ordner erstellen `mkdir`
    - Dateien/Ordner öffnen `open` / `start`
    - Dateien/Ordner löschen `rm` / `del` / `deltree` ACHTUNG
- Programme & Dateien ausführen (Node.js)
- Package Manager `npm`
- Tiefer einsteigen

---

# Durch Ordner Navigieren (Unix & Win)

---

## In einen Ordner hinein

Um in Ordner zu wechseln gibt es den Befehl `cd` + Pfad:  

    cd path/to/folder/

Um in Ordner mit Leerzeichen wechseln, müssen Leerzeichen "escaped" werden `\ ` _(macOS "⌥ ⇧ 7" Win "⌥ + 27 Numblock")_:    

    cd path/to/folder\ with\ whitespace/


---

## Tab Vervollständigung   

Wenn der Name eines Ordners _(Oder einer Datei, oder eines Programms.)_ bekannt ist, kann auch nur der Anfang eins Namens geschreiben werden und dann mit `TAB ⇥` vervollständigt werden.   

    cd path/to/folder + ⇥

ergibt:  

    cd path/to/folder\ with\ whitespace/

---

## Aus einem Ordner heraus

Um in ein übergeordnetes Verzeichnis zu wechseln gibt es den Befehl

    cd ..

---

Noch weiter "runter" im Dateibaum geht es mit dem Befehl  

    cd ../../../

---

## Pfad per Drag & Drop

Um es sich einfacher zu machen können Ordner auch per Drag & Drop in die Kommandozeile gezogen werden. Dies setzt dann den Pfad ein. Davor muss jedoch `cd ` eingegeben werden _(Das Leerzeichen nicht vergessen)_.  

---

# Oft genutzte Befehle

Ich bin auf Unix Systemen zuhause. Daher kenne ich nicht all Windows Equivalente. Hier gibt es eine [Vergleichsliste](https://www.lemoda.net/windows/windows2unix/windows2unix.html).  

---

## Dateien Auflisten
 
Unix: `ls`   

Win: `dir`  


---

## Manual Anzeigen

Unix: `man`  

Win: `HELP`

z.B.  

Unix: `man ls`  

Win: `HELP dir`

---

## Inhalt von Dateien sehen `cat`


Unix: `cat`  

Win: `type`

z.B.  

Unix: `cat some-random-file.js`  

Win: `type some-random-file.js`

---


## Historie anzeigen 

Unix: `history`  

Win: …  


---

## Aktuelle Position Ermitteln

    pwd

---

## Dateien erstellen

Unix: `touch`  

Win: …  

---

## Ordner erstellen

`mkdir`

---

## Dateien öffnen

Unix: `open`  

Win: `start`  

---

## Ordner öffnen

Unix: `open .`  

Win: `start .`  

---

## Dateien löschen 

Unix: `rm`  

Win: `del`

---

## Ordner löschen

Unix: `rm -r`  
Win: `deltree`  

---


# Prgramme ausführen

Um ein Programm auszuführen muss nur sein Name eingegeben werden und _(optionale)_ Argumente. In unserem Fall `node`.

---

## Node

Der Aufruf von `node` ohne Argumente öffnet einen JavaScript REPL (Read–eval–print loop) in dem wir bereits JavaScript schreiben können.  

    node  

Um den REPL wieder zu verlassen muss CTRL + C gedrückt werden _(Das gilt für viele Programme)_.

---

## Node  

Um die aktuelle Version von Node.js zu erfahren gibt es den Befehl

    node -v

---

# Dateien ausführen mit Node  

Um eine JavaScript Datei _(.js)_ auszuführen, übergeben wir sie als Argument an `node`.  

    node index.js


---

# Package Manager

---

## npm

Das JavaScript Ecosystem stützt sich auf Modulen die wir per Package Manager (npm) installieren können. Um zu verfolgen welche Module wir nutzen benötigen wir ein Datei genannt `package.json`.  
Diese kann automatisch mit erstellt werden.

    npm init -y

_(`-y` steht für yes. Damit wird die interaktive ingabe übersprungen und die Standardwerte verwendet)_


---

## npm 

Jetzt können Module von [npmjs.org](https://www.npmjs.com/) geladen, installiert und verwendet werden.

    npm install ansi-rainbow

_(Seit npm version 5 werden installierte Module automatisch in der `package.json` gespeichert. Um sicher zu gehen, dass immer die richtige Version installiert wird, erzeugt `npm` automatisch eine Datei genannt `package-lock.json`)_

---

Im JavaScript kann dann dises Module verwendet werden.  

~~~js
var rainbow = require('ansi-rainbow');
var variable = 'my first node program';
console.log(rainbow.r(variable));
~~~

---

# Tiefer Einsteigen

- [Learn Python the Hard Way](https://learnpythonthehardway.org/python3/appendixa.html)
- [Learn the Command Line | Course | Codecademy](https://www.codecademy.com/learn/learn-the-command-line)
- [Homebrew — The missing package manager for macOS](https://brew.sh/)
- [Chocolatey - The package manager for Windows](https://chocolatey.org/)
- [iTerm2 - macOS Terminal Replacement](https://www.iterm2.com/)
- [Microsoft PowerShell](https://msdn.microsoft.com/en-us/powershell)
- [Bash on Ubuntu on Windows - About](https://msdn.microsoft.com/en-us/commandline/wsl/about#)
- [Oh My Zsh](http://ohmyz.sh/)
- [oh-my-fish/oh-my-fish: The Fishshell Framework.](https://github.com/oh-my-fish/oh-my-fish)
- [JanJoris/oh-my-posh: A prompt theming engine for Powershell running in ConEmu](https://github.com/JanJoris/oh-my-posh)

---

# Weiter geht es hier  

    open https://github.com/fabianmoronzirfas/c2c-with-nodejs

---
