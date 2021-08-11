import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4E47B7',
			secondary: '#000d19'
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: '#000000',
			secondary: '#fff',
		},
	},
	typography: {
		fontFamily: "'Montserrat','sans-serif'",
	},
})

export default theme
