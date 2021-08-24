import Image from 'next/image'
import { Grid, Hidden } from '@material-ui/core'
import ArticleSlider from '@/components/sections/Present/ArticleSlider'
import ButtonArrowNext from '@/components/ButtonArrowNext'
import useStyles from '@/styles/sections/Present/PresentPostLayout'
import Link from 'next/link'
const PresentPostLayout = ({ dataArticle }) => {
	const { article, articles, presentSections, dataNextArticle } = dataArticle

	const classes = useStyles()
	return (
		<main className={classes.container}>
			<Hidden implementation="css" smDown>
				<div className={classes.containerTitle}>
					<div className={classes.containerLogo}>
						<Image alt="" height={100} src={presentSections[0].iconArticle.url} width={100} />
					</div>
					<div className={classes.containerText}>
						<h3 className={classes.title}>{presentSections[0].title}</h3>
					</div>
				</div>
				<Grid className={classes.containerPost} container>
					<Grid item md={5}>
						<aside className={classes.spaceArticles}>
							<div className={classes.containerImage}>
								<Image
									alt={article.title}
									className={classes.image}
									layout="fill"
									src={article.image.url}
								/>
							</div>
							<div className={classes.paragraphInterest}>
								<p>Articulos que podrian ser de tu interes</p>
							</div>
							<ArticleSlider dataArticles={articles} />
						</aside>
					</Grid>
					<Grid item md={6}>
						<article>
							<header className={classes.spaceTitle}>
								<h1 className={classes.titleArticle}>{article.title}</h1>
							</header>
							<div
								className={classes.richText}
								dangerouslySetInnerHTML={{ __html: article.content.html }}
							></div>
							{article.noteContent ? (
								<div
									className={classes.richTextNote}
									dangerouslySetInnerHTML={{ __html: article.noteContent.html }}
								/>
							) : null}
							{dataNextArticle.articles.length > 0 ? (
								<div className={classes.containerButton}>
									<div className={classes.button}>
										<Link href={`/actualidad/${dataNextArticle.articles[0].url}`} passHref>
											<ButtonArrowNext title="Siguiente articulo" />
										</Link>
									</div>
								</div>
							) : null}
						</article>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden implementation="css" mdUp>
				<Grid container>
					<Grid item md={3}>
						<div className={classes.imageMobile}>
							<Image alt="" height={42} src={presentSections[0].iconArticle.url} width={42} />
						</div>
					</Grid>
					<Grid item md={9}>
						<div className={classes.containerTitle}>
							<div className={classes.containerText}>
								<h3 className={classes.title}>{presentSections[0].title}</h3>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid className={classes.containerPost} container justify="center">
					<Grid item md={12}>
						<div className={classes.imageMobile}>
							<Image alt={article.title} height={250} src={article.image.url} width={250} />
						</div>
					</Grid>
					<Grid item md={12}>
						<article>
							<header className={classes.spaceTitle}>
								<h1 className={classes.titleArticle}>{article.title}</h1>
							</header>
							<div
								className={classes.richText}
								dangerouslySetInnerHTML={{ __html: article.content.html }}
							></div>
							{article.noteContent ? (
								<div
									className={classes.richTextNote}
									dangerouslySetInnerHTML={{ __html: article.noteContent.html }}
								/>
							) : null}
							{dataNextArticle.articles.length > 0 ? (
								<div className={classes.containerButton}>
									<div className={classes.button}>
										<Link href={`/actualidad/${dataNextArticle.articles[0].url}`} passHref>
											<ButtonArrowNext title="Siguiente articulo" />
										</Link>
									</div>
								</div>
							) : null}
						</article>
					</Grid>
					<Grid item md={12} style={{ width: '100%' }}>
						<div className={classes.paragraphInterest}>
							<p>Articulos que podrian ser de tu interes</p>
						</div>
						<div>
							<ArticleSlider dataArticles={articles} />
						</div>
					</Grid>
				</Grid>
			</Hidden>
		</main>
	)
}

export default PresentPostLayout
