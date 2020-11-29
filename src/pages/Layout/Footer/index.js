import React from 'react'
import { FaGithub, FaReact } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'

import { Container, Social } from './styles'

export default function Footer() {
  return (
    <Container>
      <Social>
        <a target="blank" href="https://github.com/FranciscoSanvicente/React-MLB-Info">
          <FaGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/francisco-sanvicente/"
        >
          <GrLinkedin />
        </a>
        <a target="blank" href="">
          <SiGmail />
        </a>
      </Social>
      <div>
        Hecho con amor en React 💙 <FaReact />
      </div>
    </Container>
  )
}
