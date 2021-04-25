import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { gongLabel } from '../../utils/DataUtil';

class GongGrid extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.blockSize)
        let size = (this.props.blockSize) ? this.props.blockSize : 3
        this.blockSize = size
        this.blockCount = size * size
        console.log(this.blockCount)

        console.log(this.props.blockWidth)
        this.blockWidth = (this.props.blockWidth) ? this.props.blockWidth : 60
        console.log(this.blockWidth)

        console.log("constructor GongGrid")

        this.blocks = []
        gongLabel.map((label, index) => {
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
            renderItem={({ item }) => this.blockItem(item, this.blockWidth)}
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
    GongGrid as GongGrid,
}