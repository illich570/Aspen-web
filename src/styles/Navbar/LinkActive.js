import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	link: {
		fontWeight: 500,
		margin: 0,
		letterSpacing: '0.06em',
		fontSize: '0.85rem',
		color: ' #565656',
		textDecoration: 'none',
	},
	linkActive: {
		color: theme.palette.primary.main,
		position: 'relative',
		'&::after': {
			content: '""',
			display: 'block',
			width: '0.5em',
			height: '0.5em',
			position: 'absolute',
			bottom: -8,
			left: '45%',
			borderRadius: '50%',
			background: theme.palette.primary.main,
			border: '1px solid #F5F5F5',
		},
	},
}))

export default useStyles
