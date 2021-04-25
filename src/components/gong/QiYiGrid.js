import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { houTiangGongXu, qiYiYang, qiYiYin } from '../../utils/DataUtil';
import { BaseGrid } from './BaseGrid'

class QiYiGrid extends BaseGrid {
    constructor(props) {
        super(props)
        console.log("constructor QiYiGrid")

        this.blockYang = []
        houTiangGongXu.map((pos, index) => {
            this.blockYang[pos] = { key: pos, label: qiYiYang[index] }
        })
        this.blockYin = []
        houTiangGongXu.map((pos, index) => {
            this.blockYin[pos] = { key: pos, label: qiYiYin[index] }
        })
    }

    render() {
        if (this.props.yangDun) {
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
            color: 'black',
            fontSize: 18,
        }
        return <Text key={item.key} style={labelStyle}>{item.label}</Text>
    }
}

export {
    QiYiGrid as QiYiGrid,
}