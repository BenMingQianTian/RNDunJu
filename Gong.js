import React from 'react';
import { View } from "react-native"
import { BlockGrid } from './gong/BlockGrid'

const Gong = () => {
    return <View>
        <BlockGrid blockSize={4} blockWidth={60} />
    </View>;
}

export default Gong;