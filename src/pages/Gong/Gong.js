import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { BlockGrid } from '../../components/gong/BlockGrid'
import { QiYiGrid } from '../../components/gong/QiYiGrid'
import { GongGrid } from '../../components/gong/GongGrid'
import { style } from './Style'
import { juIndexLabel } from '../../utils/DataUtil'

class Gong extends React.Component {

    static navigationOptions = {
        title: '阴阳九局',
        headerStyle: { backgroundColor: 'cornflowerblue' }
    }

    constructor(props) {
        super(props)
        this.state = {
            blockWidth: 80,
            sizeButtonIndex: 1,
            showGong: true,
            showQiYi: true,
            yangDun: true,
            juIndex: 0,
        }
    }

    render() {
        return <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ paddingVertical: 12, alignSelf: 'center' }}>
                {this.juTitle()}
            </View>
            <View>
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
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                {this.sizeButton(0)}
                {this.sizeButton(1)}
                {this.sizeButton(2)}
            </View>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({ showGong: !this.state.showGong })
                }}>
                    <View style={style.btnGongWeiBg}>
                        <Text style={style.btnStyle}>{this.state.showGong ? '隐藏宫位' : '显示宫位'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 54, alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangDun: true, juIndex: 0 })
                }}>
                    <View style={style.btnYangBg}>
                        <Text style={style.btnYangText}>阳遁</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        var juIndex = this.state.juIndex - 1;
                        this.setState({ juIndex: this.fixJuIndex(juIndex) })
                    }}>
                        <View style={{ padding: 4 }}><Text style={{ fontSize: 26 }}>-</Text></View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, width: 32, textAlign: 'center' }}>{this.state.juIndex + 1}</Text>
                    <TouchableOpacity onPress={() => {
                        var juIndex = this.state.juIndex + 1;
                        this.setState({ juIndex: this.fixJuIndex(juIndex) })
                    }}>
                        <View style={{ padding: 4 }}><Text style={{ fontSize: 26 }}>+</Text></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangDun: false, juIndex: 0 })
                }}>
                    <View style={style.btnYinBg}>
                        <Text style={style.btnYinText}>阴遁</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    }

    fixJuIndex(index) {
        if (index < 0) {
            return 8
        }
        if (index > 8) {
            return 0
        }
        return index
    }

    juTitle() {
        if (this.state.yangDun) {
            return <Text style={style.juTitleYang}>阳{juIndexLabel[this.state.juIndex]}局</Text>
        } else {
            return <Text style={style.juTitleYin}>阴{juIndexLabel[this.state.juIndex]}局</Text>
        }
    }

    displayGong() {
        if (this.state.showGong) {
            return <GongGrid blockWidth={this.state.blockWidth} />
        }
        return null
    }

    displayQiYi() {
        return <QiYiGrid yangDun={this.state.yangDun} juIndex={this.state.juIndex} blockWidth={this.state.blockWidth} />
    }

    sizeButton(index) {
        switch (index) {
            case 0:
                return this.realSizeButton(index, "小盘", 60)
            case 1:
                return this.realSizeButton(index, "中盘", 80)
            case 2:
                return this.realSizeButton(index, "大盘", 100)
            default:
                return null
        }
    }

    realSizeButton(index, label, blockWidth) {
        if (index == this.state.sizeButtonIndex) {
            return <TouchableOpacity onPress={() => {
                this.setState({ sizeButtonIndex: index, blockWidth: blockWidth })
            }}>
                <View style={{ borderWidth: 1, borderColor: 'black', paddingHorizontal: 12, paddingVertical: 4 }}>
                    <Text style={style.btnStyle}>{label}</Text>
                </View>
            </TouchableOpacity>
        }
        return <TouchableOpacity onPress={() => {
            this.setState({ sizeButtonIndex: index, blockWidth: blockWidth })
        }}>
            <Text style={style.btnStyle}>{label}</Text>
        </TouchableOpacity>
    }
}

export { Gong }