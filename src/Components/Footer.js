// import MadeWithLove from 'react-made-with-love';
import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <div style={{ bottom:0,position:"fixed",padding:15,width:"calc(100vw)",background:"#433f3f"}}>
                    <div  style={{color:"white"}}>Made with <span class="heart" style={{color:"red"}}>❤</span> by Nikita Kapoor</div>
                </div>
            </div>
        )
    }
}

export default Footer
