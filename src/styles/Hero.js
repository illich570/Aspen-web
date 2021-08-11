import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		height: '36vh',
		position: 'relative',
		overflowX: 'clip',
		[theme.breakpoints.down('sm')]:{
			height: '40vh',
		}
	},
	image: {
		zIndex: 0,
	},
	containerHero: {
		position: 'relative',
		display: 'flex',
		zIndex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
		paddingTop: '4.5em',
		[theme.breakpoints.down('sm')]:{
			paddingBottom: '1em'
		}
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		[theme.breakpoints.down('sm')]:{
			width: '50%',
			margin: '0 auto'
		}
	},
	title: {
		fontSize: '4em',
		letterSpacing: '0.07em',
		fontWeight: '600',
		'@media (max-width: 1200px)': {
			fontSize: '3.4em'
		},
		[theme.breakpoints.down('sm')]:{
			fontSize: '2.5em'
		},
		[theme.breakpoints.down('xs')]:{
			fontSize: '2em'
		}
	},
	titleParagraph: {
		marginLeft: '0.5em',
		letterSpacing: '0.16em',
		lineHeight: '25px',
		fontSize: '1.1em',
		[theme.breakpoints.down('xs')]:{
			textAlign: 'center',
			fontSize: '0.8em',
			letterSpacing: '0.05em'
		}
	},
	paragraph: {
		paddingTop: '1em',
	},
}))

export default useStyles