import {
  Container,
  Grid,
  Header,
  Image,
  Segment,
  Form,
} from "semantic-ui-react";

import soapLogo from "../../SOAP-logo.png";
import "./login.scss";
import "../common-styles/card.scss";

export default function Login() {
  return (
    <Container>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src={soapLogo} /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
