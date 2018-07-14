import React from 'react';
import {
  Input,
  Label,
  Item,
  Text,
} from 'native-base';

const TextField = ({ input, label, secureTextEntry, type, meta: { touched, error, warning } }) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item error={hasError} floatingLabel>
        <Label>{ label }</Label>
        <Input
          secureTextEntry={secureTextEntry}
          {...input}
         />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }


export default TextField;
