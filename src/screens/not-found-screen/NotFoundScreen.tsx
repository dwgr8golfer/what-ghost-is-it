import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Grid} from "@material-ui/core";

const NotFound = () => (
        <Grid
            container={true}
            direction={'column'}
        >
            <Grid item={true}>
            <Typography
                variant={'body1'}
            >
                {'Page not found'}
            </Typography>
            </Grid>
            <Grid item={true}>
            <Typography
                variant={'body1'}
            >
                {'We couldn\'t find the page you were looking for.'}
            </Typography>
            </Grid>
        </Grid>
);

export default NotFound;
export const NotFoundPath = '/not-found';
