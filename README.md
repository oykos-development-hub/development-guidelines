# Development Guidelines

## General rules

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

###### Margins:

-   margins - skraceno na "ma-[value]" - px zamjenjeni sa rem
-   margin horizontal - skraceno na mx-[value] - px zamjenjeni sa rem - dodat mx-auto za centriranje elemenata
-   margin vertical - skraceno na my-[value] - px zamjenjeni sa rem
-   margin top - skraceno na mt-[value] - px zamjenjeni sa rem
-   margin right - skraceno na mr-[value] - px zamjenjeni sa rem
-   margin left - skraceno na mr-[value] - px zamjenjeni sa rem
-   removed important and percentage margins

###### Paddings:

-   paddings - skraceno na "pa-[value]" - px zamjenjeni sa rem
-   padding horizontal - skraceno na px-[value] - px zamjenjeni sa rem - dodat mx-auto za centriranje elemenata
-   padding vertical - skraceno na py-[value] - px zamjenjeni sa rem
-   padding top - skraceno na pt-[value] - px zamjenjeni sa rem
-   padding right - skraceno na pr-[value] - px zamjenjeni sa rem
-   padding left - skraceno na pr-[value] - px zamjenjeni sa rem
-   removed important and percentage paddings

#### To do:

###### Margins:

-   [x] Shorten margins + rem umjesto px
-   [ ] Margins media queries
-   [ ] Margins combine margins into shorthand properties

###### Paddings:

-   [x] Shorten margins + rem umjesto px
-   [ ] Margins media queries
-   [ ] Margins combine margins into shorthand properties
