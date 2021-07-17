import React from 'react'
import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

const Marks = ({ data: { countries, interiors } }) => (
  <g className="marks">
    <path //
      // key={feature.id}
      d={path({ type: 'Sphere' })}
      className="sphere"
    />
    {countries.features.map((feature) => (
      <path //
        // key={feature.id}
        d={path(feature)}
        className="country"
      />
    ))}

    <path //
      // key={feature.id}
      d={path(interiors)}
      className="interiors"
    />
  </g>
)

export default Marks
