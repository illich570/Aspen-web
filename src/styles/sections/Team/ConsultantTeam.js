import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '8em',
		padding: ' 0 9em',
		flexDirection: 'column',
		minHeight: '80vh',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]:{
			padding: '0 2em',

		},
	},
	title: {
		fontSize: '2.5em',
		fontWeight: '600',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: theme.palette.primary.main,
	},
	containerTitle: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	titleLogo: {
		display: 'flex',
		flexDirection: 'row',
	},
	subtitle: {
		fontSize: '1.5em',
		fontWeight: '500',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: theme.palette.primary.main,
		marginTop: '1em',
	},
	containerCards: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		[theme.breakpoints.down('sm')]:{
			justifyContent: 'center',
			flexWrap: 'wrap'
		},
	},
	card: {
		display: 'flex',
		minHeight: '380px',
		maxWidth: '400px',
		background: 'white',
		position: 'relative',
		padding: '2.5em',
		flexDirection: 'column',
		margin: '0 0.5em',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		borderRadius: '25px',
		[theme.breakpoints.down('sm')]:{
			marginTop: '9em',
			marginBottom: '2em'
		},
	},
	containerImageSection: {
		width: '120px',
		height: '120px',
		background: 'white',
		borderRadius: '50%',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		position: 'absolute',
		top: '-91px',
		left: '33%',
	},
	image: {
		position: 'absolute',
		bottom: '-2px',
		left: '1px',
		width: '99%',
	},
	memberNameRow: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	nameMember: {
		fontSize: '1.2em',
		color: theme.palette.primary.main,
		letterSpacing: '0.1em',
		marginTop: '0.5em',
	},
	subtitleMember: {
		fontWeight: '300',
		color: '#666',
		marginTop: '1em',
		fontSize: '0.95em',
	},
	infoMember: {
		color: '#666',
		marginTop: '1.5em',
		lineHeight: '30px',
		letterSpacing: '0.1em',
		fontSize: '0.9em',
		'& > p':{
			marginBottom: '1em',
		},
		'& > ul':{
			listStyle: 'initial',
			marginLeft:'1.5em',
		},
		'& > li':{
			listStyle: 'initial',
		},
	},
}))
export default useStyles 