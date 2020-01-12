import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Oops!</h1>
      <p>Sorry, that page doesn't exist.</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
