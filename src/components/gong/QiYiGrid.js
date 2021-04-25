import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { qiYiYang, qiYiYin } from '../../utils/DataUtil';
import { BaseGrid } from './BaseGrid'

class QiYiGrid extends BaseGrid {
    constructor(props) {
        super(props)
        console.log("constructor QiYiGrid")

        this.blocks = []
        qiYiYang.map((label, index) => {
            this.blocks.push({ key: index, label: label })
        })
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
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
            textAlignVertical: 'center',
            color: 'gray',
        }
        return <Text key={item.key} style={labelStyle}>{item.label}</Text>
    }
}

export {
    QiYiGrid as QiYiGrid,
}