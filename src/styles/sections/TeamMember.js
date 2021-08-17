import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '8em',
		padding: '0 9em',
		flexDirection: 'column',
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
		marginTop: '0.5em',
		marginBottom: '1.5em'
	},
	paragraph: {
		letterSpacing: '0.06em',
		lineHeight: '30px',
		color: '#666',
		minHeight: '350px',
	},
	containerButton: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		margin: '3em 0',
	},
	button: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	card: {
		background: 'white',
		boxShadow: '2px 4px 29px rgba(146, 146, 146, 0.22)',
		borderRadius: '25px',
		margin: '0 3em',
		padding: '2.2em',
		position: 'relative',
		minHeight: '250px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	memberNameRow: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	nameMember: {
		fontSize: '1.25em',
		color: theme.palette.primary.main,
		letterSpacing: '0.2em',
	},
	emailMember: {
		fontWeight: '300',
		color: '#666',
		marginTop: '0.3em'
	},
	containerImageSection: {
		width: '150px',
		height: '150px',
		background: 'white',
		borderRadius: '50%',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		position: 'absolute',
		top: '-60px',
		left: '-60px'
	},
	image: {
		position: 'absolute',
		bottom: '-2px',
		left: '1px',
		width: '99%',
	},
	memberInfo: {
		display: 'flex',
		height: '100%',
		letterSpacing: '0.09em',
		color: '#666',
		marginTop: '1em',
		lineHeight: '30px'
	},
}))

export default useStyles