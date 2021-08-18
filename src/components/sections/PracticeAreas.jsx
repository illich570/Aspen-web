import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/PracticeAreas'

const PracticeAreas = ({dataAreas, dataAreaSection}) => {
	const classes = useStyles()
	const [selectedList, setSelectedList] = useState(false)
	const [isFade,setIsFade] = useState(false);

	const handleSelectedList = (selected) => {
		const result = dataAreas.find((element) => element.id === selected)
		//eslint-disable-next-line
		console.log(result)
		setSelectedList(result)
		setIsFade(false)
	}

	useEffect(() => {
		if (selectedList === false) {
			setSelectedList(dataAreas[0])
			setIsFade(false)
		}
	}, [selectedList,dataAreas])

	useEffect(() => {
		if(isFade === false){
			const timer = setTimeout(() => {
				setIsFade(true)
			}, 100);
			return () => clearTimeout(timer);
		}
	},[isFade])

	return (
		<div className={classes.container}>
			<div className={classes.containerTitle}>
				<div className={classes.titleLogo}>
					<div className={classes.containerLogo}>
						<Image alt={dataAreaSection[0].title} height={100} src={dataAreaSection[0].icon.url} width={100} />
					</div>
					<div>
						<h3 className={classes.title}>{dataAreaSection[0].title}</h3>
					</div>
				</div>
				<div className={classes.paragraphTitle}>
					<p>
						{dataAreaSection[0].description}
					</p>
				</div>
			</div>
			<Grid className={classes.containerSection} container justify="center">
				<Grid item md={3}>
					<ul className={classes.list}>
						{dataAreas.map((element) => (
							<li
								className={`${classes.listItem} ${element.id === selectedList.id ? classes.listItemActive : ''}`}
								key={element.id}
								onClick={() => handleSelectedList(element.id)}
							>
								{element.title}
							</li>
						))}
					</ul>
				</Grid>
				{selectedList ? (
					<Grid item md={7}>
						<article className={`${classes.sectionInfo} ${isFade ? classes.sectionInfoFade : ''}`}>
							<header className={classes.titleRowSection}>
								<div className={classes.logoSection}>
									<Image alt={selectedList.title} height={100} src={selectedList.icon.url} width={100} />
								</div>
								<h3 className={classes.titleSection}>{selectedList.title}</h3>
							</header>
							<section>
								<div className={classes.paragraphSection} dangerouslySetInnerHTML={{ __html: selectedList.content.html}}/>
							</section>
							<div className={classes.imagesSectionRow}>
								{
									selectedList.memberArea.length > 0 ?
									selectedList.memberArea.map((element,index) => (
										<div className={`${classes.containerImageSection}`} key={`${index}_member`}>
										<img alt="" className={classes.image} src={element.url} />
									</div>
									)) : null
								}
							</div>
						</article>
					</Grid>
				) : null}
			</Grid>
		</div>
	)
}

export default PracticeAreas
