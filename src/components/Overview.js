// External dependencies
import React from "react";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="Overview" className="flex-column">
            <div id="header" className="row center border-b-1 padding-v-40 margin-h-30 large-text bold">
                Oykos Development Guidelines
            </div>

            <div id="mainPage" className="column align-start margin-v-40 margin-h-30">
                <ul className="large-text">
                    <li>Chapter #1 - Way of SCSS</li>
                </ul>

                <div id="margin-padding" className="row justify-start align-stretch padding-h-30 margin-t-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-20">
                        <ul className="big-text">
                            <li>Margin & Padding</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                For styling margins and padding we use different combination of classes. See example below.
                            </p>
                            <code className="margin-10">.margin-[value]</code>
                            <p>
                                This sets all four margins to one of the predefined values.
                                We can also set margins individually (top, right, bottom, left) by using class
                                names...
                            </p>
                            <code className="margin-10">.margin-t/r/b/l-[value],
                                .margin-top/right/bottom/left-[value] </code>
                            <p>
                                We can style horizontal (left, right) and vertical (top, bottom) margins by using class
                                names...
                            </p>
                            <code className="margin-10">.margin-h-[value], .margin-v-[value],
                            .margin-horizontal-[value], .margin-vertical-[value]
                            </code>
                            <p>
                                The same rules apply for padding, except that you write <i>.padding-[value]</i> instead
                                of <i>.margin-[value]</i>.
                            </p>
                            <span className="margin-10">
                                <strong>Important notice! </strong>
                                <p>
                                    You can use short version of class name like <i>.margin-t-30</i>, or you can use long version like <i>.margin-top-30</i>.
                                    Same goes for <i>.padding-v-30</i> or writing longer version <i>.padding-vertical-30</i>.
                                </p>
                                <p>
                                    When it comes to writing relative values with percents, you can use class <i>.margin-l-5-perc</i> to set left margin to 5%. But also, you can use all four mentioned classes to achieve the same goal. <br /><br />
                                    <code className="margin-10">
                                        .margin-l-5-perc, .margin-left-5-perc, .margin-l-5perc, .margin-left-5perc
                                    </code>
                                </p>
                            </span>
                            <span className="column">
                                <p>Available values are combination of fixed (px) and relative (percent) values listed below.</p>
                                <code className="margin-10">
                                    0, 5, 7, 10, 13, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100
                                </code>
                                <code className="margin-10">
                                    2%, 3%, 5%, 10%, 20%, 25%, 30%, 33%, 50%, 100%
                                </code>
                            </span>
                        </div>

                    </div>

                    <div id="right" className="column align-stretch justify-start padding-20 grow-1">
                        <div className="flex center margin-20"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-40 padding-v-15 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.margin-40</i>
                                    <i>.padding-v-15</i>
                                    <i>.padding-h-15</i>
                                </span>
                            </div>
                        </div>

                        <div className="flex center margin-20"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-v-60 margin-l-20 margin-r-20 padding-v-50 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.margin-v-60</i>
                                    <i>.margin-left-20</i>
                                    <i>.margin-r-20</i>
                                    <i>.padding-v-50</i>
                                    <i>.padding-h-15</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="border-border-radius" className="row justify-start align-stretch padding-h-30 margin-t-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-20">
                        <ul className="big-text">
                            <li>Border & Border radius</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                For styling borders we use different combinations of classes. See example below.
                            </p>
                            <code className="margin-10">.border-[value]</code>
                            <p>
                                This sets the borders to the given
                                value.
                                We can also style top,right,bottom and left border by using class name
                            </p>
                            <code className="margin-10">.border-t/r/b/l-[value]</code>
                            <p>
                                We can style horizontal (left, right) and vertical (top, bottom) borders by using class
                                names...
                            </p>
                            <code className="margin-10">.border-h-[value], .border-v-[value]</code>
                            <span className="margin-10">
                                <strong>Border radius </strong>
                                <p>
                                    Border radius applies curve effect on
                                    border. We can apply it by using class name:
                                </p>
                                <code className="margin-10">.border-radius-[value]</code>
                                <p>
                                    We can also apply border radius on border
                                    corners (top-left, top-right, bottom-left,bottom-right) by using classes:
                                </p>
                                <code className="margin-10">.border-radius-top-left-[value]</code>
                                <p>or on diagonals by using classes:</p>
                                <code className="margin-10">.border-radius-diagonal-top-left-bottom-right-[value]</code>
                                <p>
                                    You can also use short version of class name like:
                                </p>
                                <code className="margin-10">.border-radius-tl-[value]</code>
                                or <code className="margin-10">.border-radius-diagonal-tl-br-[value]</code>.
                            </span>
                            <span className="column">
                                <p>Available values we use for borders are: </p>
                                <code className="margin-10">
                                    0, 1, 2, 5 , none
                                </code>
                                <p>And for border radius:</p>
                                <code className="margin-10">
                                    4, 6, 8, 12, 16, 30 and relative value of 50%
                                </code>
                            </span>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-20 grow-1">
                        <div className="flex center margin-20"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-40 padding-v-15 padding-h-15 border-h-1 border-v-2" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.border-1</i>
                                    <i>.padding-h-1</i>
                                    <i>.padding-v-2</i>
                                </span>
                            </div>
                        </div>

                        <div className="flex center margin-20 border-radius-diagonal-tr-bl-16"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-v-60 margin-l-20 margin-r-20 padding-v-50 padding-h-15 border-radius-tl-6 border-radius-bottom-right-6" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1 border-radius-4">
                                    <i>.border-radius-4</i>
                                    <i>.border-radius-tl-6</i>
                                    <i>.border-radius-bottom-right-6</i>
                                    <i>.border-radius-diagonal-tr-bl-16</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>);
    }
}