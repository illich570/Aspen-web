import Image from 'next/image'
import Slider from '@/components/Slider'
import useStyles from '@/styles/sections/Present/ArticleSlider'
import Link from 'next/link'

const CardSlider = ({ dataArticles }) => {
	const classes = useStyles()
	return (
		<section className={classes.container}>
			<div className={classes.containerSlider}>
				<Slider dots={false} slidesToShow={3}>
					{dataArticles.map((element, index) => (
						<Link href={`/actualidad/${element.url}`} key={`card_${element.title}`} passHref>
							<a>
								<div className={classes.containerImage}>
									<Image
										alt="Aspen"
										height={100}
										layout="responsive"
										src={element.image.url}
										width={100}
									/>
									<h5 className={classes.title}>Titulo {index}</h5>
								</div>
							</a>
						</Link>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default CardSlider
