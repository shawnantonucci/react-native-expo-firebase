import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSwV-fpRnXfgrpzQtBKiaB3JzqDlTY3SI",
  authDomain: "rn-expo-firebase.firebaseapp.com",
  databaseURL: "https://rn-expo-firebase.firebaseio.com",
  projectId: "rn-expo-firebase",
  storageBucket: "rn-expo-firebase.appspot.com"
};

firebase.initializeApp(firebaseConfig);

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect={false} autoCapitalize="none" />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Button style={{ marginTop: 10 }} full rounded success>
            <Text>Login</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});
