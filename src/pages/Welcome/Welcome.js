import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppRouters } from '../../utils/AppNavigator';

class Welcome extends React.Component {

    style = {
        content: {
            fontSize: 18,
            color: 'black',
            padding: 4,
        },
        btnText: {
            fontSize: 22,
            color: 'black',
            padding: 4,
            color: 'green',
        },
        btnBg: {
            borderWidth: 1,
            borderColor: 'green',
            color: 'black',
            paddingHorizontal: 12,
            paddingVertical: 6,
        }
    }

    static navigationOptions = {
        title: '烟波钓叟歌',
    }

    render() {
        return <View>
            <View style={{ marginTop: 40, alignSelf: 'center' }}>
                <View style={{ padding: 8 }}>
                    <Text style={this.style.content}>阴阳顺逆妙难穷，二至还归一九宫</Text>
                    <Text style={this.style.content}>若能了达阴阳理，天地都在一掌中</Text>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={this.style.content}>轩辕黄帝战蚩尤，逐鹿经年苦未休</Text>
                    <Text style={this.style.content}>偶梦天神授符诀，登坛致祭谨虔修</Text>
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={this.style.content}>神龙负图出落水，彩凤衔书碧云里</Text>
                    <Text style={this.style.content}>因命风后演成文，遁甲奇门从此始</Text>
                </View>
            </View>
            <View style={{ marginTop: 40, alignSelf: 'center' }}>
                <TouchableOpacity onPress={() => {
                    console.log('jump')
                    this.props.navigation.navigate(AppRouters.Gong)
                }}>
                    <View style={this.style.btnBg}>
                        <Text style={this.style.btnText}>开启奇门局</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }
}

export { Welcome }