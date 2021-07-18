import React from 'react'
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const Marks = ({ worldAtlas: { land, interiors }, cities }) => (
  <g className="marks">
    <path //! sphere
      // key={feature.id}
      d={path({ type: 'Sphere' })}
      className="sphere"
    />

    <path //! graticules
      // key={feature.id}
      d={path(graticule())}
      className="graticules"
    />

    {land.features.map((feature) => (
      <path // countries
        // key={feature.id}
        d={path(feature)}
        className="land"
      />
    ))}

    <path // land borders
      // key={feature.id}
      d={path(interiors)}
      className="interiors"
    />

    {cities.map((d) => {
      const [x, y] = projection([d.lng, d.lat])

      return <circle cx={x} cy={y} r={1.5} />
    })}
  </g>
)

export default Marks
