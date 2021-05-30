import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

class HomeAppbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.myAppbar}>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles) (HomeAppbar)
