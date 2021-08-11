import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	noBoxShadow: {
		boxShadow: 'none',
	},
	containerRoutes: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	routes: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		background: 'linear-gradient(#fff 0%, #f1f1f1 100%)',
		borderRadius: '8px',
		padding: '0.65em',
		boxShadow: '0px 6px 15px rgba(0, 88, 82, 0.05)',
		border: '4px solid #fcfcfc',
	},
	route: {
		padding: '0.35em 2.2em',
		position: 'relative',
		'&:not(:last-child)::after': {
			content: '""',
			display: 'block',
			width: 2.5,
			height: '100%',
			position: 'absolute',
			bottom: 0,
			right: -2,
			borderRadius: '15px',
			background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(161,161,161,1) 100%)',
			border: '1px solid #F5F5F5',
		},
	},
	link: {
		fontWeight: 500,
		margin: 0,
		letterSpacing: '0.06em',
		fontSize: '0.85rem',
		color: ' #565656',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		textTransform: 'capitalize',
	},
	containerNavbar: {
		marginTop: '2em',
	},
	containerMobile: {
		height: '100%',
		display: 'flex',
		padding: '1em',
	},
	closeButtonDrawer: {
		position: 'absolute',
		right: '8px',
		top: '9px',
		zIndex: '1',
	},
	containerDialog:{
		padding: '1em'
	}
}))

export default useStyles