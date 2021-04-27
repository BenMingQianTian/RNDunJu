import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { gongLabel } from '../../utils/DataUtil';
import { BaseGrid } from './BaseGrid'

class GongGrid extends BaseGrid {
    constructor(props) {
        super(props)
        console.log("constructor GongGrid")

        this.blocks = []
        gongLabel.map((label, index) => {
            this.blocks.push({ key: index, label: label })
        })
    }

    render() {
        return <FlatList style={{ flexGrow: 0 }} data={this.blocks}
            numColumns={this.blockSize}
            renderItem={({ item }) => this.blockItem(item, this.props.blockWidth)}
        />
    }

    blockItem(item, blockWidth) {
        let labelStyle = {
            width: blockWidth,
            height: blockWidth,
            textAlign: 'center',
            textAlignVertical: 'bottom',
            color: 'gray',
            ...Platform.select(
                {
                    ios: {
                        lineHeight: blockWidth,
                    }
                }
            )
        }
        return <Text key={item.key} style={labelStyle}>{item.label}</Text>
    }
}

export {
    GongGrid as GongGrid,
}