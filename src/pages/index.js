import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"
import jamie from "../images/jamie.jpg"
import GitHubButton from "react-github-btn"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Jamie McNeil" />
      <div className={indexStyles.row}>
        <div className={indexStyles.about}>
          <div className={indexStyles.avatar}>
            <img src={jamie} alt="Placeholder" />
          </div>
          <div className={indexStyles.social}>
            <GitHubButton href="https://github.com/mcneiljv" data-size="large">
              mcneiljv
            </GitHubButton>
          </div>
        </div>
        <div className={indexStyles.bio}>
          <h1>Hi there.</h1>
          <h2>
            My name is Jamie McNeil, a front-end web developer living in
            beautiful Philadelphia, Pennsylvania!
          </h2>
          <p>
            I strive to create designs that are user-friendly and beautiful
            while successfully appealing to a target audience. I believe it is
            important to increase brand awareness, enhance public relations, and
            drive leads through the use of web development and social media
            content. I’m truly passionate about my work and always eager to
            connect with other developers and social media specialists.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
