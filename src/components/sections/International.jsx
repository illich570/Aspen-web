import { Grid } from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@/styles/sections/International'

const International = () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.container}>
				<div className={classes.glassBlur} />
				<div className={classes.containerBackground}>
					<Grid className={classes.containerSection} container justify="flex-end">
						<Grid className={classes.containerInfo} item md={6}>
              <div className={classes.containerImage}>
                <Image alt="ICG internacional" height={80} src="/icgLogo.svg" width={80} />
               </div>
							<div className={classes.containerText}>
								<h1 className={classes.title}>ICG – Red Internacional</h1>
								<p className={classes.paragraph}>
									Creemos en un mundo globalizado y en consecuencia promovemos la expansión de los
									negocios en cada territorio. ASPEN LEGAL es parte de una red internacional de
									despachos de abogados y consultores contables financieros, que coadyuvamos en la
									creación, establecimiento, desarrollo y concreción de las actividades y negocios
									de las personas y empresas, en cualquiera de los países donde estamos ubicados. Es
									una alianza formal con más de 20 años de trayectoria y con presencia en países de
									Latinoamérica y el Caribe, asi como Estados Unidos, España, Italia y China,
									sumando a la fecha 23 entidades.Estamos en constante comunicación para la
									formación en las áreas de interés de cada uno de esos países y en la remisión de
									clientes que quieran emprender nuevos rumbos, con la mejor asesoría legal y
									económica, acompañado de un network vital para la instalación en otras latitudes,
									comprendiendo la dinámica de los negocios internacionales.
                  <br/>
                  Visítanos en https: //www.icg-business.com/web/
								</p>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	)
}

export default International
