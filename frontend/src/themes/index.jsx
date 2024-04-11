import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider,
	createTheme,
	StyledEngineProvider
} from '@mui/material/styles';
import palette from './palette.theme';
import typography from './typography.theme';
import breakpoints from './breakpoints.theme';

function Themeconfig({ children }) {
	const themeOptions = useMemo(
		() => ({
			palette,
			typography,
			breakpoints
		}),
		[]
	);
	const theme = createTheme(themeOptions);
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

Themeconfig.propTypes = {
	children: PropTypes.node
};

export default Themeconfig;
