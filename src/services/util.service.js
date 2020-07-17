export const UtilService = {
    DOM: {
        demoSelectFunction: (selector) => {
            let element = false;

            if (selector) {
                element = document.querySelectorAll(selector);
            }
            
            return element;
        },
        selectDomElements: (selector) => {
            let element = false;
            
            if (typeof(selector)==='string' && selector.charAt(0)==='#') {
                selector = selector.substring(1);
                element = document.getElementById(selector);
            }
            if (typeof(selector)==='string' && selector.charAt(0)==='.') {
                selector = selector.substring(1);
                element = document.getElementsByClassName(selector);
            } else {
                element = document.querySelectorAll(selector);
            }
            
            return element;
        }
    }
};