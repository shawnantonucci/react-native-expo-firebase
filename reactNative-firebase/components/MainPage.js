import React from "react";
import { StyleSheet, Text, View, StatusBar, ListView } from "react-native";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  Icon,
  ListItem,
  List
} from "native-base";

const data = ["Shawn", "Crystal"];

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      listViewData: data,
      newContact: ""
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Content>
            <Item>
              <Input placeholder="Add name" />
              <Button>
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>

        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data => (
              <ListItem>
                <Text>{data}</Text>
              </ListItem>
            )}
            renderLeftHiddenRow={data => (
              <Button full>
                <Icon name="information-circle" />
              </Button>
            )}
            renderRightHiddenRow={data => (
              <Button full danger>
                <Icon name="trash" />
              </Button>
            )}
            leftOpenValue={-75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
