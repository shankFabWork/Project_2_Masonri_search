import React from 'react'

// npm install semantic-ui-react semantic-ui-css
const WatingLoader=()=> {
    return (
    <div className="ui segment" style={{height:100}} >
        <div className="ui active inverted dimmer">
            <div className="ui text loader">
            <br />
            <br />
                Waiting for User Input.......
            </div>
        </div>
    </div>    
    )
}

export default WatingLoader
