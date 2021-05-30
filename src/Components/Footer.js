import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.footer}>
                    <Toolbar className={classes.center}>
                        <Typography>Made with <span class="heart" style={{color:"red"}}>❤</span> by Nikita Kapoor</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles) (Footer)
