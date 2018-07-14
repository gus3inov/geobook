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

class Signup extends Component {
  handleSubmit = () => {

  }

  render() {
    const {handleSubmit} = this.props

    return (
      <Container>
        <Form style={styles.form}>
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
          <Field 
            name="confirmPassword"
            label="Повторите пароль"
            secureTextEntry 
            component={TextField} 
          />
        <Button
            style={styles.formSubmit}
            onPress={handleSubmit}
            full
          >
            <Text>
              { 'Создать аккаунт' }
            </Text>
          </Button>
          </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'signup'
})(Signup);
