import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	containerTooltip: {
		width: '100%',
		display: 'flex',
		minHeight: '10vh',
		flexDirection: 'column',
		background: '#f0f0f0',
		padding: '0.5em',
		justifyContent: 'space-evenly',
		borderRadius: '4px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.8em',
		},
	},
	containerIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		width: '20px',
		height: '20px',
	},
	containerGridIcon: {
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
	},
	rowItem: {
		margin: '0.5em 0',
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	info: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
}))

export default useStyles
