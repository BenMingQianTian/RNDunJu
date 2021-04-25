import React from 'react';
import { View } from "react-native"
import { BlockGrid } from '../components/gong/BlockGrid'
import { QiYiGrid } from '../components/gong/QiYiGrid'
import { GongGrid } from '../components/gong/GongGrid'

const Gong = () => {
    return <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 120,
    }}>
        <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <BlockGrid blockSize={3} blockWidth={80} />
            <View style={{ position: 'absolute' }}>
                <GongGrid blockSize={3} blockWidth={80} />
            </View>
            <View style={{ position: 'absolute' }}>
                <QiYiGrid blockSize={3} blockWidth={80} />
            </View>
        </View>
    </View>;
}

export default Gong;