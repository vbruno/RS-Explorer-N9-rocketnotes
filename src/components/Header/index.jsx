import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="http://github.com/vbruno.png" alt="Foto do usuário" />

        <div>
          <span>
            Bem-vindo
          </span>
          <strong>
            Bruno S. Velho
          </strong>
        </div>
      </Profile>

    </Container>
  )
}
