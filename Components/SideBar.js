import React from "react";
import { AppRegistry, ImageBackground ,Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Settings"];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={require('../assets/drawer-cover.png')}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Image
                            square
                            style={{ height: 80, width: 70 }}
                            source={require('../assets/logo.png')}
                         />
                    </ImageBackground >
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}