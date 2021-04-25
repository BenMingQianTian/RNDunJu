import React from 'react';

class BaseGrid extends React.Component {
    constructor(props) {
        super(props)
        this.blockSize = 3
        this.blockCount = 9
    }
}

export { BaseGrid }