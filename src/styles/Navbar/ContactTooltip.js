import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
	containerTooltip: {
		width: '100%',
		display: 'flex',
		minHeight: '10vh',
		flexDirection: 'column',
    background: '#f0f0f0',
    padding: '0.5em',
    justifyContent: 'space-evenly',
    borderRadius: '4px',
    '@media (max-width: 960px)': {
      fontSize: '0.8em'
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
  rowItem:{
    margin: '0.5em 0',
    display: 'flex',
    '@media (max-width: 960px)': {
      flexDirection: 'column'
		},
  },
  info:{
    '@media (max-width: 960px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
		},
  }
}))

export default useStyles