import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	noBoxShadow: {
		boxShadow: 'none',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		textTransform: 'capitalize',
		'@media (max-width: 1170px) and (min-width: 960px)': {
			fontSize: '0.65rem',
		},
	},
	containerNavbar: {
		marginTop: '2em',
	},
	containerMobile: {
		height: '100%',
		display: 'flex',
		padding: '1em',
	},
	closeButtonDrawer: {
		position: 'absolute',
		right: '8px',
		top: '9px',
		zIndex: '1',
	},
	containerDialog: {
		padding: '1em',
	},
}))

export default useStyles
