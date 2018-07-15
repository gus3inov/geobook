import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Text } from "native-base";
import { reduxForm, Field } from "redux-form";
import { moduleName } from "../../ducks/auth";
import Screen from "../../components/Screen";
import TextField from "../../components/TextField";
import styles from "./styles";

class Login extends Component {
  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Container>
        <Form style={styles.form} onSubmit={handleSubmit}>
          <Field name="username" label="Логин" component={TextField} />
          <Field
            name="password"
            label="Пароль"
            secureTextEntry
            component={TextField}
          />
          {error ? (
            <Container
              style={{
                marginTop: 20
              }}
            >
              <Text
                style={{
                  color: "red"
                }}
              >
                Ошибка ввода логина или пароля !
              </Text>
            </Container>
          ) : (
            false
          )}

          <Button
            style={styles.formSubmit}
            full
            action="submit"
            onPress={handleSubmit}
          >
            <Text>{"Войти"}</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: "auth"
})(
  connect(state => {
    return {
      error: state[moduleName].error
    };
  })(Login)
);
