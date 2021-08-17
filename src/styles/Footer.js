import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		background: theme.palette.primary.secondary,
		padding: '2em 3em',
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1em',
	},
	rowLinks: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	link: {
		color: 'white',
		fontWeight: '500',
		marginLeft: '2.3em'
	},
	containerRow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white',
	},
}))

export default useStyles