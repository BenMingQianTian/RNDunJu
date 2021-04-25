import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { qiYiYang, qiYiYin } from '../../utils/DataUtil';
import { BaseGrid } from './BaseGrid'

class QiYiGrid extends BaseGrid {
    constructor(props) {
        super(props)
        console.log("constructor QiYiGrid")

        this.blockYang = []
        qiYiYang.map((label, index) => {
            this.blockYang.push({ key: index, label: label })
        })
        this.blockYin = []
        qiYiYin.map((label, index) => {
            this.blockYin.push({ key: index, label: label })
        })
    }

    render() {
        if (this.props.yangJu) {
            return <FlatList style={{ flexGrow: 0 }} data={this.blockYang}
                numColumns={this.blockSize}
                renderItem={({ item }) => this.blockItem(item, this.props.blockWidth)}
            />
        } else {
            return <FlatList style={{ flexGrow: 0 }} data={this.blockYin}
                numColumns={this.blockSize}
                renderItem={({ item }) => this.blockItem(item, this.props.blockWidth)}
            />
        }
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