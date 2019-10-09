import React from 'react';
import imageSource from '../shared/images/sunglasses-guy.jpg'
// import imageSource from 'https://robohash.org/88.130.49.243.png'
import "./layoutDemo.css"

function LayoutDemoComtainer() {

    const demo_container = {
        display: "grid"
    }
    const item_1_styles = {
        color: "black",
        backgroundColor: "blue"
    }
    const item_2_styles = {
        color: "black",
        backgroundColor: "grey"
    }
    const footerStyle = {
        color: "black",
        backgroundColor: "black"
    }

    return (


        <div className="demo-container" style={demo_container}>


            <div className="demo-item-container" style={item_1_styles}>
                <div className="demo-item1-title title">Title 1</div>
                <div className="demo-item1-content content">Content 1</div>
            </div>
            <div className="demo-item-container" style={item_2_styles}>
                <div className="demo-item2-title title">Title 2</div>
                <div className="demo-item2-content content">
                    <img className="demo-image" src="https://robohash.org/Dmitri%20the%20Destroyer"></img>
                    <div className="main-list-container">
                        <ul className="main-list">
                            {
                                new Array(10).fill(1).map(item => <li key={item}>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-container" style={footerStyle}>
            </div>
        </div>
    );
}

export default LayoutDemoComtainer;
