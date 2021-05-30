const styles = theme => ({
    container: {
        margin:"0 auto",
        marginBottom:100,
        marginTop:100
      },
    footer:{
        background:"rgb(67, 63, 63)",
        top:"auto",
        bottom:"0px",
    },
    appbar:{
        background:"rgb(67, 63, 63)",
    },
    myAppbar:{
        display:"none",
        '@media screen and (max-width: 1024px)': {
           display:"block",
           background:"rgb(67, 63, 63)",
        } 
    },
    center:{
        margin:"0 auto"
    },
    para:{
        fontSize: "1.9rem",
        fontWeight: 700,
        textAlign: "center",
        textTransform:" uppercase"
    },
    imgButton:{
        display:"flex",
        justifyContent:"space-evenly",
        '@media screen and (max-width: 1024px)': {
           display:"block"
        } 
    },
    responsive:{
        height:600,
        '@media screen and (max-width: 1024px)': {
            width:"100%",
            height:"auto"
         } 
    },
    responsive2:{
        height:300,
        '@media screen and (max-width: 1024px)': {
            width:"100%",
            height:"auto"
         } 
    }
});
  
export default styles; 