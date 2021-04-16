const styles = theme => ({
    container: {
        // overflowX: "auto",
        // marginRight: "auto",
        // marginLeft: "auto",
        // marginTop: "50px",
        // padding: "10px",
        // margin:" 10px",
        // height:"100vh"
      },
    table:{
        margin:"0 auto",width:800,position:"relative",top:50,marginBottom:100,overflowX:"auto",height:"550px",
          '@media screen and (max-width: 1038px)': {
            width: "auto"
        } 
    },
    box:{
        // height:400,
        // overflow:"scroll",
        // '@media screen and (max-width: 1024px)': {
        //     width: '350px',
        // },
        // '@media screen and (max-width: 400px)': {
        //     width: '280px',
        // }
    },
    hide:{
        // '@media screen and (max-width: 1024px)': {
        //     display:"none"
        // } 
    },
    hideHeader:{
        fontWeight:700,
        background:"rgb(67, 63, 63)",
        color:"white",
        // '@media screen and (max-width: 1024px)': {
        //     display:"none"
        // } 
    },
    showHeader:{
        fontWeight:700,
        background:"rgb(67, 63, 63)",
        color:"white",
    },
    tableBox:{
        minWidth: 650,
        // '@media screen and (max-width: 1024px)': {
        //     width: 350,
        // },
        // '@media screen and (max-width: 38px)': {
        //     width: 200,
        // } 

    }
});
  
export default styles; 