import React from "react"
import styled from "styled-components"
import { Layout } from "../layout/Layout"

import { Counter } from "../components/counter/Counter"

export default function Home() {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  )
}
