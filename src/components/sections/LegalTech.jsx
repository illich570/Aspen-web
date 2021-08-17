import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/LegalTech'

const LegalTech = ({ dataTechAreas, dataTechSection }) => {
	const classes = useStyles()
	const [selectedList, setSelectedList] = useState(false)

	const handleSelectedList = (selected) => {
		const result = dataTechAreas.find((element) => element.id === selected)
		setSelectedList(result)
	}

	useEffect(() => {
		if (selectedList === false) {
			setSelectedList(dataTechAreas[0])
		}
	}, [selectedList, dataTechAreas])

	return (
		<div className={classes.container}>
			<Grid  className={classes.containerGrid} container justify="space-between">
				<Grid item md={5}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div className={classes.containerLogo}>
								<Image
									alt={dataTechSection[0].title}
									height={100}
									src={dataTechSection[0].icon.url}
									width={100}
								/>
							</div>
							<div>
								<h3 className={classes.title}>{dataTechSection[0].title}</h3>
							</div>
						</div>
						<div className={classes.containerSectionTitle}>
							<div className={classes.paragraphTitle}>
								<p>{dataTechSection[0].content}</p>
							</div>
							<ul className={classes.list}>
								{dataTechAreas.map((element) => (
									<li
										className={`${classes.listItem} ${
											element.id === selectedList.id ? classes.listItemActive : ''
										}`}
										key={element.id}
										onClick={() => handleSelectedList(element.id)}
									>
										{element.title}
										{element.id === selectedList.id ? (
											<div className={classes.arrowList}>
												<Image alt="arrow" height={100} src="/arrow-left.svg" width={100} />
											</div>
										) : null}
									</li>
								))}
							</ul>
							<div className={classes.containerLinkedIn}>
								<a
									href={dataTechSection[0].iconLinkedinUrl}
									rel="noreferrer noopener"
									target="_blank"
								>
									<Image
										alt="LinkedIn"
										height={50}
										src={dataTechSection[0].iconLinkedin.url}
										width={100}
									/>
								</a>
							</div>
						</div>
					</div>
				</Grid>
				<Grid item md={6}>
					{selectedList ? (
						<article>
							<header className={classes.spaceTitle}>
								<h1 className={classes.titleArticle}>{selectedList.title}</h1>
							</header>
							<div
								className={classes.richText}
								dangerouslySetInnerHTML={{ __html: selectedList.content.html }}
							/>
						</article>
					) : null}
				</Grid>
			</Grid>
		</div>
	)
}

export default LegalTech
