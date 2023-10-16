import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Section } from '../components/Section'

import { Container, Links } from './styles'



export function Details() {
  return (
    <Container>
      <Header />

      <Section title={'Links úteis'}>
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br'</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br'</a>
          </li>

        </Links>
      </Section>

      <Button title={'Voltar'} />
    </Container>
  )
}
