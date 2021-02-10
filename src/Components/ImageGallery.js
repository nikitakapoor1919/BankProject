import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://static.toiimg.com/thumb/52743612.cms?imgsize=134181&width=800&height=800',
      title: 'Rasgulla',
      width: '40%',
    },
    {
      url:
        'data:image/jpeg;base64,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',
      title: 'Dhokla',
      width: '20%',
    },
    {
      url:
        'https://content3.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-6.jpg',
      title: 'Ladoo',
      width: '40%',
    },
    {
      url:
        'https://www.giftacrossindia.com/images/sweets/kaju-sweets.jpg',
      title: 'Barfi',
      width: '38%',
    },
    {
      url:
        'https://images.indianexpress.com/2019/11/Pinni_1200.jpg',
      title: 'Pinni',
      width: '38%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe5l2KkitouFyp-m3OJMF_Tak24gKSU87chnM4MD6Cu0cWJ1FA&usqp=CAU',
      title: 'Jalebi',
      width: '24%',
    },
    {
      url:
        'https://www.tarladalal.com/members/9306/big/big_chole_bhature-13922.jpg?size=696X905',
      title: 'Chole Puri',
      width: '40%',
    },
    {
      url:
        'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg',
      title: 'samosa',
      width: '20%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr6yml_0Sd23Q3JttGQGUbVSBopEnkmXPJ6wyAqiLTiGELvISG&usqp=CAU',
      title: 'Rasmalai',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2"
      style={{fontSize:'25px',fontWeight:600, fontFamily: 'medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif'}}>
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);