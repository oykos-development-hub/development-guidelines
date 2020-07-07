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
                <div id="mainPage" className="row">
                    <div id="left" className="column center grow-1 border-r-1 padding-h-20 margin-v-20">
                    <h1>Chapter #1 - Way of (S)CSS</h1>
                        <div className="column align-start">
                            <div>
                                <h2 className="padding-t-10">-Margin & Padding</h2>
                                <div className="width-500" >
                                    <p>For styling margins and padding we use different types of classes. We can use class name .margin-[value] which sets all margins to one of the predefined values. We can also style margins individualy (top,right,bottom,left) by using class name .margin-t/r/b/l-[value], or we can style horizontal(left,right) and vertical(top,bottom) margins by using class names .margin-h-[value] and .margin-v-[value]. The same rules apply for padding. Some of the values we use are 0,5,7,10,15,20,25,50...</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="padding-t-10">-Border & Border radius</h2>
                                <div className="width-500" >
                                    <p>For styling borders we use class name .border-[value] which sets the borders to the given value. We can also style top,right,bottom and left border by using class name .border-t/r/b/l-[value] or horizontal(left,right) and vertical(top,bottom) borders with class name .border-h-[value] or .border-v-[value]. Border radius applies curve effect on border. We can apply it by using class name .border-radius-[value], value can be fixed or relative(.border-radius-50perc) value. We can also apply border radius on border corners (top-left, top-right, bottom-left,bottom-right) by using class names: .border-radius-tl-[value] or .border-radius-top-left-[value]... We can also apply it by using class name .border-radius-diagonal-tl-br-[value] or .border-radius-top-left-bottom-right-[value] and .border-radius-tr-bl-[value] or .border-radius-top-right-bottom-left-[value]. </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="padding-t-10">-Width & Height radius</h2>
                                <div className="width-500" >
                                    <p>For width and height we use class names .width-[value], .w-[value], .max-width-[value], .max-w-[value], .min-width[value], .min-w[value], .min-max-width-[value] or .min-max-w-[value]. We can use fixed(px) or relative(%) values.All relative value classes have 2 forms: .min-max-width-25perc and .min-max-width-25-perc. The same rules apply for height. Fixed values are 30, 50, 80, 100, 130, 150, 180, 200, 250, 300, 350, 500, 720, 960, 1280, 1600 and
relative values are 5%, 10%, 20%, 25%, 30%, 33%, 48%, 50%, 67%, 70%, 80%, 90%, 100%, 120%, 150%, 200%</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="padding-t-10">-Visibility & Overflow</h2>
                                <div className="width-500" >
                                    <p>Visibility can be set by using two classes: .vissible which sets the property visibility to visible (visibility: visible), and .hidden which sets the visibility property to hidden (visibility: hidden).The overflow property specifies what should happen if content overflows an element's box. Overflow is set by using one of the following class names: .overflow-hidden, .overflow-auto, .overflow-scroll. We can also apply just horizontal or vertical overflow by using class names: .overflow-x-[value] and .overflow-y-[value] </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="padding-t-10">-Opacity</h2>
                                <div className="width-500" >
                                    <p>Visibility can be set by using two classes: vissible which sets the property visibility to visible (visibility: visible), and hidden which sets the visibility property to hidden (visibility: hidden).The overflow property specifies what should happen if content overflows an element's box. Overflow is set by using one of the following class names: overflow-hidden, overflow-auto, overflow-scroll. We can also apply just horizontal or vertical overflow by using class names: overflow-x-[value] and overflow-y-[value] </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="right" className="column justify-start align-center grow-2 margin-t-50">
                        <div className="flex center margin-t-20" style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30" style={{ backgroundColor: "#bbb4b4" }}>
                                <h3>margin-30</h3>
                                <p>sets all margins to 30px</p>
                            </div>
                        </div>
                        <div className="flex center margin-t-50" style={{ backgroundColor: "#54ca54" }}>
                            <div className="column center margin-30 padding-30 border-1" style={{ backgroundColor: "#bbb4b4" }}>
                                <h3>border-1</h3>
                                <p>sets a border: 1px solid #333</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}