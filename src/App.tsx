import { ResourceList } from "./components/ResourceList";
import resourcesData from "./data/resources.json";
import type { Resource } from "./types/Resource";

function App() {
  return (
    <div>
      <h1>Resource Centre</h1>
      <ResourceList resources={resourcesData as Resource[]} />
    </div>
  );
}

export default App;
