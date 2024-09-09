import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/styles.scss";


const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]





const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="container">
      <h1>
        Iverson #1
      </h1>
      <p>
        Technical specifications:
      </p>
      <ul>
        <li>Development and deployment for one (1) unique website splash page</li>
        <li>Optimization and responsive design implementation</li>
        <li>Built with React + Node.js</li>
        <li>Still confirming the hosting provider with the client</li>
        <li>
          Site needs to support a custom-styled form where a user can submit their name + email in order to join a mailing list
        </li>
        <li>The form data must be passed into a HubSpot form, which we will need to set up</li>
        <li>We'll also need to integrate Google Analytics to track traffic attribution</li>
        <li>No context on the site visual design right now, but it will likely require some light animation</li>
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
