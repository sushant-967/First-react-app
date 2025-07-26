import React from "react";
import ReactDOM from "react-dom/client";
const x=25;
function Heading(){
    return <h1>you are great</h1>
};
const AnotherFunctionComponent=()=>(
    <h1>Testing another function component, nested bhai</h1>
)
const ReactFunctionComponent=()=>(
    <div>
          <h3>i am a react function componenet</h3>
          <AnotherFunctionComponent/>
          
        <h4>I am also there</h4>
    </div>
  
);
const elem=<span> i am react element</span>;
const nestedheading=(
        <div>
        <h1>you are doing well sushant</h1>
        <h2>My age is : {x}</h2>
        <Heading />
        {elem}
        {<ReactFunctionComponent/>}
        </div>
    
);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedheading);





































// const heading=<h1>Now you have written JSX</h1>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);