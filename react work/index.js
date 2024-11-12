console.log("This is react work");
const parent = document.getElementById('root');
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h1 = React.createElement("h1", {style:{color:'cyan'}}, "ABES Engineering college" );
// const l1 = React.createElement("li", {}, "orange");
// const l2 = React.createElement("li", {}, "apple");
// const ul = React.createElement("ul", {style:{backgroundColor:'orange'}},l1,l2);
const element = <h1>Hello, world!</h1>;
const l1 = <li>Orange</li>;
const l2 = <li>apple</li>;
const ul=<ul>{l1}{l2}</ul>;
const container=(
    <div style={{backgroundColor:'orange'}}>
        <div>{element}</div>
        <div>
          {ul}
        </div>
    </div>
)

root.render(container);
