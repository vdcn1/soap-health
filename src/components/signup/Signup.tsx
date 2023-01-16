import InputMask from "react-input-mask";
import { Controller, Field, FieldValues, useForm } from "react-hook-form";
import {
  Form,
  Grid,
  Segment,
  Header,
  Image,
  Container,
  Button,
} from "semantic-ui-react";

import "../common-styles/card.scss";
import soapLogo from "../../SOAP-logo.png";

export default function SignUp() {
  type FieldValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };

  const emailRegExp: RegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="blue" textAlign="center">
              <Image src={soapLogo} /> Sign up
            </Header>
            <Form size="large" onSubmit={handleSubmit(onSubmit)}>
              <Segment>
                <Controller
                  control={control}
                  name="firstName"
                  rules={{ required: true }}
                  render={({ field, formState }) => (
                    <Form.Input
                      {...field}
                      {...formState}
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="First Name"
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, formState }) => (
                    <Form.Input
                      {...field}
                      {...formState}
                      fluid
                      icon="user"
                      iconPosition="left"
                      type="text"
                      placeholder="Last Name"
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field, formState }) => (
                    <InputMask
                      mask="(99) 99999-9999"
                      type="tel"
                      placeholder="(99) 99999-9999"
                      {...field}
                      {...formState}
                    >
                      <Form.Input
                        fluid
                        error={
                          errors.phone && {
                            content: "Please enter a valid phone",
                            pointing: "below",
                          }
                        }
                        icon="phone square"
                        iconPosition="left"
                      ></Form.Input>
                    </InputMask>
                  )}
                ></Controller>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, pattern: emailRegExp }}
                  render={({ field, formState }) => (
                    <Form.Input
                      {...field}
                      {...formState}
                      fluid
                      icon="envelope outline"
                      iconPosition="left"
                      type="text"
                      placeholder="E-mail"
                      error={
                        errors.email && {
                          content: "Please enter a valid email address",
                          pointing: "below",
                        }
                      }
                    />
                  )}
                ></Controller>
              </Segment>
              <Button
                fluid
                primary
                type="submit"
                name="Register"
                disabled={!isValid}
              >
                Proceed
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
