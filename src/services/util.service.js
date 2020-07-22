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
        $cloneElement: (selector) => {
            let el = document.querySelectorAll(selector);
            let clonedElement = el[0].cloneNode(true);
            clonedElement.removeAttribute('id');
            el[0].appendChild(clonedElement);
            return clonedElement;
        },
        $createElement: (el, attrs) => {
            let element = document.createElement(el);
            for (let val in attrs) {
                if (element.setAttribute) {
                    if (element[val] in element) {
                        element.setAttribute(val, attrs[val]);
                    } else {
                        element[val] = attrs[val];
                    }
                } else {
                    element[val] = attrs[val];
                }
            }
            return element;
        },
        $appendChildToElement: (parent, child) => {
            let parentElement = document.querySelectorAll(parent);
            parentElement[0].appendChild(child);
            return parentElement;
        },
        $setContent: (element, content) => {
            let el = document.querySelectorAll(element);
            let elContent = el[0].innerHTML = content;
        }
    }
};