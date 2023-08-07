import React, { useRef, useEffect } from "react";
import geoUrl from "../assets/Mapdata/world-countries-sans-antarctica.json";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // Import tippy styles

import usaFlag from "../assets/flags/usa.svg";
import chinaFlag from "../assets/flags/china.svg";
import ukFlag from "../assets/flags/uk.svg";
import brazilFlag from "../assets/flags/brazil.svg";
import denmarkFlag from "../assets/flags/denmark.svg";
import canadaFlag from "../assets/flags/canada.svg";
import russiaFlag from "../assets/flags/russia.svg";
import greenlandFlag from "../assets/flags/greenland.svg";
import uaeFlag from "../assets/flags/uae.svg";
import algeriaFlag from "../assets/flags/algeria.svg";

const markers = [
  { name: "USA", coordinates: [-95.7129, 37.0902], flag: usaFlag },
  { name: "China", coordinates: [104.1954, 35.8617], flag: chinaFlag },
  { name: "UK", coordinates: [-3.4359, 55.3781], flag: ukFlag },
  { name: "Brazil", coordinates: [-47.8825, -15.7942], flag: brazilFlag },
  { name: "Denmark", coordinates: [9.5018, 56.2639], flag: denmarkFlag },
  { name: "Canada", coordinates: [-106.3468, 56.1304], flag: canadaFlag },
  { name: "Russia", coordinates: [100, 60], flag: russiaFlag },
  { name: "Greenland", coordinates: [-41.3419, 74.7105], flag: greenlandFlag },
  { name: "UAE", coordinates: [54.3806, 24.5854], flag: uaeFlag },
  { name: "Algeria", coordinates: [2.6173, 28.1589], flag: algeriaFlag },
];

export default function MapChart() {
  const markersRef = useRef([]);

  useEffect(() => {
    // Initialize tooltips when the component mounts
    markersRef.current.forEach((marker) => {
      tippy(marker, {
        content: marker.dataset.name,
        arrow: true,
        placement: "top",
        animation: "scale",
      });
    });
  }, []);

  return (
    <ComposableMap className="md:mt-[-10px] lg:w-[70%] h-full md:mb-[-100px] mb-[-50px] md:block hidden">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="rgba(18, 134, 176, 0.51)" />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, flag }) => (
        <Marker key={name} coordinates={coordinates}>
          <g transform="translate(-12, -24)">
            {/* Custom marker SVG */}
            <circle cx="12" cy="10" r="6" fill="#FF5533" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" fill="#FF5533" />
          </g>
          {/* Custom tooltip */}
          <image
            xlinkHref={flag}
            x="-16"
            y="-32"
            height="30px"
            width="30px"
            ref={(el) => markersRef.current.push(el)} // Add the marker element to the ref
            data-name={name} // Set the country name as a data attribute
            style={{ pointerEvents: "none" }}
          />
        </Marker>
      ))}
    </ComposableMap>
  );
}
