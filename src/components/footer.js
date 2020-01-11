import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <footer>
        <p>
          Created by{" "}
          <a
            href="https://github.com/mcneiljv"
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.site.siteMetadata.author}
          </a>
          , © 2020.
        </p>
      </footer>
    </div>
  )
}

export default Footer
