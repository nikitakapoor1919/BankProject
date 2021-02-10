const styles = theme => ({
    body:{
        overflowX: "hidden", //horizontal
        overflowY: "scroll" //vertical
    },
    image:{
        width:"calc(100vw)",
        height:"600px",
        filter: "brightness(70%)" 
    },
    table:{
        textAlign:"center",
        margin:"0 auto",
        width:"900px",
        marginTop:"70px",
        marginBottom:"100px",
        '@media screen and (max-width: 1024px)': {
            marginLeft:"10px",
            marginRight:"10px"
        } 
    },
    heading:{
        textAlign: "center",
        margin: 40,
        fontSize: 40,
        fontFamily: "monospace"
    }
});
  
export default styles; 