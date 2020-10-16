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

- Prettier - settings (4spaces, double quotes)
- Let + const umjesto var

## SCSS

#### Scripts:

-   watch (on change recompile + source map)
-   watch:min (on change recompile minified)
-   prefx (add prefixes - npr: -webkit-)
-   prefx:min (add prefixes + minified)
-   build:compile (compile minified)
-   build:autoprefix (run both prefx scripts)
-   build:css (run both build commands: minifed + prefixes)

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
