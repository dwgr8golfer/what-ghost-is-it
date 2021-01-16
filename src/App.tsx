import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import AppThemeProvider from './providers/app-theme-provider/AppThemeProvider';

const App: React.FunctionComponent = () => (
    <AppThemeProvider>
      <Container maxWidth={'sm'}>
        <Box my={4}>
          <Typography
              component={'h1'}
              gutterBottom={true}
              variant={'h4'}
          >
            {'Create React App w/ Material-UI'}
          </Typography>
        </Box>
      </Container>
    </AppThemeProvider>
);

export default App;
