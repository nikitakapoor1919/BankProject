import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class MyAppBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <a href='/' className={classes.back}>
                        <IconButton edge="start" style={{color:"white"}} onClick={this.back} aria-label="close">
                            <ArrowBackIcon/>
                        </IconButton>
                        </a>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles) (MyAppBar)
