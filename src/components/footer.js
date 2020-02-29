import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.copyright}>
          <p>Created by {data.site.siteMetadata.author}, © 2020.</p>
        </div>
        <div className={footerStyles.social}></div>
      </footer>
    </div>
  )
}

export default Footer
