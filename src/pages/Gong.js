import React from 'react';
import { View } from "react-native"
import { BlockGrid } from '../components/gong/BlockGrid'
import { QiYiGrid } from '../components/gong/QiYiGrid'
import { GongGrid } from '../components/gong/GongGrid'

const Gong = () => {
    return <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <GongGrid blockSize={3} blockWidth={80} />
    </View>;
}

export default Gong;