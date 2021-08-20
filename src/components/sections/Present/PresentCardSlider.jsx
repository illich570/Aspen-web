import Image from 'next/image'
import ButtonArrowNext from '@/components/ButtonArrowNext'
import Slider from '@/components/Slider'
import useStyles from '@/styles/sections/Present/PresentCardSlider'
import Link from 'next/link'
const PresentCardSlider = ({ dataArticles }) => {
	const classes = useStyles()
	return (
		<section className={classes.container}>
			<div className={classes.containerSlider}>
				<Slider dots={false}>
					{dataArticles.map((element) => (
						<article key={element.id}>
							<div className={classes.containerCard}>
								<div className={classes.containerImage}>
									<Image
										alt={element.title}
										height={80}
										layout="responsive"
										src={element.image.url}
										width={80}
									/>
								</div>
								<h1 className={classes.title}>{element.title}</h1>
								<div className={classes.button}>
									<Link href={`/actualidad/${element.url}`} passHref>
										<ButtonArrowNext title="Leer el artículo" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default PresentCardSlider
