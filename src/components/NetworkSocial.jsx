import {FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/networksocial.sass"

const networkSocialCo = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
]

const NetworkSocial = () => {
    return <section id="social-networks">
    {networkSocialCo.map((network) => (
      <a href="#" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
}

export default NetworkSocial;