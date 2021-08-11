import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
	title: {
    color: 'white',
    letterSpacing: '0.07em',
    textTransform: 'none',
    fontWeight: '400'
	},
  button:{
    borderRadius: '7px',
    background: `linear-gradient(${theme.palette.primary.main} 0%, #231c9c 100%)`,
    justifyContent: 'flex-start',
    padding: '0.6em 1.5em',
    fontSize: '0.9em',
    minWidth: '150px',
    position: 'relative',
    transition: 'all 2s',
    '&:hover':{
      cursor: 'pointer',
      background: `linear-gradient(${theme.palette.primary.main} 100%, #231c9c 0%)`,
    }
  },
  containerArrow:{
    position: 'absolute',
    right: '-11px',
    width: '24px',
    height: '24px',
    top: '3px'
  }
}))

export default useStyles