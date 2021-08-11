import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	title: {
		margin: '0.95em 0',
		letterSpacing: '0.13em',
		fontWeight: 'bold',
		fontSize: '1.2em',
		paddingRight: '4em',
		[theme.breakpoints.down('sm')]:{
			fontSize: '1em'
		}
	},
	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2em',
	},
	containerSlider: {
		width: '90%',
		[theme.breakpoints.down('sm')]:{
			width: '70%',
		}
	},
	containerImage:{
		width:'80%',
		position: 'relative'
	},
	containerCard:{
		width: '100%',
		minHeight:'400px',
		'@media (max-width: 960px)': {
      fontSize: '0.8em'
		},
		[theme.breakpoints.down('sm')]:{
			minHeight:'0',
			width: '90%',
			margin: '0 auto'
		}
	},
	button:{
		display: 'flex',
		width:'60%'
	}
}))

export default useStyles