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
        $createElement: (element, content) => {
            let el = document.createElement(element);
            let elContent = document.createTextNode(content);
            el.appendChild(elContent);
            document.body.appendChild(el);
        },
        $appendChildToElement: (child, parent) => {
            let parentElement = document.querySelectorAll(parent);
            let childElement = document.createElement(child);
            childElement.innerHTML = '<div>Child Element</div>';
            parentElement[0].appendChild(childElement);
            return parentElement;
        },
        $setContent: (element, content) => {
            let el = document.querySelectorAll(element);
            let elContent = el[0].innerHTML = content;
        }
    }
};