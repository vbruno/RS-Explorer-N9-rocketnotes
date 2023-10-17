import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
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

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}
