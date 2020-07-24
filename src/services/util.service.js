export const UtilService = {
    DOM: {
        // SELECTION & MANIPULATION
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
        $createNode: (stringHTML) => {
            let el = document.createElement('div');

            el.innerHTML = stringHTML;

            return el.children[0];
        },
        $appendChild: (parent, child) => {
            if (!parent) return;

            parent.appendChild(child);
        },
        $removeNode: (node) => {
            if (!node) return;

            node.parentNode.removeChild(node);
        },
        $insertBefore: (element, newElement) => {
            if (!element) return;

            element.parentNode.insertBefore(newElement, element);
        },
        $insertAfter: (element, newElement) => {
            if (!element) return;

            element.parentNode.insertBefore(newElement, element.nextSibling);
        },
        $checkExistingClass: (element, className) => {
            if (!element) return;

            return element.classList ?
                element.classList.contains(className) :
                new RegExp('\\b' + className + '\\b').test(element.className);
        },
        $addHTMLClass: (element, className) => {
            if (!element) return;

            const existingClass = UtilService.DOM.$checkExistingClass(element, className);

            if (existingClass) {
                return;
            }
            if (element.classList) {
                element.classList.add(className);
            } else {
                element.className += ' ' + className;
            }
        },
        $deleteHTMLClass: (element, className) => {
            if (!element) return;

            const existingClass = UtilService.DOM.$checkExistingClass(element, className);

            if (!existingClass) {
                return;
            }
            if (element.classList) {
                element.classList.remove(className);
            } else {
                element.className = element.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
            }
        },
        // EVENTS & HOOKS
        $onResize: (handler) => {
            window.onresize = function () {
                if (handler) handler();
            };
        },
        $onScroll: (handler, target) => {
            target = target ? target : window;

            UtilService.DOM.$on(target, 'scroll', (e) => {
                handler(e);
            });
        },
        $on: (target, event, handler) => {
            if (!target) return;

            if (target.addEventListener) {
                return target.addEventListener(event, handler, false);
            }
            if (target.attachEvent) {
                return target.attachEvent("on" + event, handler);
            }

            return target["on" + event] = handler;
        },
        $off: (target, event, handler) => {
            if (!target) return;

            if (target.addEventListener) {
                return target.removeEventListener(event, handler, false);
            }

            target.detachEvent('on' + event, handler);
        },
        $onPressEnter: (handler, target, throttleTimeout) => {
            function triggerHandler(e) {
                const keycode = (e.keyCode ? e.keyCode : e.which);

                if (keycode === 13) {
                    UtilService.DOM.$off(target, 'keypress', listener);
                    handler(e);
                }
            }

            target = target ? target : document;

            const listener = UtilService.DOM.$on(target, 'keypress', (e) => {
                UtilService.triggerCallbackOnlyOncePerPeriod('enterKeyPress', () => {
                    triggerHandler(e);
                }, throttleTimeout);
            });

            return listener
        },
        $onPageLeave: (callback) => {
            window.onbeforeunload = () => {
                if (callback) callback();
            };
        },
        $bindScript: (source, onload) => {
            const tag = document.createElement("script");

            tag.type = "text/javascript";

            if (onload) {
                tag.onload = onload;
            }

            tag.src = source;

            UtilService.DOM.$appendChild(UtilService.DOM.$getElement('head')[0], tag);
        },
        $bindStyleToHead: (css) => {
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');

            head.appendChild(style);
            style.type = 'text/css';

            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        },
    }
};