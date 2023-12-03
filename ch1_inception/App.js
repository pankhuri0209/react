const heading = React.createElement("h1", {}, "Learn React");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
