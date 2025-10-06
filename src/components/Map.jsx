import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
      center: [78.9629, 22.5937],
        scale: 1100
      }}
      style={{width:"100%" ,height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#ff8800cf"
        stroke="#000000"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.5775, 12.9629]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ff8800cf",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ff8800cf">
          {"Bangalore"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
