import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		height: '35vh',
		position: 'relative',
		overflowX: 'clip',
		[theme.breakpoints.down('sm')]: {
			height: '40vh',
		},
	},
	image: {
		zIndex: 0,
		filter: 'blur(1.5px) brightness(75%)',
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
		paddingTop: '5em',
		[theme.breakpoints.down('sm')]: {
			paddingBottom: '1em',
			flexWrap: 'wrap',
			alignItems: 'flex-end',
		},
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		marginRight: '2.5em',
		[theme.breakpoints.down('sm')]: {
			marginRight: '0.5em',
			width: '56px',
			height: '56px',
		},
	},
	title: {
		fontSize: '4.7em',
		letterSpacing: '0.07em',
		fontWeight: '600',
		'@media (max-width: 1200px)': {
			fontSize: '3.5em',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5em',
			width: '50%',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2em',
			width: '60%',
		},
	},
	titleParagraph: {
		paddingTop: '0.5em',
		width: '25%',
		marginLeft: '0.5em',
		letterSpacing: '0.16em',
		lineHeight: '25px',
		fontSize: '1.1em',
		[theme.breakpoints.down('sm')]: {
			width: '60%',
			margin: 0,
			paddingTop: 0,
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			fontSize: '0.8em',
			letterSpacing: '0.05em',
			width: '90%',
		},
	},
}))

export default useStyles
