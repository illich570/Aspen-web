import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: '10px',
		border: '2px solid',
		borderColor: theme.palette.primary.main,
		userSelect: 'none',
		webkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
	},
	buttonOutlined: {
		border: '2px solid',
	},
	buttonContainedSweep: {
		background: `linear-gradient(to bottom,${theme.palette.primary.main} 50%, #fff 50%)`,
		backgroundSize: '100% 200%',
		transition: 'all 0.5s',
		'&:hover': {
			backgroundPosition: '0 -100%',
			borderColor: 'black',
			color: 'black',
			border: '2px solid',
		},
	},
	buttonOutlinedSweep: {
		background: `linear-gradient(to bottom,#fff 50%,${theme.palette.primary.main} 50%)`,
		backgroundSize: '100% 200%',
		transition: 'all 0.5s',
		'&:hover': {
			backgroundPosition: '0 -100%',
			color: 'white',
			border: '2px solid',
		},
	},
}))

export default useStyles
