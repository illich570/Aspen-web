import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	containerBackground: {
		width: '100%',
		height: '100vh',
		backgroundSize: 'cover',
		backgroundImage: (props) => `url(${props.backgroundSlide.url})`,
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
		top: '-25%',
		right: '-29%',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	containerMouse: {
		position: 'absolute',
		width: '30px',
		height: '60px',
		bottom: 0,
		left: '50%',
		marginLeft: '-30px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			left: '55%',
		},
	},
	arrows: {
		transition: '1s',
		userSelect: 'none',
		webkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		animation: '$moving-arrow 2s steps(30,end) infinite',
	},
	'@keyframes moving-arrow': {
		'0%': {
			transform: 'translateY(0px)',
		},
		'50%': {
			transform: 'translateY(-5px)',
		},
		'100%': {
			transform: 'translateY(0px)',
		},
	},
	containerText: {
		marginTop: '5em',
		marginBottom: '2.5em',
		[theme.breakpoints.down('sm')]: {
			padding: '1em 2em',
			backdropFilter: 'blur(10px)',
			WebkitBackdropFilter: 'blur(10px)',
			borderRadius: '15px',
			backgroundColor: 'rgba(255, 255, 255, 0.17)',
		},
	},
	containerInfo: {
		display: 'flex',
		zIndex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: '9.5em',
		paddingRight: '7em',
		'@media (max-width: 1250px)': {
			padding: '0 3em',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0 2em',
		},
	},
	containerSection: {
		height: '100%',
	},
	title: {
		fontSize: '5em',
		fontWeight: '600',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: '#fff',
		marginBottom: '0.4em',
		'@media (max-width: 1420px)': {
			fontSize: '4em',
			textAlign: 'center',
		},
		'@media (max-width: 365px)': {
			fontSize: '2.8em'
		},
	},
	paragraph: {
		letterSpacing: '0.02em',
		lineHeight: '25px',
		textAlign: 'justify',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'justify',
			color: '#fff',
			textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		},
		'@media (max-width: 365px)': {
			fontSize: '0.85em'
		},
	},
	containerArrow: {
		width: '25px',
		opacity: '0.5',
	},
	containerLinkedIn: {
		width: '90px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.main,
	},
	arrowLinkedIn: {
		color: 'transparent',
	},
	containerIcons: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
}))

export default useStyles
