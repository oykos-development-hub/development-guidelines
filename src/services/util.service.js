export const UtilService = {
    DOM: {
        demoSelectFunction: (selector) => {
            let element = false;

            if (selector) {
                element = document.querySelectorAll(selector);
            }
            
            return element;
        }
    }
};