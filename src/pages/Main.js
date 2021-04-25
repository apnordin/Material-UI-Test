import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function Main () {
    const classes = useStyles();

    const [btnColor, setBtnColor] = useState("primary");
    const [btnColorSolo, setBtnColorSolo] = useState("primary");
    const [btnColorSolo1, setBtnColorSolo1] = useState("primary");

    const changeColor = () => {
        if (btnColor === "primary") {
            setBtnColor("secondary")
        } else {
            setBtnColor("primary")
        }
    }

    const changeColorSolo = () => {
        if (btnColorSolo === "primary") {
            setBtnColorSolo("secondary")
        } else {
            setBtnColorSolo("primary")
        }
    }

    const changeColorSolo1 = () => {
        if (btnColor === "primary") {
            setBtnColorSolo1("secondary")
        } else {
            setBtnColorSolo1("primary")
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Testing Material-UI, what on earth is going on :)
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color={btnColor} onClick={changeColor}>
                        Change colors (both buttons)!
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color={btnColor} onClick={changeColor}>
                        Change colors (both buttons)!
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color={btnColorSolo} onClick={changeColorSolo}>
                        Change colors (just this button)!
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Button variant="contained" color={btnColorSolo1} onClick={changeColorSolo1}>
                        See if you can how identify when this button can change
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Typing directly in the Paper</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className="">
                            Typing in a div in the paper
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                To put a grid within your grid, put a container within the item, then an item in that container
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                Grid item in a grid container in a grid item in a grid container
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}