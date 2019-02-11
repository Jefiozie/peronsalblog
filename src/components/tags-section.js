import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
const _ = require(`lodash`)

const TagsSection = ({ tags }) => {
  if (!tags) return null
  const tagLinks = tags.map((tag, i) => {
    const divider = i < tags.length - 1 && <span>{` | `}</span>
    return (
      <i
        class="fas fa-tag"
        style={{ color: `#2bbc8a`, padding: `4px` }}
        key={tag}
      >
        {`  `}
        {tag}
        {divider}
      </i>
    )
  })
  return (
    <em
      style={{
        ...scale(-1 / 5),
        display: `block`,
        marginBottom: rhythm(1),
      }}
    >
      {/* Tagged with  */}
      {tagLinks}
    </em>
  )
}

export default TagsSection
