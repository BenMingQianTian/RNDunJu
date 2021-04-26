import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { houTiangGongXu, qiYiYang, qiYiYin, gongXu } from '../../utils/DataUtil';
import { BaseGrid } from './BaseGrid'

class QiYiGrid extends BaseGrid {
    constructor(props) {
        super(props)
        console.log("constructor QiYiGrid")
    }

    render() {
        if (this.props.yangDun) {
            var blockYang = []
            gongXu(this.props.juIndex).map((pos, index) => {
                blockYang[pos] = { key: pos, label: qiYiYang[index] }
            })
            return <FlatList style={{ flexGrow: 0 }} data={blockYang}
                numColumns={this.blockSize}
                renderItem={({ item }) => this.blockItem(item, this.props.blockWidth)}
            />
        } else {
            var blockYin = []
            gongXu(this.props.juIndex).map((pos, index) => {
                blockYin[pos] = { key: pos, label: qiYiYin[index] }
            })
            return <FlatList style={{ flexGrow: 0 }} data={blockYin}
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