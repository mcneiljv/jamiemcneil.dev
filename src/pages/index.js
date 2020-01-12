import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi there.</h1>
      <h2>
        My name is Jamie McNeil, a front-end web developer from Philadelphia,
        Pennsylvania!
      </h2>
    </Layout>
  )
}

export default HomePage
