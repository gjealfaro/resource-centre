import { useState } from "react";
import { ResourceList } from "./components/ResourceList";
import resourcesData from "./data/resources.json";
import type { Resource } from "./types/Resource";
import { filterResources } from "./utils/filterResources";
import { sortByDate } from "./utils/sortByDate";

function App() {
  const [query, setQuery] = useState("");
  const [sortEnabled, setSortEnabled] = useState(false);

  let displayed = filterResources(resourcesData as Resource[], query);
  if (sortEnabled) {
    displayed = sortByDate(displayed);
  }

  return (
    <div className="app">
      <header className="site-header">
        <img
          src="/wisdom-wellbeing-transparent.png"
          alt="Wisdom Wellbeing"
          className="logo"
        />
        <h1>Resource Centre</h1>
      </header>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={sortEnabled}
            onChange={(e) => setSortEnabled(e.target.checked)}
          />
          Sort by most recent
        </label>
      </div>
      <ResourceList resources={displayed} />
    </div>
  );
}

export default App;
