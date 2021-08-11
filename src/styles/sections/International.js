import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	container: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	containerBackground: {
		width: '100%',
		height: '100vh',
		backgroundSize: 'cover',
		backgroundImage: 'url("/bg2.png")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundAttachment: 'fixed',
	},
	glassBlur: {
		position: 'absolute',
		borderRadius: '47%',
		width: '80vw',
		height: '160vh',
		background: 'transparent',
		backdropFilter: 'blur(25px)',
		WebkitBackdropFilter: 'blur(25px)',
		backgroundColor: 'rgba(255, 255, 255, 0.17)',
		top: '-25%',
		right: '-29%',
	},
	containerText: {
		marginBottom: '2.5em',
	},
	containerInfo: {
		display: 'flex',
		zIndex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: '9.5em',
		paddingRight: '7em',
    marginTop: '3em'
	},
	containerSection: {
		height: '100%',
	},
	title: {
		fontSize: '2.8em',
		fontWeight: '500',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		marginBottom: '0.4em',
	},
	paragraph: {
		letterSpacing: '0.02em',
		lineHeight: '25px',
	},
  containerImage:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default useStyles