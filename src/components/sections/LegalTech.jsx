import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/LegalTech'

const layout = [
	{
		titleList: 'Firmas electrónicas',
		titleText: 'Firmas electrónicas',
		text: `Es una herramienta para suscribir documentos, regulado por la Ley de Mensajes de Datos
	y Firmas Electrónicas. Nuestros abogados cuentan con la firma electrónica otorgada por
	Procert, una entidad privada autorizada por la Superintendencia de Servicios de
	Certificación Electrónica (SUSCERTE), organismo adscrito al Ministerio especializado
	en la materia, la cual garantiza la inclusión de la firma en documentos con contenido
	de certificación. ¿Para qué nos sirve tener un documento con firma electrónica? - En
	caso que su abogado deba suscribir como apoderado de su cliente documentos a
	distancia, la inclusión de la firma electrónica le dará al documento un contenido de
	veracidad y validez superior a solo una firma digital escaneada. - En caso de
	documentos suscritos por varias partes a través de firmas digitales manuscritas, la
	presencia de la firma digital del abogado servirá como una garantía del contenido
	acordado por las partes, expresado a través del visado del documento mediante la firma
	electrónica.`,
		index: 0,
	},
	{
		titleList: 'Firmas magneticas',
		titleText: 'Firmas estados',
		text: `Es una herramienta para suscribir documentos, regulado por la Ley de Mensajes de Datos
	y Firmas Electrónicas. Nuestros abogados cuentan con la firma electrónica otorgada por
	Procert, una entidad privada autorizada por la Superintendencia de Servicios de
	Certificación Electrónica (SUSCERTE), organismo adscrito al Ministerio especializado.`,
		index: 1,
	},
]

const LegalTech = () => {
	const classes = useStyles()
	const [selectedList, setSelectedList] = useState(false)

	const handleSelectedList = (selected) => {
		const result = layout.find((element, index) => index === selected)
		setSelectedList(result)
	}

	useEffect(() => {
		if (selectedList === false) {
			handleSelectedList(0)
		}
	}, [selectedList])

	return (
		<div className={classes.container}>
			<Grid container justify="space-between">
				<Grid item md={5}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div className={classes.containerLogo}>
								<Image alt="Justicia" height={100} src="/fingerprint.svg" width={100} />
							</div>
							<div>
								<h3 className={classes.title}>Legal Tech</h3>
							</div>
						</div>
						<div className={classes.containerSectionTitle}>
							<div className={classes.paragraphTitle}>
								<p>
									Tenemos a disposición herramientas que facilitan el servicio legal utilizando los
									avances de la tecnología.
								</p>
							</div>
							<ul className={classes.list}>
								{layout.map((element, index) => (
									<li
										className={`${classes.listItem} ${index === selectedList.index ? classes.listItemActive : ''}`}
										key={`hola_${index}`}
										onClick={() => handleSelectedList(index)}
									>
										{element.titleList}
										{index === selectedList.index ? (
											<div className={classes.arrowList}>
												<Image alt="arrow" height={100} src="/arrowCarousel.svg" width={100} />
											</div>
										) : null}
									</li>
								))}
							</ul>
							<div className={classes.containerLinkedIn}>
								<Image alt="LinkedIn" height={50} src="/linkedInLogo.svg" width={100} />
							</div>
						</div>
					</div>
				</Grid>
				<Grid item md={6}>
					{selectedList ? (
						<article>
							<header className={classes.spaceTitle}>
								<h1 className={classes.titleArticle}>{selectedList.titleText}</h1>
							</header>
							<p className={classes.paragraph}>{selectedList.text}</p>
						</article>
					) : null}
				</Grid>
			</Grid>
		</div>
	)
}

export default LegalTech
