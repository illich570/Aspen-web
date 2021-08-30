import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	containerBackground: {
		width: '100%',
		minHeight: '100vh',
		backgroundSize: 'cover',
		backgroundImage: (props) => `url(${props.background.url})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
	},
	glassBlur: {
		position: 'absolute',
		borderRadius: '47%',
		width: '80vw',
		height: '160vh',
		background: 'transparent',
		backdropFilter: 'blur(25px)',
		WebkitBackdropFilter: 'blur(25px)',
		backgroundColor: 'rgba(255, 255, 255, 0.17)',
		top: '-15%',
		right: '-29%',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	containerText: {
		marginBottom: '2.5em',
	},
	containerInfo: {
		display: 'flex',
		zIndex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: '9.5em',
		paddingRight: '5em',
		marginTop: '6em',
		'@media (max-width: 1250px)': {
			padding: '0 3em',
			marginTop: '5em',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0 2em',
		},
	},
	containerSection: {
		height: '100%',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
	title: {
		fontSize: '2.35em',
		textAlign: 'center',
		fontWeight: '500',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		marginBottom: '0.4em',
	},
	paragraph: {
		letterSpacing: '0.02em',
		lineHeight: '25px',
		fontSize: '0.9em',
		textAlign: 'justify',
		'& > p': {
			marginBottom: '1em',
		},
		'& > ul': {
			listStyle: 'initial',
			marginLeft: '1.5em',
		},
		'& > li': {
			listStyle: 'initial',
		},
	},
	containerRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	containerImage: {},
}))

export default useStyles
