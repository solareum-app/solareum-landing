import React from "react"

const SectionHeader = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: 'blue' }}>{description}</p>
  </>
)

export default SectionHeader
