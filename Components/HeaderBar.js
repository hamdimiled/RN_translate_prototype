import React from "react";
import {Body, Button,Header, Icon, Left, Right, Title} from "native-base";
import {StyleSheet,Image} from 'react-native';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <Header transparent >
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Image
                            style={styles.nav_menu}
                            source={require('../assets/nav_menu.png')}
                        />
                    </Button>
                </Left>
                <Right>

                    <Button
                        transparent
                      >
                        <Icon  style={styles.add_btn} name="add" />
                    </Button>
                </Right>
            </Header>
        );
    }
}
const styles = StyleSheet.create({
    nav_menu:{
        width: 36,
        height:10
    },
    add_btn:{
        color:"#FAD20C"
    }

});