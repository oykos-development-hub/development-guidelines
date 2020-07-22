// External dependencies
import React from "react";
import { UtilService } from "../services/util.service";

export default class Practise extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let headerWrapper = UtilService.DOM.$createElement('div', {'id':'page-header', 'className':'flex space-between padding-h-20 padding-v-30'});
        UtilService.DOM.$appendChildToElement('#mainPage', headerWrapper);
        let headerLeft = UtilService.DOM.$createElement('div', {'id':'left-side', 'className':'large-text uppercase theme-main-5 flex center', 'innerText':'Novi Podsjetnik'});
        headerLeft.style.textShadow = "2px 4px 4px #000000";
        UtilService.DOM.$appendChildToElement('#page-header', headerLeft);
        let headerRight = UtilService.DOM.$createElement('div', {'id':'right-side', 'className':'padding-h-10 flex center'});
        UtilService.DOM.$appendChildToElement('#page-header', headerRight);
        let ponisti = UtilService.DOM.$createElement('span', {'id':'ponisti', 'className':'padding-h-20 padding-v-15 margin-h-5 uppercase', 'innerText':'Ponisti'});
        UtilService.DOM.$appendChildToElement('#right-side', ponisti);
        let sacuvaj = UtilService.DOM.$createElement('span', {'id':'sacuvaj', 'className':'padding-h-20 padding-v-15 border-radius-4 bg-info-3 margin-h-5 uppercase light-5', 'innerText':'Sacuvaj'});
        UtilService.DOM.$appendChildToElement('#right-side', sacuvaj);

        let mainContent = UtilService.DOM.$createElement('div', {'id':'main-content-wrapper', 'className':'row'});
        UtilService.DOM.$appendChildToElement('#mainPage', mainContent);
        let leftSide = UtilService.DOM.$createElement('div', {'id':'main-content-left', 'className':'column min-max-w-67perc'});
        UtilService.DOM.$appendChildToElement('#main-content-wrapper', leftSide);
        let formWrapper = UtilService.DOM.$createElement('div', {'id':'form-wrapper', 'className':'margin-20 padding-20 bg-light-5 border-radius-6'});
        UtilService.DOM.$appendChildToElement('#main-content-left', formWrapper);
        let naziv = UtilService.DOM.$createElement('span', {'id':'naziv', 'className':'padding-h-7 font-14 light-3', 'innerText':'Naziv'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', naziv);
        let podaci = UtilService.DOM.$createElement('div', {'id':'podaci', 'className':'row align-stretch padding-h-10 padding-v-5 margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4', 'innerText':'Unesite neophodne podatke'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', podaci);
        let opis = UtilService.DOM.$createElement('span', {'id':'opis', 'className':'padding-h-7 font-14 light-3', 'innerText':'Opis'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', opis);
        let podaci2 = UtilService.DOM.$createElement('div', {'id':'podaci2', 'className':'row align-stretch padding-h-10 padding-v-5 margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4row align-stretch padding-h-10 padding-v-5 h-200 margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4', 'innerText':'Unesite neophodne podatke'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', podaci2);
        let vrstaPodsjetnika = UtilService.DOM.$createElement('span', {'id':'vrsta', 'className':'padding-h-7 font-14 light-3', 'innerText':'Vrsta podsjetnika'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', vrstaPodsjetnika);
        let obavjestenjeWrapper = UtilService.DOM.$createElement('div', {'id':'obavjestenje-wrapper', 'className':'row align-stretch margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4 space-between'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', obavjestenjeWrapper);
        let obavjestenje = UtilService.DOM.$createElement('span', {'id':'obavjestenje', 'className':'padding-h-10 padding-v-5', 'innerText':'Obavjestenje'});
        UtilService.DOM.$appendChildToElement('#obavjestenje-wrapper', obavjestenje);
        let arrow = UtilService.DOM.$createElement('div', {'id':'arrow', 'className':'w-30 h-auto bg-theme-main-5'});
        UtilService.DOM.$appendChildToElement('#obavjestenje-wrapper', arrow);
        let zakazanoZa = UtilService.DOM.$createElement('span', {'id':'zakazanoZa', 'className':'padding-h-7 font-14 light-3', 'innerText':'Zakazano za'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', zakazanoZa);
        let datum = UtilService.DOM.$createElement('div', {'id':'datum', 'className':'row align-stretch margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4 space-between'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', datum);
        let datum2 = UtilService.DOM.$createElement('span', {'id':'datum2', 'className':'padding-h-10 padding-v-5', 'innerText':'Svaki dan'});
        UtilService.DOM.$appendChildToElement('#datum', datum2);
        let arrow2 = UtilService.DOM.$createElement('div', {'id':'arrow2', 'className':'w-30 h-auto bg-theme-main-5'});
        UtilService.DOM.$appendChildToElement('#datum', arrow2);
        let zakazanoVrijeme = UtilService.DOM.$createElement('span', {'id':'vrijeme', 'className':'padding-h-7 font-14 light-3', 'innerText':'Zakazano vrijeme'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', zakazanoVrijeme);
        let tacnoVrijeme = UtilService.DOM.$createElement('div', {'id':'tacnoVrijeme', 'className':'row w-33perc padding-h-10 padding-v-5 margin-t-5 margin-b-15 light-4 bg-light-2 border-2 border-theme-main-3-i border-radius-4', 'innerText':'13/7/2020 13:41'});
        UtilService.DOM.$appendChildToElement('#form-wrapper', tacnoVrijeme);
        let podsjetnik = UtilService.DOM.$createElement('div', {'id':'podsjetnik', 'className':'uppercase flex center theme-main-5 bold margin-20 padding-10 bg-light-5 border-radius-6', 'innerText':'Dodaj Podsjetnik'});
        UtilService.DOM.$appendChildToElement('#main-content-left', podsjetnik);

        let rightSide = UtilService.DOM.$createElement('div', {'id':'main-content-right', 'className':'column center w-100perc'});
        UtilService.DOM.$appendChildToElement('#main-content-wrapper', rightSide);
        let rightWrapper = UtilService.DOM.$createElement('div', {'id':'right-wrapper', 'className':'column center'});
        UtilService.DOM.$appendChildToElement('#main-content-right', rightWrapper);
        let zaKorisnika = UtilService.DOM.$createElement('p', {'id':'za-korisnika', 'className':'padding-10 theme-main-5', 'innerText':'Za Korisnika'});
        UtilService.DOM.$appendChildToElement('#right-wrapper', zaKorisnika);
        let pictureWrapper = UtilService.DOM.$createElement('div', {'id':'picture-wrapper', 'className':'relative flex center w-250 h-200 border-radius-6 background-size-cover bg-position-50-perc'});
        pictureWrapper.style.backgroundImage = 'url("https://trello-attachments.s3.amazonaws.com/5f02c0eeff71034fce9f2f54/5f0c8efa8634266cefa0a11f/568ef4633bf65dee13204339abb8042e/main-bg.jpg")'
        UtilService.DOM.$appendChildToElement('#right-wrapper', pictureWrapper);
        let bgPicture = UtilService.DOM.$createElement('div', {'id':'bg-picture', 'className':'absolute dimmed-background border-radius-6 w-100perc h-100perc no-repeat opacity-40 z-1'});
        UtilService.DOM.$appendChildToElement('#picture-wrapper', bgPicture);
        let pictureName = UtilService.DOM.$createElement('div', {'id':'picture-name', 'className':'flex center relative w-90perc h-90perc border-2 opacity-100 border-light-5-i border-radius-6 z-2'});
        UtilService.DOM.$appendChildToElement('#picture-wrapper', pictureName);
        let name = UtilService.DOM.$createElement('span', {'id':'name', 'className':'light-5 w-50perc bolder large-text', 'innerText':'Antonio Caravadgio'});
        UtilService.DOM.$appendChildToElement('#picture-name', name);


        






    }

    render() {
        return (<div id="practise" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Practise Page
            </div>

            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">

            </div>
        </div>);
    }
}