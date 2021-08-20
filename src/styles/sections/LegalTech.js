import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		minHeight: '84vh',
		position: 'relative',
		display: 'flex',
		marginTop: '8em',
		paddingLeft: '9em',
		paddingRight: '9em',
		flexDirection: 'column',
		backgroundImage: 'url(/fondo.png)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
		[theme.breakpoints.down('sm')]: {
			padding: '0 4em',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '0 2em',
		},
	},
	containerGrid: {
		paddingTop: '2em',
	},
	title: {
		fontSize: '3em',
		fontWeight: '600',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: theme.palette.primary.main,
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '1em',
		width: '70px',
		height: '70px',
	},
	containerTitle: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	titleArticle: {
		color: theme.palette.primary.main,
		margin: '1em 0',
	},
	titleLogo: {
		display: 'flex',
		flexDirection: 'row',
	},
	paragraphTitle: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		color: '#565656',
		letterSpacing: '0.07em',
	},
	paragraph: {
		letterSpacing: '0.07em',
		color: '#707070',
	},
	list: {
		width: '35%',
		marginLeft: '2em',
		marginTop: '2.5em',
		[theme.breakpoints.down('sm')]: {
			width: '80%',
		},
	},
	listItem: {
		marginBottom: '2em',
		position: 'relative',
		color: '#707070',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	listItemActive: {
		color: theme.palette.primary.main,
		fontSize: '1.2em',
	},
	arrowList: {
		position: 'absolute',
		left: '-30px',
		top: '-2px',
		height: '24px',
		width: '24px',
		transform: 'rotate(180deg)',
	},
	containerLinkedIn: {
		width: '90px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.main,
		marginLeft: '2em',
	},
	containerSectionTitle: {
		paddingLeft: '6em',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: ' 0.5em',
		},
	},
	richText: {
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
		[theme.breakpoints.down('xs')]: {
			marginBottom: '2em',
		},
	},
}))

export default useStyles
