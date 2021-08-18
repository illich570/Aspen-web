import React from 'react'
import { Grid} from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@/styles/Navbar/ContactTooltip'
import useSWR from "swr"
import { gql } from 'graphql-request'
import { GraphClient } from '@/lib'
import {getContactData} from '@/graphql'

const fetchData = async (id) => {
  const query = gql`${getContactData}`
  return GraphClient.request(query,{id});
};


const ContactTooltip = () => {
  const { data } = useSWR(1, fetchData);
  const contact = data?.contactSections[0]
  const classes = useStyles()
  return (
    <>
    {
      contact ? 
      <div className={classes.containerTooltip}>
      <Grid className={classes.rowItem} container >
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="" height={100} src={contact.addressIcon.url} width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
          <p>
            {contact.address}
          </p>
        </Grid>
      </Grid>
      <Grid className={classes.rowItem} container>
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="" height={100} src={contact.phoneIcon.url} width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
          {contact.phoneContact.map((element) => (
            <p key={element}>{element}</p>
          ))}
        </Grid>
      </Grid>
      <Grid className={classes.rowItem} container>
        <Grid className={classes.containerGridIcon} item md={2}>
          <div className={classes.containerIcon}>
            <Image alt="" height={100} src={contact.emailIcon.url} width={100} />
          </div>
        </Grid>
        <Grid className={classes.info} item md={10}>
        {contact.email.map((element) => (
            <p key={element}>{element}</p>
          ))}
        </Grid>
      </Grid>
    </div>
    : null
    }
    
  </>
  )
}

export default ContactTooltip
