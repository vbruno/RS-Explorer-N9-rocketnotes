import { Container, Form } from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/"> voltar</a>
          </header>

          <Input placeholder="Título" type="text" />
        </Form>
      </main>
    </Container>
  )
}
