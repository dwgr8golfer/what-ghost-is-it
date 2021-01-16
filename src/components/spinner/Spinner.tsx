import {CircularProgress, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { inDevBuildEnv } from '../../libs/utilities';
import { ITheme } from '../../themes/types';

const useStyles = makeStyles((theme: ITheme) => ({
    progress: {
        margin: theme.spacing(2)
    },
    container: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}));

interface IProps {
    message?: string;
}

const Spinner = ({ message }: IProps) => {
    const classes = useStyles();
    return (
        <Grid container={true} direction={'column'}>

            <div className={classes.container}>
                <CircularProgress
                    className={classes.progress}
                    color={'secondary'}
                    size={50}
                />
                <Typography
                    align={'center'}
                    variant={'h6'}
                >
                    {inDevBuildEnv() ? message ?? '' : ''}
                </Typography>
            </div>
        </Grid>
    );
};

export default Spinner;
