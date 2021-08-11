import useStyles from '@/styles/Hero'
import Image from 'next/image'
import HeroBackground from '../../public/background.png'
import { Grid} from '@material-ui/core'

const Hero = ({dataHero}) => {
	const classes = useStyles()
	return (
		<section className={classes.container}>
			<Image
				alt="Aspen"
				className={classes.image}
				layout="fill"
				objectFit="cover"
				objectPosition="bottom"
				src={HeroBackground}
			/>
			<div className={classes.containerHero}>
				<Grid alignItems="flex-end" container justify="center" >
					<Grid item md={2} sm={2}>
						<div className={classes.containerLogo}>
							<Image alt="Justicia" height={100} src={dataHero.icon.url} width={100} />
						</div>
					</Grid>
					<Grid item md={6} sm={6}>
						<header>
							<h1 className={classes.title}>{dataHero.title}</h1>
						</header>
					</Grid>
					<Grid item md={3} sm={8}>
						<div className={classes.titleParagraph}>
							<p className={classes.paragraph}>
								{dataHero.description}
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Hero
