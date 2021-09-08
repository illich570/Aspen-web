import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	noBoxShadow: {
		boxShadow: 'none',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-start'
		},
	},
	button: {
		textTransform: 'capitalize',
		'@media (max-width: 1170px) and (min-width: 960px)': {
			fontSize: '0.65rem',
		},
	},
	containerNavbar: {
		marginTop: '2em',
		[theme.breakpoints.down('sm')]: {
			padding: '0 2em'
		},
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
