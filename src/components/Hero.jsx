import useStyles from '@/styles/Hero'
import Image from 'next/image'

const Hero = ({ dataHero }) => {
	const classes = useStyles()
	return (
		<section className={classes.container}>
			<Image
				alt="Aspen"
				className={classes.image}
				layout="fill"
				objectFit="cover"
				objectPosition="top"
				src={dataHero.background.url}
			/>
			<div className={classes.containerHero}>
				<div className={classes.containerLogo}>
					<Image alt="Justicia" height={80} src={dataHero.icon.url} width={80} />
				</div>
				<h1 className={classes.title}>{dataHero.title}</h1>
				<div className={classes.titleParagraph}>
					<p>{dataHero.description}</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
