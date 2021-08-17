import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		marginTop: '8em',
		padding: '0 9em',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]:{
			width: '100%',
			padding: '0 4.5em'
		},
	},
	title: {
		fontSize: '2em',
		fontWeight: '600',
		letterSpacing: '0.04em',
		textShadow: '-4px 5px 11px rgba(0, 0, 0, 0.16)',
		color: theme.palette.primary.main,
	},
	containerLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '1em',
		width: '40px',
		height: '40px',
	},
	containerTitle: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
	containerPost: {
		width: '100%',
	},
	containerImage: {
		width: '80%',
		'& > div':{
			position: 'unset !important'
		}
	},
	image:{
		objectFit: 'contain',
		width: '100% !important',
		position: 'relative !important',
		height: 'unset !important'

	},
	paragraphInterest: {
		width: '40%',
		letterSpacing: '0.03em',
		fontWeight: 'bold',
		color: '#6e6e6e',
		[theme.breakpoints.down('sm')]:{
			width: '100%'
		},
	},
	titleArticle: {
		color: theme.palette.primary.main,
	},
	spaceTitle: {
		marginBottom: '1.5em',
	},
	spaceArticles:{
		marginTop: '4em',
		marginBottom: '2em'
	},
	containerButton:{
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		margin: '3em 0'
	},
	button: {
		width: '40%',
		display: 'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]:{
			width: '60%'
		},
	},
	richTextNote:{
		marginTop: '2em'
	},
	imageMobile:{
		position: 'relative',
		width: '100%',
		marginRight: '1.5em'
	}
}))
export default useStyles