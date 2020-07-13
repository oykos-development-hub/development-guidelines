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

            <div id="mainPage" className="column align-stretch margin-v-40 margin-h-30">
                <ul className="large-text">
                    <li>Chapter #1 - Way of SCSS</li>
                </ul>

                <div id="margin-padding" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
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

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
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

                <div id="border-border-radius" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
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

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
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

                <div id="width-height" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Width & Height</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                For width and height we use class names:
                            </p>
                            <code className="margin-10">.width-[value]</code>
                            <code className="margin-10">.max-width-[value]</code>
                            <code className="margin-10">.min-width-[value]</code>
                            <code className="margin-10">.min-max-width-[value]</code>
                            <p>
                                We can also use short version of classes like:
                            </p>
                            <code className="margin-10">.w-[value], .max-w-[value], .min-w-[value], min-max-w-[value]</code>
                            <p>The same rules apply for height, except that you write <i>.height-[value]</i> or <i>.h-[value]</i> instead
                                of <i>.width-[value]</i> and <i>.w-[value]</i>.</p>
                            <span className="column">
                                <p>Available fixed values we use for width and height are: </p>
                                <code className="margin-10">
                                    30, 50, 80, 100, 130, 150, 180, 200, 250, 300, 350,
                                    500, 720, 960, 1280, 1600
                                </code>
                                <p>We can also use relative values and we write them in 2 forms:</p>
                                <code className="margin-10">.width-10-perc</code>
                                <code className="margin-10">.width-10perc</code>
                                <p>
                                    Relative values we use are:
                                </p>
                                <code className="margin-10">
                                    5%, 10%, 20%, 25%, 30%, 33%, 48%, 50%, 67%, 70%, 80%, 90%, 100%,
                                    120%, 150%, 200%
                                </code>
                            </span>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 min-max-width-50perc"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-40 padding-v-15 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.min-max-width-50perc</i>
                                </span>
                            </div>
                        </div>

                        <div className="flex center margin-20 h-300"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-v-60 margin-l-20 margin-r-20 padding-v-50 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.h-300</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="visibility-overflow" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Visibility & Overflow</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                Visibility can be set by using classes:
                            </p>
                            <code className="margin-10">.visible</code>
                            <code className="margin-10">.visibility-visible</code>
                            <code className="margin-10">.hidden</code>
                            <code className="margin-10">.visibility-hidden</code>
                            <p>
                                This sets visibility to <i>visible</i> or <i>hidden</i>
                            </p>
                            <p>
                                The overflow property
                                specifies what should happen if content overflows an element's box. Overflow is set by
                                using one of the following class names:
                            </p>
                            <code className="margin-10">.overflow-hidden</code>
                            <code className="margin-10">.overflow-auto</code>
                            <code className="margin-10">.overflow-scroll</code>
                            <code className="margin-10">.visibility-hidden</code>
                            <p>
                                We can also apply just horizontal or vertical overflow by using class
                                names:
                            </p>
                            <code className="margin-10">.overflow-x-auto</code>
                            <code className="margin-10">.overflow-y-auto</code>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 visible"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-40 padding-v-15 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.visible</i>
                                    <p>Change to <i>hidden</i> to hide the box</p>
                                </span>
                            </div>
                        </div>

                        <div className="column margin-20 overflow-auto max-h-200 max-w-300"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30 border-1 w-200"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>overflow-auto</i>
                                <p>adds a scrollbar if the content can't fit in a parent element</p>
                            </div>
                            <div className="column center margin-30 padding-30 border-1 w-200"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>overflow-auto</i>
                                <p>adds a scrollbar if the content can't fit in a parent element</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="opacity" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Opacity</li>
                        </ul>
                        <p>For setting opacity we write classes in four formats, for example .opacity-10,
                        .opacity-01, .opacity-10perc, .opacity-10-perc which sets opacity to 0.1 (opacity: 0.1).
                        We use values 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 where value 100 relates to
                                opacity:1 and all values are percents up to max value of 1. </p>
                        <div className="column align-stretch">
                            <p>
                                For setting opacity we write classes in four formats:
                            </p>
                            <code className="margin-10">.opacity-10</code>
                            <code className="margin-10">.opacity-01</code>
                            <code className="margin-10">.opacity-10perc</code>
                            <code className="margin-10">.opacity-10-perc</code>
                            <p>
                                This sets opacity to 0.1. We use values:
                            </p>
                            <code className="margin-10">
                                0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
                            </code>
                            <p>
                                Where value 100 relates to
                                <i>opacity:1</i> and all values are percents up to max value of 1.
                            </p>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 opacity-50"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 margin-40 padding-v-15 padding-h-15" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.opacity-50</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="position" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Position</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                For setting position we use one of the following class names:
                            </p>
                            <code className="margin-10">.relative</code>
                            <code className="margin-10">.position-relative</code>
                            <code className="margin-10">.pos-relative</code>
                            <p>
                                This sets position to relative. Other values we use are: <i>absolute</i>, <i>sticky</i>, <i>fixed</i> and <i>normal</i>
                            </p>
                            <p>
                                We can also set properties top, bottom, left and right with classes:
                            </p>
                            <code className="margin-10">.top/right/bottom/left-[value]</code>
                            <code className="margin-10">.position-top/right/bottom/left-[value]</code>
                            <code className="margin-10">.pos-top/right/bottom/left[value]</code>
                            <p>
                                We also use combined classes to easily determine both rules with one class. For example:
                            </p>
                            <code className="margin-10">.top-left-[value]</code>
                            <code className="margin-10">.position-top-left-[value]</code>
                            <code className="margin-10">.pos-top-left-[value]</code>
                            <p>
                                With combined classes we can also use shorter classes, for example instead of <i>top-left-[value]</i> you can write <i>t-l-[value]</i>
                            </p>
                            <p>
                                Values we use for position are combination of fixed (px) and relative (percent) values listed below
                            </p>
                            <code className="margin-10">
                                initial, 0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 100, 5%, 10%, 20%, 25%, 30%, 33%, 50%, 100%
                            </code>
                            <p>
                                When we use relative values we have two variants of class names, for example:
                            </p>
                            <code className="margin-10">.-[value]-perc (top-left-25-perc)</code>
                            <code className="margin-10">.-[value]perc (top-left-25perc)</code>
                        </div>
                    </div>
                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 relative h-300 w-500"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-1 border-1 absolute left-0 top-0" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.absolute</i>
                                    <i>.top-0</i>
                                    <i>.left-0</i>
                                </span>
                            </div>
                            <div className="column center grow-1 border-1 absolute center" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.absolute</i>
                                    <i>.center</i>
                                </span>
                            </div>
                            <div className="column center grow-1 border-1 absolute position-b-r-5perc" style={{ backgroundColor: "#bbb4b4" }}>
                                <span className="column center padding-v-15 padding-h-15 align-self-stretch border-1">
                                    <i>.absolute</i>
                                    <i>.position-b-r-5perc</i>
                                </span>
                            </div>
                        </div>
                        <div className="margin-20 w-500 h-300 border-1 overflow-auto w-300 relative"
                            style={{ backgroundColor: "#54ca54" }}>
                            <p>parent(relative)</p>
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                                voluptatibus.</p>
                            <div className="column center border-1 w-200 sticky top-0"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>sticky, top-0</i>
                                <p>The element is positioned based on the user's scroll position</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                                voluptatibus.</p>
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                                voluptatibus.</p>
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum,
                            altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
                                voluptatibus.</p>
                        </div>

                    </div>
                </div>

                <div id="z-index" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Z-index</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                To set Z-index we use classes:
                            </p>
                            <code className="margin-10">.z-[value]</code>
                            <code className="margin-10">.z-index-[value]</code>
                            <p>For negative values we use suffix  <i>-min-[value]</i> For example:</p>
                            <code className="margin-10">.z-min-1</code>
                            <code className="margin-10">.z-index-min-1</code>
                            <p>
                                sets z-index to -1.
                            </p>
                            <p>
                                Values we use are:
                            </p>
                            <code className="margin-10">
                                -1, 0, 1, 2, 3, 4, 5, 9, 99, 999, 9999, 999999
                            </code>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex flex-start margin-20 w-300 h-300 border-1 relative"
                            style={{ backgroundColor: "#54ca54" }}>
                            <i>z-index-min-1</i>
                            <div className="column center border-1 w-500 absolute top-left-0 z-min-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>z-1</i>
                                <i>z-index-1</i>
                            </div>
                        </div>

                        <div className="flex flex-start margin-20 w-300 h-300 border-1 relative"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center border-1 w-500 absolute top-left-0 z-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>z-1</i>
                                <i>z-index-1</i>
                                <p>sets z-index to 1 and shows this element on top of another</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="background" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Background</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                Here we use classes to set different properties: background-size, background-repeat and
                                background-position. To set background-size we use class names in 4 forms:
                            </p>
                            <code className="margin-10">.background-size-[value]-perc</code>
                            <code className="margin-10">.bg-size-[value]-perc</code>
                            <code className="margin-10">.background-size-[value]perc</code>
                            <code className="margin-10">.bg-size-[value]perc</code>
                            <p>
                                Values we use for background-size are:
                            </p>
                            <code className="margin-10">
                                contain, cover, 100%, 80%, 50%, 30%
                            </code>
                            <p>
                                To set background-repeat we use classes:
                            </p>
                            <code className="margin-10">.bg-repeat</code>
                            <code className="margin-10">.bg-no-repeat</code>
                            <code className="margin-10">.background-repeat</code>
                            <code className="margin-10">.background-no-repeat</code>
                            <p>
                                To set background-position we use class names:
                                .bg-position-30, .bg-pos-30 (background-position: 30px 30px;) We use values:
                            </p>
                            <code className="margin-10">.bg-position-[value]</code>
                            <code className="margin-10">.bg-pos-[value]</code>
                            <p>For example bg-pos-30 sets (<i>background-position: 30px 30px</i>)</p>
                            <p>We use values</p>
                            <code className="margin-10">
                                initial, 0, 10, 30, 50, 10%, 25%, 33%, 50%
                            </code>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div
                            className="flex flex-start margin-20 w-500 h-300 border-1 background-size-100perc"
                            style={{ backgroundImage: `url(${require("../img/court.jpg")})` }}>
                            <p className="bolder">Background size 100%</p>
                        </div>

                        <div
                            className="flex flex-start margin-20 w-500 h-300 border-1 background-size-30perc bg-repeat"
                            style={{ backgroundImage: `url(${require("../img/court.jpg")})` }}>
                            <p className="bolder">Background size 30%, bg-repeat</p>
                        </div>
                    </div>
                </div>

                <div id="fonts" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Fonts</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                With our classes we can set properties: font-size, text-transform, letter-spacing and
                                font-weight. For font-size we write classes as:
                            </p>
                            <code className="margin-10">.font-size-[value]</code>
                            <code className="margin-10">.font-[value]</code>
                            <p>
                                Values we use are:
                            </p>
                            <code className="margin-10">
                                8, 10, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 34, 38, 42, 46, 50, 55, 65, 70, 80, 100.
                            </code>
                            <p>
                                Also, some classes have lexical representation related to font-size
                                values:
                            </p>
                            <code className="margin-10">
                                small - 13, medium - 16, big- 20, large - 26, x-large - 34, xx-large - 46, gigant - 55
                            </code>
                            <p>For example, <i>.font-size-13, .font-13, .small-text ( font-size: 13px; )</i></p>
                            <p>
                                Rule text-transform can have values: <i>no</i>, <i>uppercase</i>, <i>lowercase</i> and is written in format:
                            </p>
                            <code className="margin-10">.no-text-transform</code>
                            <code className="margin-10">.text-transform-uppercase</code>
                            <code className="margin-10">.uppercase</code>
                            <code className="margin-10">.text-transform-lowercase</code>
                            <code className="margin-10">.lowercase</code>
                            <p>
                                For letter-spacing we use
                                classes:
                            </p>
                            <code className="margin-10">.letter-spacing-[value]</code>
                            <code className="margin-10">.letter-spacing-min-[value]</code>
                            <p>
                                Values we use are:
                            </p>
                            <code className="margin-10">
                                -1, -0.5, -0.2, 0, 0.5, 1, 1.5, 2, 3, 5
                            </code>
                            <p>
                                For font-weight we use classes:
                            </p>
                            <code className="margin-10">.light</code>
                            <code className="margin-10">.normal</code>
                            <code className="margin-10">.bold</code>
                            <code className="margin-10">.bolder</code>
                            <p>These classes set font-weight to values:</p>
                            <code className="margin-10">
                                100, 400, 700 and 900 in that order
                            </code>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-20 grow-1 padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 max-w-300 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>font-15, font-size-15, x-large</i>
                                <p className="x-large-text">This sets x-large text, 34px</p>
                                <p className="font-15">This is a font size of 15 px</p>
                            </div>
                        </div>
                        <div className="flex center margin-20 max-w-300 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>uppercase, text-transform-uppercase, lowercase, text-transform-lowercase</i>
                                <p className="uppercase">This transforms the text to uppercase</p>
                                <p className="text-transform-lowercase">THIS TRANSFORMS THE TEXT TO LOWERCASE</p>
                            </div>
                        </div>
                        <div className="flex center margin-20 max-w-300 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                                <i>.letter-spacing-2,.letter-spacing-min-1, .bolder, .light</i>
                                <p className="letter-spacing-2 bolder">This sets letterspacing to 2 and font-weight to
                                    bolder</p>
                                <p className="letter-spacing-min-1 light">This sets letterspacing to -1 and font-weight
                                    to light </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flexbox" className="row justify-start align-stretch padding-h-30">
                    <div id="left" className="border-r-1 min-max-w-50perc padding-h-20 padding-v-30">
                        <ul className="big-text">
                            <li>Flexbox</li>
                        </ul>
                        <div className="column align-stretch">
                            <p>
                                We use different class names for setting flexbox properties like flex-direction,
                                positioning items with justify-content and align-items and flex grow and shrink. To set
                                flex-direction we use classes:
                            </p>
                            <code className="margin-10">.flex</code>
                            <code className="margin-10">.row</code>
                            <code className="margin-10">.flex-row</code>
                            <p>
                                to set display to flex in default row direction. For setting flex direction to column we use classes:
                            </p>
                            <code className="margin-10">.column</code>
                            <code className="margin-10">.flex-column</code>
                            <code className="margin-10">.flex-col</code>
                            <p>
                                To set flex direction to row-reverse and column reverse we use
                                classes:  or  and .flex-column-reverse, .flex-col-reverse,
                                .column-reverse.
                            </p>
                            <code className="margin-10">.flex-row-reverse, .row-reverse</code>
                            <code className="margin-10">.flex-column-reverse, .flex-col-reverse, .column-reverse</code>
                            <p>
                                For positioning element we use classes: .center, .center-all,
                                .flex-center to center elements (justify-content: center; align-items: center).
                            </p>
                            <code className="margin-10">.center, .center-all, .flex-center</code>
                            <p>to center elements <i>(justify-content: center; align-items: center;)</i>.</p>
                            <code className="margin-10">.flex-start</code>
                            <code className="margin-10">.flex-end</code>
                            <p>
                                to position elements on flex start <i>(justify-content:
                                flex-start; align-items: flex-start)</i> or flex end <i>(justify-content: flex-end;
                                align-items: flex-end)</i>.
                            </p>
                            <p>
                                We can also use classes for justify-content and align-items
                                separately. Classes:
                            </p>
                            <code className="margin-10">.justify-center</code>
                            <code className="margin-10">.justify-start</code>
                            <code className="margin-10">.justify-end</code>
                            <code className="margin-10">.space-between</code>
                            <code className="margin-10">.space-around</code>
                            <p>
                                are used to set justify-content property to
                                center/start/end/space-between/space-around.
                            </p>
                            <p>
                                To align items we use classes:
                            </p>
                            <code className="margin-10">.align-start</code>
                            <code className="margin-10">.align-center</code>
                            <code className="margin-10">.align-end</code>
                            <p>
                                This sets align-items to: <i>(align-items: center/flex-start/flex-end;)</i>.
                            </p>
                            <p>
                                To set align-self we use classes: .align-self-center, .align-self-start, .align-self-end
                            </p>
                            <code className="margin-10">.align-self-center</code>
                            <code className="margin-10">.align-self-start</code>
                            <code className="margin-10">.align-end-end</code>
                            <p>
                                This sets align-self to: <i>(align-self: center/flex-start/flex-end;)</i>.
                            </p>
                            <p>
                                To set flex-grow and flex-shrink we use
                                classes:
                            </p>
                            <code className="margin-10">.flex-grow-[value]</code>
                            <code className="margin-10">.grow-[value]</code>
                            <code className="margin-10">.flex-shrink[value]</code>
                            <code className="margin-10">.shrink[value]</code>
                            <p>
                                where values can be:
                            </p>
                            <code className="margin-10">
                                0, 1, 2, 3, 4, 5.
                            </code>
                        </div>
                    </div>

                    <div id="right" className="column align-stretch justify-start padding-h-20 padding-v-30 grow-1">
                        <div className="flex center margin-20 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                        </div>
                        <div className="flex-col align-center justify-start margin-20 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                            <div className="column center w-100 h-100 margin-10 padding-10 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                        </div>
                        <div className="flex center  margin-20 w-500 h-200 border-1"
                            style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center grow-3 margin-10 padding-10 h-100 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                            <div className="column center grow-1 margin-10 padding-10 h-100 border-1"
                                style={{ backgroundColor: "#bbb4b4" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}