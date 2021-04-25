import React from 'react';
import { View } from "react-native"
import { BlockGrid } from '../components/gong/BlockGrid'

const Gong = () => {
    return <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <BlockGrid blockSize={3} blockWidth={80} />
    </View>;
}

export default Gong;