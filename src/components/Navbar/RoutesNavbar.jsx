import LinkActive from '@/components/Navbar/LinkActive'
import { Grid, Hidden } from '@material-ui/core'
import useStyles from '@/styles/Navbar/RoutesNavbar'


const RoutesNavbar = ({ routes }) => {

	const classes = useStyles()
	return (
		<>
			<Hidden implementation="css" smDown>
				<Grid className={classes.containerRoutes} item md={12}>
					<div className={classes.routes}>
						{routes.map((route) => (
							<div className={classes.route} key={route.id}>
								<LinkActive href={route.route} title={route.title} />
							</div>
						))}
					</div>
				</Grid>
			</Hidden>
			<Hidden implementation="css" mdUp>
				<div className={classes.routesMobile}>
					{routes.map((route) => (
						<div className={classes.routeMobile} key={`${route.id}_${route.title}`}>
							<LinkActive href={route.route} title={route.title} />
						</div>
					))}
				</div>
			</Hidden>
		</>
	)
}

export default RoutesNavbar
