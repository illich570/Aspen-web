import Image from 'next/image'
import Slider from '@/components/Slider'
import useStyles from '@/styles/sections/Present/ArticleSlider'
import Link from 'next/link'
import { Hidden } from '@material-ui/core'

const CardSlider = ({ dataArticles }) => {
	const classes = useStyles()
	return (
		<>
			<Hidden implementation="css" smDown>
				<div className={classes.container}>
					<div className={classes.containerSlider}>
						<Slider dots={false} slidesToShow={3}>
							{dataArticles.map((element) => (
								<Link href={`/actualidad/${element.url}`} key={`card_${element.title}`} passHref>
									<a>
										<div className={classes.containerImage}>
											<Image alt={element.title} height={100} src={element.image.url} width={100} />
											<h5 className={classes.title}>{element.title}</h5>
										</div>
									</a>
								</Link>
							))}
						</Slider>
					</div>
				</div>
			</Hidden>
			<Hidden implementation="css" mdUp>
				<div className={classes.containerSlider}>
					<Slider dots={false} slidesToShow={3}>
						{dataArticles.map((element) => (
							<Link href={`/actualidad/${element.url}`} key={`card_${element.title}`} passHref>
								<a>
									<div className={classes.containerImage}>
										<Image alt="Aspen" height={100} src={element.image.url} width={100} />
										<h5 className={classes.title}>{element.title}</h5>
									</div>
								</a>
							</Link>
						))}
					</Slider>
				</div>
			</Hidden>
		</>
	)
}

export default CardSlider
