import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { name: "IND (India)", coordinates: [78.9629, 20.5937] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
];

export const WorldMap: React.FC = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Global <span className="text-emerald-600">Presence</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Direct interconnects and global carrier hubs across major international telecommunication routes.
        </p>
      </div>

      <div className="relative w-full bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 overflow-hidden shadow-xs">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 120, center: [20, 20] }}
          className="w-full h-auto max-h-[500px]"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e2e8f0"
                  stroke="#cbd5e1"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#10b981", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates as [number, number]}>
              <circle r={6} fill="#10b981" className="animate-ping opacity-75" />
              <circle r={5} fill="#059669" stroke="#ffffff" strokeWidth={1.5} />
              <text
                textAnchor="middle"
                y={-14}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "10px",
                  fontWeight: "bold",
                  fill: "#0f172a",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </section>
  );
};