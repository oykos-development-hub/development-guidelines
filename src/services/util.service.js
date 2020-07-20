export const UtilService = {
    DOM: {
        $getElement: (selector) => {
            let element = false;
            const selectorType =
                selector[0] === '*' ? 'QUERY' :
                    selector[0] === '#' ? 'ID' :
                        selector[0] === '.' ? 'CLASS' : 'TAG';

            switch (selectorType) {
                case 'ID':
                    selector = selector.replace('#', '');
                    element = document.getElementById(selector);

                    break;
                case 'CLASS':
                    selector = selector.replace('.', '');
                    element = document.getElementsByClassName(selector);

                    break;
                case 'TAG':
                    element = document.getElementsByTagName(selector);

                    break;
                case 'QUERY':
                    selector = selector.substr(1);
                    element = document.querySelectorAll(selector);

                    break;
            }

            return element;
        },
    }
};