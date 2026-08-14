import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const locations = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
];

const stats = [
  { value: "2026", label: "Trusted Since" },
  { value: "2M+", label: "Messages Delivered Daily" },
  { value: "50+", label: "Experts Behind Every Message" },
  { value: "24/7", label: "Dedicated Support" },
];

export const WorldMap: React.FC = () => {
  return (
    <section className="py-14 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Global <span className="text-emerald-600">Presence</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Our global services connect businesses and individuals across continents, ensuring your messages reach the right audience anywhere in the world.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [20, 15] }}
          width={980}
          height={520}
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.name !== "Antarctica")
                .map((geo) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-black text-slate-900">{stat.value}</p>
              <p className="text-slate-600 text-sm sm:text-base mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};