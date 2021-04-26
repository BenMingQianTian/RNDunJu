import React from 'react';
import { View, Text, TouchableOpacity, Animated, ImageBackground, TouchableHighlight } from 'react-native';
import { AppRouters } from '../../utils/AppNavigator';

class Welcome extends React.Component {

    style = {
        segment: {
            padding: 8,
        },
        content: {
            fontSize: 20,
            color: 'white',
            padding: 4,
        },
        btnText: {
            fontSize: 22,
            color: 'white',
            padding: 4,
        },
        btnBg: {
            borderWidth: 1,
            borderColor: 'white',
            paddingHorizontal: 12,
            paddingVertical: 6,
        }
    }

    static navigationOptions = {
        title: '烟波钓叟歌',
        headerStyle: { backgroundColor: 'cornflowerblue' }
    }

    constructor(props) {
        super(props)
        this.state = {
            autoScroll: true,
        }
        this.scrollY = new Animated.Value(0)
    }

    componentDidMount() {
        this.autoScroll = true
    }

    autoReader() {
        this.scrollY.setValue(0)
        this.scrollTimeing = Animated.timing(
            this.scrollY,
            {
                toValue: -this.scrollHeight,
                duration: 20000,
                delay: 200,
                useNativeDriver: true
            }
        )
        this.scrollTimeing.start(() => {
            if (this.autoScroll) {
                this.autoReader()
            }
        })
    }

    render() {
        return <ImageBackground style={{ flex: 1 }} source={require('../../../static/images/qimen.jpeg')} >
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <TouchableHighlight style={{ flex: 1 }}
                    activeOpacity={0.5}
                    onPress={() => {
                        const currentScoll = this.autoScroll
                        this.autoScroll = !currentScoll
                        if (currentScoll) {
                            this.scrollTimeing.stop()
                        } else {
                            this.scrollTimeing.start()
                        }
                    }}>
                    <Animated.View style={{ flex: 1, transform: [{ translateY: this.scrollY }] }}>
                        <View style={{ alignSelf: 'center' }} onLayout={(event) => {
                            this.scrollHeight = event.nativeEvent.layout.height
                            if (this.autoScroll) {
                                this.autoReader()
                            }
                        }}>
                            <View style={{ height: 532, }} />
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>阴阳顺逆妙难穷，二至还归一九宫</Text>
                                <Text style={this.style.content}>若能了达阴阳理，天地都在一掌中</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>轩辕黄帝战蚩尤，逐鹿经年苦未休</Text>
                                <Text style={this.style.content}>偶梦天神授符诀，登坛致祭谨虔修</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>神龙负图出落水，彩凤衔书碧云里</Text>
                                <Text style={this.style.content}>因命风后演成文，遁甲奇门从此始</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>一千八十当时制，太公删成七十二</Text>
                                <Text style={this.style.content}>逮于汉代张子房，一十八局为精艺</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>先须掌上排九宫，纵横十五在其中</Text>
                                <Text style={this.style.content}>次将八卦分八节，一气统三为正宗</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>阴阳二遁分顺逆，一气三元人莫测</Text>
                                <Text style={this.style.content}>五日都来换一元，接气超神为准则</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>认取九宫分九星，八门又逐九宫行</Text>
                                <Text style={this.style.content}>九宫逢甲为值符，八门值使自分明</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>符上之门为值使，十时一易堪凭据</Text>
                                <Text style={this.style.content}>值符常遣加时干，值使顺逆遁宫去</Text>
                            </View>
                            <View style={this.style.segment}>
                                <Text style={this.style.content}>六甲元号六仪名，三奇即是乙丙丁</Text>
                                <Text style={this.style.content}>阳遁顺仪奇逆布，阴遁逆仪奇顺行</Text>
                            </View>
                        </View>
                    </Animated.View>
                </TouchableHighlight>
                <View style={{ flex: 0, height: 100, justifyContent: 'center', backgroundColor: 'cornflowerblue' }}>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => {
                        this.props.navigation.navigate(AppRouters.Gong)
                    }}>
                        <View style={this.style.btnBg}>
                            <Text style={this.style.btnText}>开启奇门局</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    }
}

export { Welcome }