import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.intro}>
        <h1>Contact</h1>
        <p>
          Would you like to hire me for your next project or just chat about web
          technologies? Drop me a message below and I'll get in touch with you
          as soon as possible!
        </p>
        <div className={contactStyles.contactRow}>
          <div className={contactStyles.form}>
            <h2>Get in Touch</h2>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={contactStyles.contactInput}
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={contactStyles.contactInput}
                />
              </p>
              <p>
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Drop Your Message"
                  className={contactStyles.contactInput}
                ></textarea>
              </p>
              <p>
                <button type="submit" className={contactStyles.contactSubmit}>
                  Send
                </button>
              </p>
            </form>
          </div>
          <div className={contactStyles.aroundTheWeb}>
            <h2>Around the Web</h2>
            <p>
              Github:{" "}
              <a
                href="https://github.com/mcneiljv"
                target="_blank"
                rel="noopener noreferrer"
              >
                mcneiljv
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/jamiemcneil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jamie McNeil
              </a>
            </p>
            <p>
              Codepen:{" "}
              <a
                href="https://codepen.io/mcneiljv"
                target="_blank"
                rel="noopener noreferrer"
              >
                mcneiljv
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
