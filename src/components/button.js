import React from "react"

const Button = ({ children }) => (
  <button
    style={{
      padding: ".5rem 2.5rem",
      cursor: "pointer",
    }}
  >
    {children}
  </button>
)

export default Button
