import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        This is the contact page. Find me on{" "}
        <a
          href="https://www.linkedin.com/in/jamiemcneil/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        !
      </p>
    </Layout>
  )
}

export default ContactPage
