import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <p>{data.site.siteMetadata.person.name}</p>
      {data.site.siteMetadata.complexData.map((item, index) => {
        return (
          <p key={index}>
            Name: {item.name} Age: {item.age}
          </p>
        )
      })}
    </div>
  )
}

export default ComponentName
