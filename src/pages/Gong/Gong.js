import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { BlockGrid } from '../../components/gong/BlockGrid'
import { QiYiGrid } from '../../components/gong/QiYiGrid'
import { GongGrid } from '../../components/gong/GongGrid'
import { style } from './Style'

class Gong extends React.Component {

    static navigationOptions = {
        title: '阴阳九局',
    }

    constructor(props) {
        super(props)
        this.state = {
            blockWidth: 80,
            showGong: false,
            showQiYi: true,
            yangDun: true,
        }
    }

    render() {
        return <View>
            <View style={{ marginTop: 40 }}>
                <View style={{ alignSelf: 'center' }}>
                    <BlockGrid yangDun={this.state.yangDun} blockWidth={this.state.blockWidth} />
                    <View style={{ position: 'absolute' }}>
                        {this.displayGong()}
                    </View>
                    <View style={{ position: 'absolute' }}>
                        {this.displayQiYi()}
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                {this.sizeButton("小", 60)}
                {this.sizeButton("中", 80)}
                {this.sizeButton("大", 100)}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({ showGong: !this.state.showGong })
                }}>
                    <Text style={style.btnStyle}>{this.state.showGong ? '隐藏宫位' : '显示宫位'}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangDun: true })
                }}>
                    <View style={style.btnYangBg}>
                        <Text style={style.btnYangText}>阳遁</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangDun: false })
                }}>
                    <View style={style.btnYinBg}>
                        <Text style={style.btnYinText}>阴遁</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    }

    displayGong() {
        if (this.state.showGong) {
            return <GongGrid blockWidth={this.state.blockWidth} />
        }
        return null
    }

    displayQiYi() {
        return <QiYiGrid yangDun={this.state.yangDun} blockWidth={this.state.blockWidth} />
    }

    sizeButton(label, blockWidth) {
        return <TouchableOpacity onPress={() => {
            this.setState({ blockWidth: blockWidth })
        }}>
            <Text style={style.btnStyle}>{label}</Text>
        </TouchableOpacity>
    }
}

export { Gong }