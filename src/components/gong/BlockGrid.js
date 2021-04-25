import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BaseGrid } from './BaseGrid'

class BlockGrid extends BaseGrid {

    constructor(props) {
        super(props)
        console.log("constructor BlockGrid")

        this.blocks = []
        for (var i = 0; i < this.blockCount; i++) {
            this.blocks.push({ key: i, label: i + "" })
        }
    }

    render() {
        return <View style={{ alignSelf: 'center', borderWidth: 1, borderColor: this.props.yangDun ? 'red' : 'green', }}>
            <FlatList style={{ flexGrow: 0 }} data={this.blocks}
                numColumns={this.blockSize}
                renderItem={({ item }) => this.blockItem(item, this.props.blockWidth)}
            />
        </View>
    }

    blockItem(item, blockWidth) {
        let blockStyle = {
            borderColor: this.props.yangDun ? 'red' : 'green',
            borderWidth: 1,
            width: blockWidth,
            height: blockWidth,
        }
        return <View style={blockStyle} key={item.key}></View>
    }
}

export {
    BlockGrid as BlockGrid,
}