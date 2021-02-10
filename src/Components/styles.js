const styles = theme => ({
    box:{
        // height:400,
        // overflow:"scroll",
        '@media screen and (max-width: 1024px)': {
            width: '350px',
        },
        '@media screen and (max-width: 400px)': {
            width: '280px',
        }
    },
    hide:{
        '@media screen and (max-width: 1024px)': {
            display:"none"
        } 
    },
    hideHeader:{
        fontWeight:700,
        background:"black",
        color:"white",
        '@media screen and (max-width: 1024px)': {
            display:"none"
        } 
    },
    showHeader:{
        fontWeight:700,
        background:"black",
        color:"white",
    },
    tableBox:{
        minWidth: 650,
        '@media screen and (max-width: 1024px)': {
            width: 350,
        },
        '@media screen and (max-width: 38px)': {
            width: 200,
        } 

    }
});
  
export default styles; 