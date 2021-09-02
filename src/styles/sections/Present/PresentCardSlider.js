import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	title: {
		margin: '0.5em 0',
		letterSpacing: '0.13em',
		fontWeight: 'bold',
		fontSize: '1.2em',
		paddingRight: '1.5em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1em',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.3em',
		},
	},
	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: '1em 0',
	},
	containerSlider: {
		width: '75%',
	},
	containerImage: {
		width: '100%',
		position: 'relative',
	},
	containerCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		minHeight: '385px',
		maxWidth: '300px',
		padding: '0 1em',
		margin: '0 auto',
		[theme.breakpoints.down('sm')]: {
			width: '80%',
			minHeight: '290px',
			fontSize: '0.85em',
			minWidth: '220px',
		},
	},
	button: {
		display: 'flex',
		width: '60%',
		[theme.breakpoints.down('sm')]: {
			width: '50%',
		},
	},
}))

export default useStyles
