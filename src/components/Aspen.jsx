import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white'
  },
	title: {
		fontSize: '2em',
		letterSpacing: '0.1em',
    fontFamily: "'TrajanPro','sans-serif'",
    transform: 'scaleY(1.15)',
	},
  subtitle:{
    fontFamily: "'TrajanPro','sans-serif'",
    letterSpacing: '0.05em',
  },
  blackColor:{
    color: '#707070'
  }
}))

const Aspen = ({blackColor}) => {
  const classes = useStyles();
  return(
    <div className={`${classes.container} ${blackColor ? classes.blackColor : ''}`}>
    <p className={classes.title}>ASPEN</p>
    <p className={classes.subtitle}>
      LEGAL
    </p>
    </div>
  )
}



export default Aspen