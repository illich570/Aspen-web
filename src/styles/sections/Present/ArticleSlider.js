import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	containerImage: {
		margin: '0 auto',
		minWidth: '275px',
	},
	image:{
		filter: 'blur(1px) brightness(75%)',
	},
	title: {
		fontSize: '0.7em',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			color: '#000',
		},
	},
	containerTitle:{
		width: '80px',
		position: 'absolute',
		top: '5px',
		left: '10px',
		[theme.breakpoints.down('sm')]: {
			left: '0',
			position: 'relative',
			color: '#000',
			marginBottom: '1em',
			width: '40%',
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
