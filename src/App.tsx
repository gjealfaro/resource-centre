import { useState } from "react";
import { ResourceList } from "./components/ResourceList";
import resourcesData from "./data/resources.json";
import type { Resource } from "./types/Resource";
import { filterResources } from "./utils/filterResources";

function App() {
  const [query, setQuery] = useState("");
  const filtered = filterResources(resourcesData as Resource[], query);

  return (
    <div>
      <h1>Resource Centre</h1>
      <input
        type="text"
        placeholder="Search by title or tag..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ResourceList resources={filtered} />
    </div>
  );
}

export default App;
