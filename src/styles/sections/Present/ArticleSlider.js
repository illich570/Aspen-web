import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	containerImage: {
		width: '80%',
		margin: '0 auto',
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			minWidth: '250px'
		},
	},
	title: {
		position: 'absolute',
		top: '5px',
		left: '10px',
		fontSize: '0.7em',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			left: '0',
			position: 'relative',
			color: '#000',
			marginBottom: '1em',
		},
	},
	container: {
		width: '80%',
		display: 'flex',
		marginTop: '2em',
	},
	containerSlider: {
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			margin: '2em 0',
		},
	},
	imageMobile: {
		position: 'relative',
		width: '100%',
		marginRight: '1.5em',
	},
	containerCardSlider: {
		display: 'flex',
		justifyContent: 'center',
	},
}))

export default useStyles
