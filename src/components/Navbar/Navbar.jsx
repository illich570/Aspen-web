import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Hidden, Drawer, IconButton } from '@material-ui/core'
import RoutesNavbar from '@/components/Navbar/RoutesNavbar'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ContactTooltip from '@/components/Navbar/ContactTooltip'
import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import useStyles from '@/styles/Navbar/Navbar'
import Image from 'next/image'

const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		minWidth: 350,
		fontSize: theme.typography.pxToRem(12),
		border: '4px solid #fcfcfc',
		position: 'relative',
		padding: 0,
		margin: '30px 0',
		'&::after': {
			width: '0',
			height: '0',
			content: '""',
			position: 'absolute',
			top: '-25px',
			right: '20px',
			borderStyle: 'solid',
			borderWidth: '15px 7.5px 7.5px 7.5px',
			borderColor: '#fcfcfc transparent transparent transparent',
			transform: 'rotate(180deg)',
		},
	},
}))(Tooltip)


const Navbar = ({ blackColor, routes, logos}) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [showSidebar, setShowSidebar] = useState(false)
	const handleShowSidebar = () => setShowSidebar(!showSidebar)
	const [showModal,setShowModal] = useState(false);

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipOpen = () => {
		setOpen(true)
	}


  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

	const logoUrl = blackColor === true ? logos[0].darkLogo.url : logos[0].logo.url
	return (
		<AppBar className={classes.noBoxShadow} color="transparent">
			<Grid className={classes.containerNavbar} container justify="center">
				<Grid item md={2} xs={6}>
					<div className={classes.container}>
						<Image alt="Justicia" height={60} src={logoUrl} width={100} />
					</div>
				</Grid>
				<Grid item md={10} xs={6}>
					<Hidden implementation="css" smDown>
						<Grid container>
							<RoutesNavbar routes={routes} />
							<Grid className={classes.container} item md={2}>
								<div className={classes.container}>
									<ClickAwayListener onClickAway={handleTooltipClose}>
										<CustomTooltip
											PopperProps={{
												disablePortal: true,
											}}
											disableFocusListener
											disableHoverListener
											disableTouchListener
											onClose={handleTooltipClose}
											open={open}
											placement="bottom-end"
											title={<ContactTooltip />}
										>
											<Button
												className={classes.button}
												color="primary"
												onClick={handleTooltipOpen}
												variant="contained"
											>
												Contáctanos
											</Button>
										</CustomTooltip>
									</ClickAwayListener>
								</div>
							</Grid>
						</Grid>
					</Hidden>
					<Hidden implementation="css" mdUp>
						<Grid container direction="row" justify="center">
							<IconButton color="primary" onClick={handleShowSidebar}>
								<MenuIcon style={{ fontSize: '2em' }} />
							</IconButton>
						</Grid>
						<Drawer
							anchor="right"
							onClose={handleShowSidebar}
							open={showSidebar}
							variant="temporary"
						>
							<IconButton
								aria-label="open drawer"
								className={classes.closeButtonDrawer}
								color="primary"
								onClick={handleShowSidebar}
							>
								<Close />
							</IconButton>
							<Grid
								className={classes.containerMobile}
								container
								direction="column"
								justify="center"
							>
								<RoutesNavbar routes={routes} />
								<Button
									className={classes.button}
									color="primary"
									onClick={handleOpenModal}
									variant="contained"
								>
									Contáctanos
								</Button>
							</Grid>
						</Drawer>
						<Dialog aria-labelledby="customized-dialog-title" onClose={handleCloseModal} open={showModal} >
							<DialogTitle>
									Datos de Contacto
								<IconButton
								aria-label="open drawer"
								className={classes.closeButtonDrawer}
								color="primary"
								onClick={handleCloseModal}
							>
								<Close />
							</IconButton>
							</DialogTitle>
							<DialogContent className={classes.containerDialog}>
								<ContactTooltip />
							</DialogContent>
						</Dialog>
					</Hidden>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Navbar
