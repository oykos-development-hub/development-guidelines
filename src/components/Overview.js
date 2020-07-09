// External dependencies
import React from "react";


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="Overview" className="flex-column">
                <div id="header" className="row center border-b-1 padding-v-15 margin-h-20">Oykos Development Guidelines</div>
                <div id="mainPage" className="column align-start">
                    <h1>Chapter #1 - Way of (S)CSS</h1>
                    <div id="margin-padding" className="row flex-start padding-h-20 margin-t-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2 className="padding-t-10">-Margin & Padding</h2>
                            <div>
                                <p>For styling margins and padding we use different types of classes. We can use class name .margin-[value] which sets all margins to one of the predefined values. We can also style margins individualy (top,right,bottom,left) by using class name .margin-t/r/b/l-[value], or we can style horizontal(left,right) and vertical(top,bottom) margins by using class names .margin-h-[value] and .margin-v-[value]. The same rules apply for padding. Some of the values we use are 0,5,7,10,15,20,25,50...</p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-10 padding-10" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>margin-10,padding-10</h3>
                                    <p>sets all margins and padding to 10px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-v-10 margin-h-5 padding-v-10 padding-h-5" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>margin-v-10, margin-h-5/padding-v-10, padding-h-5</h3>
                                    <p>sets left&right margin and padding to 5px, top&bottom margin and padding to 10px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-t-5 margin-r-0 margin-b-5 margin-l-0 padding-t-5 padding-r-0 padding-b-5 padding-l-0" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>margin-t-5 margin-r-0 margin-b-5 margin-l-0</h3>
                                    <p>sets top margin to 5px,rigth to 0, bottom to 5px and left to 0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="border-border-radius" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Border & Border radius</h2>
                            <div>
                                <p>For styling borders we use class name .border-[value] which sets the borders to the given value. We can also style top,right,bottom and left border by using class name .border-t/r/b/l-[value] or horizontal(left,right) and vertical(top,bottom) borders with class name .border-h-[value] or .border-v-[value]. Border radius applies curve effect on border. We can apply it by using class name .border-radius-[value], value can be fixed or relative(.border-radius-50perc) value. We can also apply border radius on border corners (top-left, top-right, bottom-left,bottom-right) by using class names: .border-radius-tl-[value] or .border-radius-top-left-[value]... We can also apply it by using class name .border-radius-diagonal-tl-br-[value] or .border-radius-top-left-bottom-right-[value] and .border-radius-tr-bl-[value] or .border-radius-top-right-bottom-left-[value]. </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-radius-8" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>border-1, border-radius-8</h3>
                                    <p>sets a border: 1px solid #333</p>
                                    <p>border-radius-8 sets border-radius on all corners to 8px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-radius-tl-12 border-radius-tr-12" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-h-2 border-v-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>border-h-2,border-v-1,border-radius-tl-12,border-radius-tr-12</h3>
                                    <p>sets a top and bottom border: 1px solid #333 and left and rigth border to 2px solid #333</p>
                                    <p>border-radius-tl-12 and border-radius-tr-12 sets border radius on top-left and top-right corners to 12px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-radius-diagonal-tl-br-16" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-t-5 border-r-2 border-b-0 border-l-2" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>border-t-5,border-r-2,border-b-0,border-l-2, border-radius-diagonal-tl-br-16</h3>
                                    <p>sets a left and right border: 2px solid #333, top border to 5px solid #333 and bottom border to 0</p>
                                    <p>border-radius-diagonal-tl-br-16 sets radius on top-left and bottom-right corner to 16px</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="width-height" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 w-20perc">
                            <h2>-Width & Height</h2>
                            <div>
                                <p>For width and height we use class names .width-[value], .w-[value], .max-width-[value], .max-w-[value], .min-width[value], .min-w[value], .min-max-width-[value] or .min-max-w-[value]. We can use fixed(px) or relative(%) values.All relative value classes have 2 forms: .min-max-width-25perc and .min-max-width-25-perc. The same rules apply for height. Fixed values are 30, 50, 80, 100, 130, 150, 180, 200, 250, 300, 350, 500, 720, 960, 1280, 1600 and
relative values are 5%, 10%, 20%, 25%, 30%, 33%, 48%, 50%, 67%, 70%, 80%, 90%, 100%, 120%, 150%, 200%</p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 width-20-perc" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 height-100" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>height-100,max-w-300, width-20-perc</h3>
                                    <p>sets height to 100px </p>
                                    <p>sets width to 20% and max width to 300px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 min-max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>min-max-w-300</h3>
                                    <p>Sets min and max width to 300px</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="visibility-overflow" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Visibility & Overflow</h2>
                            <div>
                                <p>Visibility can be set by using classes: .visible or .visibility-visible which sets the property visibility to visible (visibility: visible), and .hidden or visibility-hidden which sets the visibility property to hidden (visibility: hidden).The overflow property specifies what should happen if content overflows an element's box. Overflow is set by using one of the following class names: .overflow-hidden, .overflow-auto, .overflow-scroll. We can also apply just horizontal or vertical overflow by using class names: .overflow-x-[value] and .overflow-y-[value] </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1 visible" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>visible, hidden</h3>
                                    <p>this box is now visible</p>
                                    <p>to hide it change class visible to hidden</p>
                                </div>
                            </div>
                            <div className="margin-t-20 margin-r-10 overflow-auto max-h-200 max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>overflow-auto</h3>
                                    <p>adds a scrollbar if the content can't fit in a parent element</p>
                                </div>
                                <div className="column center margin-30 padding-30 border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>overflow-auto</h3>
                                    <p>adds a scrollbar if the content can't fit in a parent element</p>
                                </div>
                            </div>
                            <div className="row margin-t-20 margin-r-10 overflow-x-scroll overflow-y-hidden max-h-300 max-w-300" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>overflow-x-scroll,overflow-y-hidden</h3>
                                    <p>adds a horizontal scrollbar</p>
                                    <p>hides a vertical scorllbar</p>
                                </div>
                                <div className="column center margin-30 padding-30 border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>overflow-x-scroll,overflow-y-hidden</h3>
                                    <p>adds a horizontal scrollbar</p>
                                    <p>hides a vertical scorllbar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="opacity" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 w-20perc">
                            <h2>-Opacity</h2>
                            <div>
                                <p>For setting opacity we write classes in four formats, for example .opacity-10, .opacity-01, .opacity-10perc, .opacity-10-perc which sets opacity to 0.1 (opacity: 0.1). We use values 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 where value 100 relates to opacity:1 and all values are percents up to max value of 1. </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1 opacity-50" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>opacity-50</h3>
                                    <p>sets opacity to 0.5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="position" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Position</h2>
                            <div>
                                <p>For setting position we use one of the following class names: .relative, .position-relative, .pos-relative, which sets the position property to relative(position: relative). Other values are: absolute, fixed and sticky. For setting the position to static we use these classes: .position-normal, .pos-normal, .position-default, .pos-default. We can also set properties top, bottom, left and right with class names: .top-[value], .position-top-[value], .pos-top-[value]( sets (top: [value]) )... where value can be fixed (initial, 0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 100), or relative (5%, 10%, 20%, 25%, 30%, 33%, 50%, 100%). When writing relative values classes use variants with -[value]-perc and -[value]perc (.top-[value]-perc, .top-[value]perc , .position-top-[value]-perc, .position-top-[value]perc...). We also use combined classes - .top-left, .top-right, .middle and similar to easily determine both rules with one class. For example: .top-left-10, .position-top-left-10, .position-t-l-10, .pos-top-left-10 sets top and left property to 10px ( top: 10px ; left:10px ) or .position-center, .position-middle, .pos-center, .pos-middle ( left: 50%; top: 50% ) </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 w-300 h-300 border-1 relative" style={{ backgroundColor: "#54ca54" }}>
                                <p>parent(relative)</p>
                                <div className="column center absolute left-0 top-0 border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>absolute, left-0, top-0</h3>
                                    <p>position-left-0, pos-left-0</p>
                                    <p>positons the element relative to its first parent(non static)</p>
                                </div>
                            </div>
                            <div className="margin-t-20 margin-r-10 w-300 h-300 border-1 overflow-auto w-300 relative" style={{ backgroundColor: "#54ca54" }}>
                                <p>parent(relative)</p>
                                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                                <div className="column center border-1 w-200 sticky top-0" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>sticky, top-0</h3>
                                    <p>The element is positioned based on the user's scroll position</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 w-300 h-300 border-1 fixed right-0 top-50 hidden" style={{ backgroundColor: "#54ca54" }}>
                                <p>parent(relative)</p>
                                <div className="column center border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>fixed, right-0 top-50</h3>
                                    <p>The element is positioned relative to the browser window</p>
                                </div>
                            </div>
                            <div className="margin-t-20 margin-r-10 w-300 h-300 border-1 relative" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column absolute position-b-r-10perc border-1 w-200" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>position-b-r-10perc, position-bottom-right-10perc</h3>
                                    <p>sets bottom and right to 10%</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 w-300 h-300 border-1 relative" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column border-1 w-200 absolute top-right-25" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>top-right-25, position-top-right-25, position-t-r-25, pos-top-right-25</h3>
                                    <p>sets top and right to 25px</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="z-index" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Z-index</h2>
                            <div>
                                <p>Our classes for setting z-index can have values: -1, 0, 1, 2, 3, 4, 5, 9, 99, 999, 9999, 999999. We write class in form: .z-[value], .z-index-[value] (.z-1 sets z-index: 1 ) For negative values we use suffix -min-[value] (.z-min-1, .z-index-min-1)</p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 w-300 h-300 border-1 relative" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column border-1 w-500 absolute top-left-0 z-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>z-1, z-index-1</h3>
                                    <p>sets z-index to 1 and shows this element on top of another</p>
                                    <p>change to z-min-1 to show the other element on top</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="background" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Background</h2>
                            <div>
                                <p>Here we use classes to set different properties: background-size, background-repeat and background-position. To set background-size we use class names in 4 forms: .background-size-80-perc, .background-size-80perc, .bg-size-80perc, .bg-size-80-perc. Values we use are: contain, cover, 100%, 80%, 50%, 30%. To set background-repeat we use classes: .bg-repeat, .background-repeat, .bg-no-repeat, .background-no-repeat(sets background-repeat: no-repeat;). To set background-position we use class names: .bg-position-30, .bg-pos-30 (background-position: 30px 30px;) We use values: initial, 0, 10, 30, 50, 10%, 25%, 33%, 50% </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">

                        </div>
                    </div>
                    <div id="fonts" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Fonts</h2>
                            <div>
                                <p>With our classes we can set properties: font-size, text-transform, letter-spacing and font-weight. For font-size we write classes as: .font-size-[value], .font-[value] where values can be: 8, 10, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 34, 38, 42, 46, 50, 55, 65, 70, 80, 100. Also, some classes have lexical representation related to font-size values ( small - 13, medium - 16, big- 20, large - 26, x-large - 34, xx-large - 46, gigant - 55 ), for example: .font-size-13, .font-13, .small-text ( font-size: 13px; ). Rule text-transform can have values: no, uppercase, lowercase and is written in format: .no-text-transform, .text-transform-uppercase, .uppercase ...  For letter-spacing we use classes: .letter-spacing-min-[value](example: .letter-spacing-min-05, .letter-spacing-min-0-5 sets ( letter-spacing: -0.5; )) if the value is negative and .letter-spacing-[value] for positive values. Values can be: -1, -0.5, -0.2, 0, 0.5, 1, 1.5, 2, 3, 5. For font-weight we use classes: .light, .normal, .bold, .bolder. which sets font-weight property to values:100,400,700 and 900 in that order (example: .bold ( font-weight: 700; ))</p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10">
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>font-15, font-size-15, x-large</h3>
                                    <p className="x-large-text">This sets x-large text, 34px</p>
                                    <p className="font-15">This is a font size of 15 px</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>uppercase, text-transform-uppercase, lowercase, text-transform-lowercase</h3>
                                    <p className="uppercase">This transforms the text to uppercase</p>
                                    <p className="text-transform-lowercase">THIS TRANSFORMS THE TEXT TO LOWERCASE</p>
                                </div>
                            </div>
                            <div className="flex center margin-t-20 margin-r-10 max-w-300 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                    <h3>letter-spacing-2,letter-spacing-min-1, bolder, light</h3>
                                    <p className="letter-spacing-2 bolder">This sets letterspacing to 2 and font-weight to bolder</p>
                                    <p className="letter-spacing-min-1 light">This sets letterspacing to -1 and font-weight to light </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="flexbox" className="row flex-start padding-h-20">
                        <div id="left" className="border-r-1 min-max-w-20perc">
                            <h2>-Flexbox</h2>
                            <div>
                                <p>We use different class names for setting flexbox properties like flex-direction, positioning items with justify-content and align-items and flex grow and shrink. To set flex-direction we use classes: .flex, .row, .flex-row to set display to flex in default row direction. For setting flex direction to column we use classes: .column, flex-column, .flex-col. To set flex direction to row-reverse and column reverse we use classes: .flex-row-reverse or .row-reverse and .flex-column-reverse, .flex-col-reverse, .column-reverse. For positioning element we use classes: .center, .center-all, .flex-center to center elements (justify-content: center; align-items: center). We use classes: .flex-start and .flex-end to position elements on flex start (justify-content: flex-start; align-items: flex-start) or flex end (justify-content: flex-end; align-items: flex-end). We can also use classes for justify-content and align-items separately. Classes: .justify-center, .justify-start, .justify-end, .space-between, .space-around are used to set justify-content property to center/start/end/space-between/space-around. To align items we use classes: .align-start, .align-center, .align-end  (align-items: flex-start/center/flex-end;). To set align-self we use classes: .align-self-center, .align-self-start, .align-self-end (align-self: center/flex-start/flex-end;). To set flex-grow and flex-shrink we use classes: .grow-[value], .flex-grow-[value] and .shrink-[value], .flex-shrink-[value] where values can be: 0, 1, 2, 3, 4, 5. On the right you can see examples for flex direction: row, column, flex, shrink and justify content and align items </p>
                            </div>
                        </div>
                        <div id="right" className="flex wrap justify-start align-start margin-h-10 margin-b-10">
                            <div className="flex center margin-t-20 margin-r-10 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                            </div>
                            <div className="flex-col flex-start margin-t-20 margin-r-10 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                            </div>
                            <div className="flex center w-500 h-100 margin-t-20 margin-r-10 border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center grow-3 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center grow-1 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                            </div>
                            <div className="flex flex-end margin-t-20 margin-r-10 w-500 h-500 space-around border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                            </div>
                            <div className="flex flex-start margin-t-20 margin-r-10 w-500 h-500 space-around border-1" style={{ backgroundColor: "#54ca54" }}>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                                <div className="column center w-100 h-100 margin-10 padding-10 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}