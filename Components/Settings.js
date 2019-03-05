import React from "react";
import { StatusBar } from "react-native";
import {Body, Card, CardItem, Container, Content, Text} from "native-base";
import HeaderBar from "./HeaderBar";
import { withNamespaces } from 'react-i18next';

class Settings extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <Container>
                <HeaderBar title={"settings Screen"} navigation={this.props.navigation} />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>{t('common:welcome')}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default withNamespaces(['common'], { wait: true })(Settings);