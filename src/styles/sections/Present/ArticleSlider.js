import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	containerImage: {
		margin: '0 auto',
		maxWidth: '100px',
		maxHeight: '100px'
	},
	image:{
		filter: 'blur(1px) brightness(75%)',
	},
	title: {
		fontSize: '0.7em',
		color: 'white',
	},
	containerArticle:{
		maxWidth: '100px',
		maxHeight: '100px',
		position:'relative'
	},
	containerTitle:{
		width: '80px',
		position: 'absolute',
		top: '5px',
		left: '10px',
		[theme.breakpoints.down('sm')]: {
			left: '38%',
		},
	},
	container: {
		width: '80%',
		display: 'flex',
		marginTop: '2em',
	},
	containerSlider: {
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			margin: '2em 0',
		},
	},
	imageMobile: {
		position: 'relative',
		marginRight: '1.5em',
	},
	containerCardSlider: {
		display: 'flex',
		justifyContent: 'center',
		position:'relative'
	},
}))

export default useStyles
