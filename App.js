const parent=React.createElement("div",{id:"parent"},
React.createElement("h1",{},"I am a h1 tag"));
console.log(parent);
const heading=React.createElement("h1",{id:"heading"},"Hello World from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);