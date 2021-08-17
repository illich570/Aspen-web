import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '9em',
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
	sectionTeam: {
		width: '100%',
		height: '23vh',
		background: 'white',
		boxShadow: '2px 4px 29px rgba(146, 146, 146, 0.22)',
		borderRadius: '24px',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		position: 'relative'
	},
	containerImageSection: {
		width: '120px',
		height: '120px',
		background: 'white',
		borderRadius: '50%',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		position: 'absolute',
		top: '-85px',
	},
	containerSectionTeam: {
		marginTop: '6em',
	},
	image: {
		position: 'absolute',
		bottom: '-2px',
		left: '1px',
		width: '99%'
	},
	containerTeam:{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		height: '50%',
		position: 'relative'
	},
	nameTeam:{
		letterSpacing: '0.07em',
		color: '#666',
		fontSize: '1em',
		fontWeight: '500'
	}
}))

export default useStyles