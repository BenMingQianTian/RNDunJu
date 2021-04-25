import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { BlockGrid } from '../components/gong/BlockGrid'
import { QiYiGrid } from '../components/gong/QiYiGrid'
import { GongGrid } from '../components/gong/GongGrid'

class Gong extends React.Component {

    btnStyle = {
        fontSize: 18,
    }

    constructor(props) {
        super(props)
        this.state = {
            blockWidth: 80,
            showGong: false,
            showQiYi: true,
            yangJu: true,
        }
    }

    render() {
        return <View>
            <View style={{ marginTop: 40 }}>
                <View style={{ alignSelf: 'center' }}>
                    <BlockGrid blockWidth={this.state.blockWidth} />
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
                    <Text style={this.btnStyle}>{this.state.showGong ? 'hide' : 'show'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangJu: true })
                }}>
                    <Text style={this.btnStyle}>yang</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ yangJu: false })
                }}>
                    <Text style={this.btnStyle}>yin</Text>
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
        return <QiYiGrid yangJu={this.state.yangJu} blockWidth={this.state.blockWidth} />
    }

    sizeButton(label, blockWidth) {
        return <TouchableOpacity onPress={() => {
            this.setState({ blockWidth: blockWidth })
        }}>
            <Text style={this.btnStyle}>{label}</Text>
        </TouchableOpacity>
    }
}

export default Gong;