import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' icon={FiMail} />
        <Input placeholder='password' icon={FiLock} type="password" />

        <Button title={"Entrar"} />

        <a href="#">Criar conta</a>
      </Form>
    </Container>
  )
}
