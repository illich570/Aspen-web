import Link from 'next/link'
import { useRouter } from 'next/router'
import useStyles from '@/styles/Navbar/LinkActive'

function checkActive(routerRef, href) {
	return routerRef === href
}

const LinkActive = ({ href, title }) => {
	const classes = useStyles()
	const router = useRouter()
	const isActive = checkActive(router.asPath, href)
	return (
		<Link href={href}>
			<a className={`${classes.link} ${isActive ? classes.linkActive : ''}`}>{title}</a>
		</Link>
	)
}

export default LinkActive
