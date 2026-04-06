import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const element = (<p className="para">This is a paragraph</p>)

//Functional component without reutrn
const Heading = () => (
    <h1 className="heading">This is JSX heading</h1>
);

//Functional component with return
const SubHeading = () => {
    return <h2 className="subheading">This is my subheading</h2>
}

//Component Composition
const BaseComponent = () => (
    <div>
        <Heading />
        <SubHeading />
    </div>
);

const heading = React.createElement("h1", {}, "This is header");
const subheading = React.createElement("h2", {}, "This is subheading");

const head = (
    <h1>Heading using JSX</h1>
);

const HeadComponent = () => (
    <div>
        <h1>Heading using functional component</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, quam explicabo. Illum delectus, dolor iure voluptates aliquid consectetur tenetur porro, eius voluptatum quam ipsam ea nobis natus facilis culpa officiis!</p>
    </div>
);

const Section = () => (
    <div className="div">
        <HeadComponent />
        <BaseComponent/>
    </div>
);

// Functional Component
const Comp = () => (
    <div className="container">
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <input type="search" name="" id="" />
        </div>
        <div>
            <h2>User Icon</h2>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Comp />);