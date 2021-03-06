import Image from 'next/image'
import Slider from '@/components/Slider'
import useStyles from '@/styles/sections/Present/ArticleSlider'
import Link from 'next/link'
import { Hidden } from '@material-ui/core'

const CardSlider = ({ dataArticles }) => {
	const classes = useStyles()
	const lengthArticles = dataArticles.length
	return (
		<>
			<Hidden implementation="css" smDown>
				<div className={classes.container}>
					<div className={classes.containerSlider}>
						<Slider dots={false} slidesToShow={lengthArticles}>
							{dataArticles.map((element) => (
								<div key={`card_${element.title}`}>
									<div className={classes.containerArticle}>
										<Link href={`/actualidad/${element.url}`} passHref>
											<a>
												<div className={classes.containerImage}>
													<Image
														alt={element.title}
														className={classes.image}
														height={100}
														src={element.image.url}
														width={100}
													/>
													<div className={classes.containerTitle}>
														<h5 className={classes.title}>{element.title}</h5>
													</div>
												</div>
											</a>
										</Link>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</Hidden>
			<Hidden implementation="css" mdUp>
				<div className={classes.containerSlider}>
					<Slider dots={false} slidesToShow={lengthArticles}>
						{dataArticles.map((element) => (
							<div key={`card_${element.title}`}>
								<div className={classes.containerCardSlider}>
									<Link href={`/actualidad/${element.url}`} passHref>
										<a>
											<div className={classes.containerImage}>
												<Image
													alt={element.title}
													className={classes.image}
													height={100}
													src={element.image.url}
													width={100}
												/>
												<div className={classes.containerTitle}>
													<h5 className={classes.title}>{element.title}</h5>
												</div>
											</div>
										</a>
									</Link>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</Hidden>
		</>
	)
}

export default CardSlider
