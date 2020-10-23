# Development Guidelines

## General rules

##### Practices:

-   Create pull request on task completion

##### To do:

-   [ ] -   odluciti koji word convetion koristiti camelCase vs snake_case

#### Folder structure:

```bash
project
│
├── public
│    ├── compiled css
│    ├── images
│    ├── rest of public folder
│
├── scss
│
└── src
```

#### Writing code:

-   Prettier - settings (4spaces, double quotes)
-   Let & const umjesto var

#### Resources:

-   Webp images + jpg fallback
-   Responsive image display in html
-   Minifikacija fajlova
-   Lokalno skladistenje fontova
-   Koriscenje woff i woff2 formata fontova
-   SVG gdje god je moguce umjesto jpg/png
-   SVG kao code element ne kao img src

## SCSS

---

:information_source: **NAPOMENA**:

Font sizes citavog dokumenta je stavljen na "62.5%", sto pod uslovom da default font size browsera nije diran, znaci da je 1rem = 10px;

Na uredjajima dje je sirina ekrana manja od 576px, font size se smanjuje na "50%", samim tim citav layout biva prilagodjen manjim ekranima.

p.s Ovaj pristup dobro skalira i kada neko poveca default font browsera npr. osobe sa slabijim vidom itd jer za razliku od px koji su fiksni koristi se dinamicka velicina fonta

---

#### Scripts:

-   watch (on change recompile + source map)
-   watch:min (on change recompile minified)
-   prefx (add prefixes - npr: -webkit-)
-   prefx:min (add prefixes + minified)
-   build:compile (compile minified)
-   build:autoprefix (run both prefx scripts)
-   build-css (run both build commands: minifed + prefixes)

#### Folder structure:

```bash
scss
│
├── abstracts
│    ├── _mixins.scss
│    ├── _variables.scss
│
├── init
│    ├── _init.scss
│
├── layout
│    ├── background
│    ├── _[everything layout related].scss
│
├── pages
│    ├── _[pageName].scss
│
├── utils
│    ├── _fonts.scss
│    ├── _normalize.scss
│    ├── _utils.scss
│
└── main.scss - entry file za svaki dokument (direktno ili skup iz foldera)
```

#### Changes:

###### Colors:

-   [ ] Prebaciti sve boje u zaseban file (abstracts/variables/\_colors.scss)
-   [ ] Dogovoriti konvenciju oko imenovanja varijabli za boje

###### Margins:

-   [x] margins - skraceno na "ma-[value]" - px zamjenjeni sa rem
-   [x] margin horizontal - skraceno na mx-[value] - px zamjenjeni sa rem - dodat mx-auto za centriranje elemenata
-   [x] margin vertical - skraceno na my-[value] - px zamjenjeni sa rem
-   [x] margin top - skraceno na mt-[value] - px zamjenjeni sa rem
-   [x] margin right - skraceno na mr-[value] - px zamjenjeni sa rem
-   [x] margin left - skraceno na mr-[value] - px zamjenjeni sa rem
-   [x] removed important and percentage margins
-   [ ] Margins media queries
-   [ ] Combine margins into shorthand properties

###### Paddings:

-   [x] paddings - skraceno na "pa-[value]" - px zamjenjeni sa rem
-   [x] padding horizontal - skraceno na px-[value] - px zamjenjeni sa rem - dodat mx-auto za centriranje elemenata
-   [x] padding vertical - skraceno na py-[value] - px zamjenjeni sa rem
-   [x] padding top - skraceno na pt-[value] - px zamjenjeni sa rem
-   [x] padding right - skraceno na pr-[value] - px zamjenjeni sa rem
-   [x] padding left - skraceno na pr-[value] - px zamjenjeni sa rem
-   [x] removed important and percentage paddings
-   [ ] Paddings media queries
-   [ ] Combine paddingss into shorthand properties
