import { Grid } from '@material-ui/core'
import ButtonArrowNext from '@/components/ButtonArrowNext'
import useStyles from '@/styles/sections/TeamMember'



const TeamMember = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid container justify="center">
				<Grid item md={12}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div>
								<h3 className={classes.title}>Equipo</h3>
							</div>
						</div>
						<div>
							<h3 className={classes.subtitle}>Consultores</h3>
						</div>
					</div>
				</Grid>
			</Grid>
			<Grid alignItems="flex-end" container justify="center">
				<Grid item md={5}>
					<div className={classes.card}>
						<div className={`${classes.containerImageSection}`}>
							<img alt="" className={classes.image} src="/peopleCircle.png" />
						</div>
						<div className={classes.memberNameRow}>
							<h3 className={classes.nameMember}>Tadeo Arrieche Franco</h3>
							<h3 className={classes.emailMember}>tadeo.arrieche@aspen-legal.com </h3>
						</div>
							<p className={classes.memberInfo}>
								Es abogado con experiencia en juicios civiles, mercantiles y procedimientos
								administrativos, así como en el diseño de contrataciones.
							</p>
					</div>
				</Grid>
				<Grid item md={7}>
					<p className={classes.paragraph}>
						Egresado como abogado de la Universidad Central de Venezuela en el año 2001, se dedicó a
						realizar estudios de Especialización de Derecho Procesal en esa Universidad. Es Magister
						en Estudios Políticos y de Gobierno y Especialista en Derecho Corporativo, ambos títulos
						obtenidos en la Universidad Metropolitana. Desde estudiante, tiene contacto cotidiano
						con los tribunales y órganos administrativos donde se ventilan las acciones de defensas
						de sus clientes, así mismo viene representando a personas naturales y jurídicas
						dedicadas al campo del retail de alimentos y productos de aseo personal, construcción,
						manufactura y comercio en general en negociaciones de orden corporativo y extrajudicial
						lo que lo hace también partícipe en el diseño de contratos, acuerdos, convenios en las
						materias antes descritas. Comparte la actividad profesional con la docencia en la
						Cátedra de Derechos Reales de la Universidad Metropolitana, como miembro de la Sociedad
						Venezolana de Derecho Mercantil y la dirección de un think tank independiente que trata
						temas de actualidad.
					</p>
				</Grid>
				<div className={classes.containerButton}>
					<div className={classes.button}>
						<ButtonArrowNext filled title="Siguiente integrante" />
					</div>
				</div>
			</Grid>
		</div>
	)
}

export default TeamMember
