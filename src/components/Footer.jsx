import useStyles from '@/styles/Footer'
import Aspen from '@/components/Aspen'
import Image from 'next/image'



const Footer = () => {
	const actualDate = new Date().getFullYear()
	const classes = useStyles()
	return (
		<footer className={classes.container}>
			<div className={classes.containerLogo}>
				<Aspen />
			</div>
			<div className={classes.rowLinks}>
				<h5 className={classes.link}>Servicios</h5>
				<h5 className={classes.link}>Equipo</h5>
				<h5 className={classes.link}>Contacto</h5>
				<h5 className={classes.link}>Legal Tech</h5>
				<h5 className={classes.link}>Nosotros</h5>
			</div>
			<div className={classes.containerRow}>
				<Image alt="LinkedIn" height={100} src="/linkedInLogoWhite.svg" width={100} />
			</div>
      <div className={classes.containerRow}>
        <p>Todos los derechos reservados {actualDate}.</p>
      </div>
			<div className={classes.containerRow}>
			<Image alt="Banana Design" height={100} src="/bananaLogo.svg" width={150} />
      </div>
		</footer>
	)
}

export default Footer
