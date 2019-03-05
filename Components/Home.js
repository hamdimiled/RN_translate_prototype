import React from "react";
import { Container, Body, Content,Text, Card, CardItem,Button,View } from "native-base";
import HeaderBar from "./HeaderBar";
import { withNamespaces } from 'react-i18next';
import {StyleSheet, ImageBackground, Image} from 'react-native';

 class Home extends React.Component {
    render() {
        const { t,i18n } = this.props;
        return (
            <Container >
                <ImageBackground source={require('../assets/home_bg_1.png')} style={{flex:1,resizeMode: "cover"}}>
                <HeaderBar title={"home Screen"} navigation={this.props.navigation} />
                <Content contentContainerStyle={styles.ws_content} padder>
                    <View style={styles.ws_row}>
                    <Image
                        style={styles.ws_weather_img}
                        source={require('../assets/weather_img.png')}
                    />
                    </View>
                    <View style={styles.ws_row_center}>
                        <Image
                            style={styles.ws_weather_img}
                            source={require('../assets/weather_img.png')}
                        />
                    </View>
                    <View style={styles.ws_row}>
                        <Image
                            style={styles.ws_weather_img}
                            source={require('../assets/weather_img.png')}
                        />
                    </View>

                    {/*<Card>
                       <CardItem>
                            <Body>
                            <Text>{t('common:welcome')}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        onPress={() => {
                            i18n.changeLanguage('en');
                        }}
                    >
                        <Text>{t('common:action.toggleLang')}</Text>
                    </Button>*/}
                </Content>
                </ImageBackground>
            </Container>
        );
    }
}
export default withNamespaces(['common'], { wait: true })(Home);
const styles = StyleSheet.create({
    nws_weather_img:{
    },
    ws_row:{
        flex:1,
        justifyContent:"center"
    },
    ws_row_center:{
        flex:2,
        justifyContent:"flex-start"
    },
    ws_content:{
        flex:1
    }
});