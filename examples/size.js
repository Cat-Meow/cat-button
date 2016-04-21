import React from 'react';
import Button from '../src/button.js';

/*
*   与大小相关的属性为mySize，有large\mediun\small\xsmall这几个值
*/
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
