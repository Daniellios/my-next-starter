import Theme from "../styles/theme"
import React, { Component } from "react"

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
