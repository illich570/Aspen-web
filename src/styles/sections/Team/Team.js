import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '9em',
		padding: '0 9em',
		flexDirection: 'column',
			[theme.breakpoints.down('xs')]:{
				padding: '0 2em',
			},
	},
	containerGrid:{
		[theme.breakpoints.down('sm')]:{
			flexDirection: 'column'
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
	sectionTeam: {
		width: '100%',
		height: '23vh',
		background: 'white',
		boxShadow: '2px 4px 29px rgba(146, 146, 146, 0.22)',
		borderRadius: '24px',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		position: 'relative',
		[theme.breakpoints.down('sm')]:{
			flexDirection: 'column',
			height: 'initial'
		},
	},
	containerImageSection: {
		width: '120px',
		height: '120px',
		background: 'white',
		borderRadius: '50%',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		position: 'absolute',
		top: '-85px',
		[theme.breakpoints.down('sm')]:{
			position: 'relative',
			top: '0',
			width: '90px',
			height: '90px',
		},
	},
	containerSectionTeam: {
		marginTop: '6em',
		[theme.breakpoints.down('sm')]:{
			marginTop: '2em'
		},
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
		position: 'relative',
		[theme.breakpoints.down('sm')]:{
			height: 'initial',
			alignItems: 'center',
			flexDirection: 'column',
			marginBottom: '3em'
		},
	},
	nameTeam:{
		letterSpacing: '0.07em',
		color: '#666',
		fontSize: '1em',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]:{
			marginTop: '1.5em'
		},
	},
	sectionConsulting:{
		[theme.breakpoints.down('sm')]:{
			marginTop: '2em'
		},
	}
}))

export default useStyles