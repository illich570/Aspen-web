import Image from 'next/image'
import { Grid } from '@material-ui/core'
import ArticleSlider from '@/components/sections/Present/ArticleSlider'
import ButtonArrowNext from '@/components/ButtonArrowNext'
import useStyles from '@/styles/sections/Present/PresentPostLayout'
const PresentPostLayout = ({ dataArticle }) => {
	const {article,articles} = dataArticle
	const classes = useStyles()
	return (
		<main className={classes.container}>
			<div className={classes.containerTitle}>
				<div className={classes.containerLogo}>
					<Image alt="Justicia" height={100} src="/lensBlueIcon.svg" width={100} />
				</div>
				<div className={classes.containerText}>
					<h3 className={classes.title}>Actualidad Legal</h3>
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
						<p>
							En 2019 se incorporó al sistema tributario venezolano el Impuesto a los Grandes
							Patrimonios (IGP) a través de un texto denominado “Ley Constitucional que crea el
							Impuesto a los Grandes Patrimonios” producido por la Asamblea Nacional Constituyente
							en el ejercicio de unas funciones altamente cuestionadas por razones de legitimidad.
							Dicho impuesto, grava con una alícuota comprendida entre 0,25% y 1,50%, el patrimonio
							neto de los Sujetos Pasivos Especiales (SPE), conformado por bienes y derechos reales
							que sean de su propiedad o estén en su posesión -según cada caso-, y cuyo valor en su
							conjunto sea igual o superior a ciento cincuenta millones de Unidades Tributarias
							(150.000.000 U.T.). Dadas sus características, este es un impuesto que grava la
							tenencia de patrimonio y no su rentabilidad; que presenta serios problemas en su
							aplicación al no ser deducible del impuesto sobre la renta (ISLR), no tomar en cuenta
							las normas sobre residencia y establecimiento permanente establecidas en el
							ordenamiento jurídico interno, como tampoco contemplar la acreditación del IGP pagado
							en Venezuela contra impuestos análogos pagados en jurisdicciones foráneas, todas estas
							condiciones que abonan el terreno a la doble imposición e incluso, hasta la
							confiscación. El primer período de imposición de este tributo fue en 2019, a pesar de
							la prohibición constitucional de irretroactividad de la ley, con una alícuota inicial
							del 0,25% y exceptuándose para ese ejercicio, las reglas de valoración establecidas en
							dicho texto impositivo. Corresponde este año 2020, el segundo período impositivo desde
							que se creó el IGP en unas circunstancias particulares en razón de la pandemia del
							covid-19; momento en el cual aún no se han dictado las normas de valoración de los
							bienes y derechos que componen el patrimonio gravable, que fueron delegadas por la
							denominada “Ley Constitucional” a la Administración Tributaria Nacional (SENIAT) en
							abierta confrontación con la reserva legal tributaria, dado que los elementos de
							determinación del tributo deben estar previstos en la propia ley. En ese sentido, los
							SPE sometidos a la declaración y pago de este tributo requerirán de la asesoría de un
							equipo jurídico de gran experticia para disminuir los riesgos fiscales que implica la
							determinación del IGP, y con amplia visión del entorno fiscal interno y foráneo;
							rasgos que caracterizan a nuestro equipo profesional para asegurar la mejor defensa de
							los derechos e intereses de nuestros clientes.
						</p>
						<div className={classes.containerButton}>
							<div className={classes.button}>
								<ButtonArrowNext title="Siguiente articulo" />
							</div>
						</div>
					</article>
				</Grid>
			</Grid>
		</main>
	)
}

export default PresentPostLayout
