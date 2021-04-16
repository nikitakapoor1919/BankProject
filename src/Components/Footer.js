import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <div style={{ bottom:0,padding:15,width:"100%",background:"#433f3f",position:"relative"}}>
                    <div  style={{color:"white"}}>Made with <span class="heart" style={{color:"red"}}>❤</span> by Nikita Kapoor</div>
                </div>
            </div>
        )
    }
}

export default Footer
