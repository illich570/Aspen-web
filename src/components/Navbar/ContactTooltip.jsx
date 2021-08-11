import React from 'react'
import { Grid} from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@/styles/Navbar/ContactTooltip'


const ContactTooltip = () => {
  const classes = useStyles()
  return (
    <>
    <div className={classes.containerTooltip}>
      <Grid className={classes.rowItem} container >
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="Justicia" height={100} src="/location.svg" width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
          <p>
            Centro Plaza, Torre B, Piso 12, Oficina 12-D, Los Palos Grandes,
            Municipio Chacao.
          </p>
        </Grid>
      </Grid>
      <Grid className={classes.rowItem} container>
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="Justicia" height={100} src="/location.svg" width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
          <p>
            +58 285.74.67
            <br /> +58 285.77.32
          </p>
        </Grid>
      </Grid>
      <Grid className={classes.rowItem} container>
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="Justicia" height={100} src="/location.svg" width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
          <p>info@aspen-legal.com</p>
        </Grid>
      </Grid>
    </div>
  </>
  )
}

export default ContactTooltip
