import { useState } from "react";

export default function Portfolio() {
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="flex">
        {filtersOpen && (
          <div className="bg-red-500">
            <div>Filters</div>
          </div>
        )}
        <div className="bg-blue-200">
          <div
            className="cursor-pointer"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            Open Filters
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
            <div className="h-40 w-40 border-2 border-black rounded-md p-2">
              Portfolio Tile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
