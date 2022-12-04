import "./App.css";
import { User } from "./components/User";
import { Resource } from "./components/Resource";
import { ResourceFn } from "./components/ResourceFn";

function App() {
  return (
    <>
      {/* <User /> */}
      {/* <Resource resource={"table/5"} /> */}
      <ResourceFn userId="2" />
    </>
  );
}

export default App;
