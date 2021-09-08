import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
	containerRoutes: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	routes: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#F6F9FB',
		borderRadius: '8px',
		padding: '0.65em',
		boxShadow: '0px 6px 15px rgba(0, 88, 82, 0.05)',
	},
	route: {
		'@media (max-width: 1420px)': {
			padding: '0.17em 1em',
		},
		padding: '0.35em 2em',
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
	routesMobile: {
		display: 'flex',
		flexDirection: 'column',
	},
	routeMobile: {
		width: ' 100%',
		margin: '0.5em 0 ',
		display: 'flex',
		padding: '0.75em 0',
		justifyContent: 'center',
		'&:not(:last-child)': {
			borderBottom: '1px solid gray',
		},
	},
}))

export default useStyles
