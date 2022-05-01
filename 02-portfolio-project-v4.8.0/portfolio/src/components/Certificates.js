import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import experience from "../constants/experience"
import education from "../constants/education"
import certificates from "../constants/certificates"

const Certificates = () => {
  const [certIndex, setCertIndex] = React.useState(0)

  const { id, awardedBy, shortName, certs } = certificates[certIndex]

  console.log("certs", certificates)

  return (
    <section className="section jobs" style={{ paddingTop: "0rem" }}>
      <Title title="certifications" />
      <div className="jobs-center">
        <div className="btn-container">
          {certificates.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  index === certIndex ? "job-btn active-btn" : "job-btn"
                }
                onClick={() => setCertIndex(index)}
              >
                {item.shortName}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{awardedBy}</h3>

          {certs.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>
                  {item.name} earned in {item.dateString} (view{" "}
                  <a href={item.url} target="_blank">
                    here
                  </a>
                  )
                </p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Certificates
