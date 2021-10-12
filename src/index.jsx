import { createServer } from "miragejs";
import ReactDOM from "react-dom";
import { App } from "./App";
import { locations } from "./services/locations.js";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/locations", () => {
      return locations;
    });
  },
});

ReactDOM.render(<App />, document.querySelector("#root"));
