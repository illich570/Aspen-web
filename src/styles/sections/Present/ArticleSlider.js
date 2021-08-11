import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	containerImage: {
		width: '80%',
		margin: '0 auto',
		position: 'relative'
	},
	title: {
		position: 'absolute',
		top: '5px',
		left: '10px',
		fontSize: '0.8em',
		color: '#fff'
	},
	container: {
		width: '70%',
		display: 'flex',
		marginTop: '2em',
	},
	containerSlider: {
		width: '100%',
	},
}))

export default useStyles