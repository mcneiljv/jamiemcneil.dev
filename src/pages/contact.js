import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p>
        This is the contact page. Find me on{" "}
        <a href="https://www.linkedin.com/in/jamiemcneil/" target="_blank">
          LinkedIn
        </a>
        !
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
