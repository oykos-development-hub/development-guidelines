// External dependencies
import React from "react";
import ReactDOM from "react-dom";
// Internal dependencies
import * as serviceWorker from './serviceWorker';
import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("oykos-development-guidelines"));

serviceWorker.unregister();
