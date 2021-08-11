import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/PracticeAreas'


const layout = [
	{
		titleList: 'Comercio',
		titleCard: 'judiciales para la defensa',
		textCard: `	Algunas decisiones del sector público afectan el funcionamiento de las empresas.
		Acumulamos experiencia en la representación de empresas ante los órganos
		administrativos y judiciales para la defensa y cumplimiento en asuntos regulatorios,
		en especial en el rubro de alimentos y bebidas, farmacia, construcción y comercio al
		detal.`,
		iconCard: '/paper.svg',
		index: 0,
	},
	{
		titleList: 'Administracion',
		titleCard: 'rubro de alimentos y bebidas',
		textCard: `	Algunas decisiones del sector público afectan el funcionamiento de las empresas.
		Acumulamos experiencia en la representación de empresas ante los órganos
		administrativos y judiciales para la defensa y cumplimiento en asuntos regulatorios,
		en especial en el rubro de alimentos y bebidas, farmacia, construcción y comercio al
		detal.`,
		iconCard: '/location.svg',
		index: 1,
	},
	{
		titleList: 'Regulatorio',
		titleCard: 'experiencia en la representación',
		textCard: `	Algunas decisiones del sector público afectan el funcionamiento de las empresas.
		Acumulamos experiencia en la representación de empresas ante los órganos
		administrativos y judiciales para la defensa y cumplimiento en asuntos regulatorios,
		en especial en el rubro de alimentos y bebidas, farmacia, construcción y comercio al
		detal.`,
		iconCard: '/fingerprint.svg',
		index: 2,
	},
	{
		titleList: 'Buenas noches',
		titleCard: 'cumplimiento en asuntos regulatorios',
		textCard: `	Algunas decisiones del sector público afectan el funcionamiento de las empresas.
		Acumulamos experiencia en la representación de empresas ante los órganos
		administrativos y judiciales para la defensa y cumplimiento en asuntos regulatorios,
		en especial en el rubro de alimentos y bebidas, farmacia, construcción y comercio al
		detal.`,
		iconCard: '/arrowButtonFilled.svg',
		index: 3,
	},
]
const PracticeAreas = () => {
	const classes = useStyles()
	const [selectedList, setSelectedList] = useState(false)
	const [isFade,setIsFade] = useState(false);

	const handleSelectedList = (selected) => {
		const result = layout.find((element, index) => index === selected)
		setSelectedList(result)
		setIsFade(false)
	}

	useEffect(() => {
		if (selectedList === false) {
			handleSelectedList(1)
			setIsFade(false)
		}
	}, [selectedList])

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
						<Image alt="Justicia" height={100} src="/paper.svg" width={100} />
					</div>
					<div>
						<h3 className={classes.title}>Áreas de Práctica</h3>
					</div>
				</div>
				<div className={classes.paragraphTitle}>
					<p>
						La formación, la experiencia y la adaptabilidad son nuestras herramientas de trabajo.
						Por eso sabemos lo que hacemos.
					</p>
				</div>
			</div>
			<Grid className={classes.containerSection} container justify="center">
				<Grid item md={3}>
					<ul className={classes.list}>
						{layout.map((element, index) => (
							<li
								className={`${classes.listItem} ${index === selectedList.index ? classes.listItemActive : ''}`}
								key={`hola_${index}`}
								onClick={() => handleSelectedList(index)}
							>
								{element.titleList}
							</li>
						))}
					</ul>
				</Grid>
				{selectedList ? (
					<Grid item md={7}>
						<article className={`${classes.sectionInfo} ${isFade ? classes.sectionInfoFade : ''}`}>
							<header className={classes.titleRowSection}>
								<div className={classes.logoSection}>
									<Image alt="Justicia" height={100} src={selectedList.iconCard} width={100} />
								</div>
								<h3 className={classes.titleSection}>{selectedList.titleCard}</h3>
							</header>
							<section>
								<p className={classes.paragraphSection}>{selectedList.textCard}</p>
							</section>
							<div className={classes.imagesSectionRow}>
								<div className={`${classes.containerImageSection}`}>
									<img alt="" className={classes.image} src="/peopleCircle.png" />
								</div>
								<div className={`${classes.containerImageSection}`}>
									<img alt="" className={classes.image} src="/peopleCircle.png" />
								</div>
								<div className={`${classes.containerImageSection}`}>
									<img alt="" className={classes.image} src="/peopleCircle.png" />
								</div>
							</div>
						</article>
					</Grid>
				) : null}
			</Grid>
		</div>
	)
}

export default PracticeAreas
