import React from 'react';
import { View, Text } from 'react-native';

class BlockGrid extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.blockSize)
        let size = (this.props.blockSize) ? this.props.blockSize : 3
        this.blockCount = size * size
        console.log(this.blockCount)

        console.log(this.props.blockWidth)
        this.blockWidth = (this.props.blockWidth) ? this.props.blockWidth : 60
        console.log(this.blockWidth)

        console.log("constructor BlockGrid")

        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render(params) {
        return <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            {Array.from(new Array(this.blockCount).keys()).map((index) => {
                return this.blockItem(index, this.blockWidth)
            })}
        </View>
    }

    blockItem(index, blockWidth) {
        let blockStyle = {
            borderColor: 'red',
            borderWidth: 1,
            width: blockWidth,
            height: blockWidth,
        }
        return <View style={blockStyle} key={index}></View>
    }
}

export {
    BlockGrid as BlockGrid,
}