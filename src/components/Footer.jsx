import useStyles from '@/styles/Footer'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ routes, dataFooter, logos }) => {
	const actualDate = new Date().getFullYear()
	const classes = useStyles()
	const data = dataFooter[0]
	return (
		<footer className={classes.container}>
			<div className={classes.containerLogo}>
			<Image alt="Aspen legal" height={100} src={logos[0].logo.url} width={100} />
			</div>
			<div className={classes.rowLinks}>
				{routes.map((route) => (
					<Link href={route.route} key={route.id} passHref>
						<a className={classes.link}>{route.title}</a>
					</Link>
				))}
			</div>
			<div className={classes.containerRow}>
				<div>
					<a href={data.urlLinkedin}  rel="noopener noreferrer" target="_blank">
					<Image alt="LinkedIn" height={100} src={data.linkedinIcon.url} width={100} />
					</a>
				</div>
				
			</div>
			<div className={classes.containerRow}>
				<p>
					{data.copyright} {actualDate}.
				</p>
			</div>
			{data.designLogo ? (
				<div className={classes.containerRow}>
					<Image alt="Banana Design" height={100} src={data.designLogo.url} width={150} />
				</div>
			) : null}
		</footer>
	)
}

export default Footer
