import LinkActive from '@/components/Navbar/LinkActive'
import { Grid, Hidden } from '@material-ui/core'
import useStyles from '@/styles/Navbar/RoutesNavbar'



const RoutesNavbar = () => {
	const classes = useStyles()
	return (
		<>
			<Hidden implementation="css" smDown>
				<Grid className={classes.containerRoutes} item md={12}>
					<div className={classes.routes}>
						<div className={classes.route}>
							<LinkActive href="/" title="Home" />
						</div>
						<div className={classes.route}>
							<LinkActive href="/actualidad" title="Actualidad Legal" />
						</div>
						<div className={classes.route}>
							<LinkActive href="/areas" title="Areas de practica" />
						</div>
						<div className={classes.route}>
							<LinkActive href="/legal" title="Legal tech" />
						</div>
						<div className={classes.route}>
							<LinkActive href="/equipo" title="Equipo" />
						</div>
						<div className={classes.route}>
							<LinkActive href="/internacional" title="ICG – Red Internacional" />
						</div>
					</div>
				</Grid>
			</Hidden>
			<Hidden implementation="css" mdUp>
			<div className={classes.routesMobile}>
						<div className={classes.routeMobile}>
							<LinkActive href="/" title="Home" />
						</div>
						<div className={classes.routeMobile}>
							<LinkActive href="/actualidad" title="Actualidad Legal" />
						</div>
						<div className={classes.routeMobile}>
							<LinkActive href="/areas" title="Areas de practica" />
						</div>
						<div className={classes.routeMobile}>
							<LinkActive href="/legal" title="Legal tech" />
						</div>
						<div className={classes.routeMobile}>
							<LinkActive href="/equipo" title="Equipo" />
						</div>
						<div className={classes.routeMobile}>
							<LinkActive href="/internacional" title="ICG – Red Internacional" />
						</div>
					</div>
			</Hidden>
		</>
	)
}

export default RoutesNavbar
