import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	title: {
		margin: '0.5em 0',
		letterSpacing: '0.13em',
		fontWeight: 'bold',
		fontSize: '1.2em',
		paddingRight: '3em',
		[theme.breakpoints.down('sm')]:{
			fontSize: '1em',
		},
		[theme.breakpoints.down('xs')]:{
			fontSize: '1.3em'
		}
	},
	container: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: '1em 0',
	},
	containerSlider: {
		width: '85%',
	},
	containerImage:{
		width:'80%',
		position: 'relative'
	},
	containerCard:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		width: '100%',
		minHeight:'385px',
		[theme.breakpoints.down('sm')]:{
			width: '90%',
			minHeight:'230px',
			margin: '0 auto',
			fontSize: '0.85em'
		},
		[theme.breakpoints.down('xs')]:{
			minHeight: '350px'
		}
	},
	button:{
		display: 'flex',
		width:'60%',
		[theme.breakpoints.down('sm')]:{
			width: '50%'
		}
	}
}))

export default useStyles