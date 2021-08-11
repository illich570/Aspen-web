import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '10em',
		padding: '0 9em',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]:{
			padding: '0 4em'
		},
		[theme.breakpoints.down('xs')]:{
			padding: '0 2em'
		}
		
	},
	title: {
		fontSize: '3em',
		fontWeight: '600',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: theme.palette.primary.main,
		[theme.breakpoints.down('xs')]:{
			fontSize: '2em'
		}
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '1em',
		width: '70px',
		height: '70px',
		[theme.breakpoints.down('xs')]:{
			width: '40px',
			height: '40px'
		},
	},
	containerTitle: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	titleLogo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	containerSection: {
		width: '100%',
		marginTop: '5em',
		[theme.breakpoints.down('xs')]:{
			marginTop: '2em'
		},
	},
	titleSection: {
		color: theme.palette.primary.main,
		textShadow: '0px 4px 6px rgba(174, 174, 174, 0.28)',
		fontSize: '2em',
		[theme.breakpoints.down('xs')]:{
			fontSize: '1.5em'
		}
	},
	paragraphTitle: {
		display: 'flex',
		width: '40%',
		justifyContent: 'center',
		marginLeft: '6em',
		color: '#565656',
		[theme.breakpoints.down('sm')]:{
			width: '60%',
		},
		[theme.breakpoints.down('xs')]:{
			width: '80%',
			margin: '0 auto'
		}
	},
	list: {
		marginTop: '1.5em',
		[theme.breakpoints.down('sm')]:{
			display: 'flex',
			flexDirection: 'row',
			marginTop: '0'
		},
		[theme.breakpoints.down('xs')]:{
			flexWrap: 'wrap',
			justifyContent: 'center'
		},
	},
	listItem: {
		marginBottom: '2em',
		position: 'relative',
		[theme.breakpoints.down('sm')]:{
			margin: '1.5em'
		},
		color: '#666',
		'&:hover':{
			cursor: 'pointer'
		}
	},
	sectionInfo: {
		background: 'white',
		boxShadow: '2px 6px 29px rgba(0, 0, 0, 0.1)',
		borderRadius: '24px',
		minHeight: '300px',
		padding: '2em 4em',
		opacity: 0,
		transition: 'all 0.5s',
		[theme.breakpoints.down('xs')]:{
			padding: '1em 2em'
		},
	},
	sectionInfoFade:{
		opacity: 1
	},
	titleRowSection: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		marginBottom: '2em',
	},
	logoSection: {
		width: '60px',
		height: '60px',
		marginRight: '1em',
		[theme.breakpoints.down('xs')]:{
			width: '40px',
			height: '40px',
		}
	},
	paragraphSection: {
		letterSpacing: '0.06em',
		marginBottom: '2em'
	},
	imagesSectionRow: {
		position: 'absolute',
		width: '43%',
		bottom: 0,
		height: '4vh',
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('xs')]:{
			justifyContent: 'center',
			width: '100%',
			left: 0
		},
	},
	imageSection: {
		background: 'white',
		borderRadius: '50%',
		boxShadow: '2px 6px 29px rgba(0, 0, 0, 0.1)',
	},
	image: {
		position: 'absolute',
		bottom: '-2px',
		left: '1px',
		width: '99%',
	},
	containerImageSection: {
		width: '60px',
		height: '60px',
		background: 'white',
		borderRadius: '50%',
		boxShadow: '-2px 4px 17px rgba(0, 0, 0, 0.16)',
		position: 'relative',
		margin: '0 1em',
		[theme.breakpoints.down('xs')]:{
			width: '40px',
			height: '40px',
		},
	},
	listItemActive: {
		color: theme.palette.primary.main,
		fontSize: '1.2em',
		'&::after': {
			width: '0',
			height: '0',
			content: '""',
			position: 'absolute',
			top: '-14px',
			right: '0',
			borderStyle: 'solid',
			borderWidth: '30px 15px 15px 15px',
			borderColor: 'white transparent transparent transparent',
			transform: 'rotate(90deg)',
		},
		[theme.breakpoints.down('sm')]:{
			'&::after':{
				content: 'none'
			}
		},
	},
}))

export default useStyles