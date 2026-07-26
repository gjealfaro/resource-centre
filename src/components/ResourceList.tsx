import { groupByCategory } from "../utils/groupByCategory";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "../types/Resource";

interface Props {
  resources: Resource[];
}

export function ResourceList({ resources }: Props) {
  const grouped = groupByCategory(resources);

  return (
    <>
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="card-grid">
            {items.map((item) => (
              <ResourceCard key={item.id} resource={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
