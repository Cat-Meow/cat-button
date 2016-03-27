import React from 'react';
import Button from '../src/button.js';

let Example = function(props) {
    return (
        <div>
            <Button mySize="large">Large</Button>
            <Button>Medium</Button>
            <Button mySize="small">Small</Button>
            <Button mySize="xsmall">Xsmall</Button>

            <hr />

            <Button block>Block</Button>
        </div>
    
    );
}

export default Example;
