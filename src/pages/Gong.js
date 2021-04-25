import React from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import { BlockGrid } from '../components/gong/BlockGrid'
import { QiYiGrid } from '../components/gong/QiYiGrid'
import { GongGrid } from '../components/gong/GongGrid'

class Gong extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blockWidth: 80,
        }
    }

    render() {
        return <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 120,
        }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <BlockGrid blockWidth={this.state.blockWidth} />
                <View style={{ position: 'absolute' }}>
                    <GongGrid blockWidth={this.state.blockWidth} />
                </View>
                <View style={{ position: 'absolute' }}>
                    <QiYiGrid blockWidth={this.state.blockWidth} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    this.setState({ blockWidth: 60 })
                }}>
                    <Text>小</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ blockWidth: 80 })
                }}>
                    <Text>中</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ blockWidth: 100 })
                }}>
                    <Text>大</Text>
                </TouchableOpacity>
            </View>
        </View>;
    }
}

export default Gong;