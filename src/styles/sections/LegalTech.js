import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '10em',
		paddingLeft: '9em',
		paddingRight: '9em',
		flexDirection: 'column',
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
		width: '80%',
		marginLeft: '2em',
		marginTop: '2.5em',
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
	},
}))

export default useStyles