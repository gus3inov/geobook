import React, { Component } from 'react';
import {
  Form,
  Button,
  Container,
  Text,
} from 'native-base';
import { reduxForm, Field } from 'redux-form';
import Screen from '../../components/Screen';
import TextField from '../../components/TextField'
import styles from './styles';

class Login extends Component {
  render() {
    const {handleSubmit} = this.props

    return (
      <Container>
        <Form style={styles.form} onSubmit={handleSubmit}>
          <Field 
            name="username" 
            label="Логин" 
            component={TextField} 
          />
          <Field 
            name="password" 
            label="Пароль"
            secureTextEntry
            component={TextField} 
          />
        <Button
            style={styles.formSubmit}
            full
            action="submit"
            onPress={handleSubmit}
          >
            <Text>
              { 'Войти' }
            </Text>
          </Button>
          </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'auth',
})(Login);
