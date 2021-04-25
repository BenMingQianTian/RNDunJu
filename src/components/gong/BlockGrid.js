import React from 'react';
import { View, Text, FlatList } from 'react-native';

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

        console.log("constructor BlockGrid")

        this.blocks = []
        for (var i = 0; i < this.blockCount; i++) {
            this.blocks.push({ key: i, label: i + "" })
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        return <View style={{ borderWidth: 1, borderColor: 'red', }}>
            <FlatList style={{ flexGrow: 0 }} data={this.blocks}
                numColumns={this.blockSize}
                renderItem={({ item }) => this.blockItem(item, this.blockWidth)}
            />
        </View>
    }

    // render(params) {
    //     return <View style={{
    //         flexDirection: 'row',
    //         justifyContent: 'center',
    //         flexWrap: 'wrap',
    //     }}>
    //         {Array.from(new Array(this.blockCount).keys()).map((index) => {
    //             return this.blockItem(index, this.blockWidth)
    //         })}
    //     </View>
    // }

    blockItem(item, blockWidth) {
        let blockStyle = {
            borderColor: 'red',
            borderWidth: 1,
            width: blockWidth,
            height: blockWidth,
        }
        return <View style={blockStyle} key={item.key}></View>
    }

    // blockItem(index, blockWidth) {
    //     let blockStyle = {
    //         borderColor: 'red',
    //         borderWidth: 1,
    //         width: blockWidth,
    //         height: blockWidth,
    //     }
    //     return <View style={blockStyle} key={index}></View>
    // }
}

export {
    BlockGrid as BlockGrid,
}