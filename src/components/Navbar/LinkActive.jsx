import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from '@/styles/Navbar/LinkActive'

function checkActive(routerRef, href) {
	return routerRef === href
}

const LinkActive = ({ href, title }) => {
	const [isActive,setIsActive] = useState();
	const classes = useStyles()
	const router = useRouter()
	//eslint-disable-next-line
	console.log(router)
	

	useEffect(()=>{
		setIsActive(checkActive(router.pathname, href))
	},[href,router])
	return (
		<Link href={href}>
			<a className={`${classes.link} ${isActive ? classes.linkActive : ''}`}>{title}</a>
		</Link>
	)
}

export default LinkActive
