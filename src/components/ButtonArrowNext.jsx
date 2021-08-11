import Image from 'next/image'
import ButtonArrow from '../../public/arrowButton.svg';
import ButtonArrowFilled from '../../public/arrowButtonFilled.svg';
import useStyles from '@/styles/ButtonArrowNext'
import {forwardRef} from 'react'

const ButtonArrowNext = forwardRef(({title, filled, onClick, href}, ref) => {
  const classes = useStyles();
  return(
    <a className={classes.button} href={href} onClick={onClick} ref={ref}>
      <h5 className={classes.title}>{title}</h5>
      <div className={classes.containerArrow}>
        <Image alt="" height={100} src={filled ? ButtonArrowFilled : ButtonArrow} width={100} />
      </div>
    </a>
  )
})



export default ButtonArrowNext