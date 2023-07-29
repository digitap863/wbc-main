import React from "react"
import geoUrl from '../assets/Mapdata/world-countries-sans-antarctica.json'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

// const geoUrl = "../assets/Mapdata/world-countries-sans-antarctica.json"

export default function MapChart() {
  return (
    <ComposableMap className="mt-[-50px] h-[565px] w-[1150px]">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="rgba(18, 134, 176, 0.51)" />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
