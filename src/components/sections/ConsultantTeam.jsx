import { Grid } from '@material-ui/core'
import useStyles from '@/styles/sections/ConsultantTeam'


const layout = [1, 2, 3]

const ConsultantTeam = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Grid container justify="center">
				<Grid item md={12}>
					<div className={classes.containerTitle}>
						<div className={classes.titleLogo}>
							<div>
								<h3 className={classes.title}>Consultores</h3>
							</div>
						</div>
						<div>
							<h3 className={classes.subtitle}>Equipo</h3>
						</div>
					</div>
				</Grid>
			</Grid>
			<div className={classes.containerCards}>
				{layout.map((element, index) => (
					<article className={classes.card} key={`tu_mami_${index}`}>
						<div className={`${classes.containerImageSection}`}>
							<img alt="" className={classes.image} src="/peopleCircle.png" />
						</div>
						<header className={classes.memberNameRow}>
							<h3 className={classes.nameMember}>Paolo Longo</h3>
							<h3 className={classes.subtitleMember}>
								Es nuestro abogado consultor en materia corporativa, laboral y litigio.
							</h3>
						</header>
						<p className={classes.infoMember}>
							Egresado cum laude de la Universidad Católica Andrés Bello en el año 2000 con Maestría
							en tributación internacional de la Universidad de Nueva York.
						</p>
					</article>
				))}
			</div>
		</div>
	)
}

export default ConsultantTeam
