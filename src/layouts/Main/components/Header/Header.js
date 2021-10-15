import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Button,
    Link,
    Grid,
    IconButton,
    Hidden
} from '@material-ui/core'
import {PlayArrow, SportsEsports, Twitter} from '@material-ui/icons'
import useStyles from './Header.styles'

import Logo from './Logo'

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64
    })

    // const isLightHeader = !isScrolling
    const isLightHeader = true

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar elevation={0} className={`${classes.appBar} ${isLightHeader ? ' light' : ''}`}>
            <Toolbar className={withSmallStyles(classes.toolbar)}>

                {/* <Box flexGrow={1} /> */}

                <Box className={classes.navBar}>
                    <Hidden smDown>
                        <Box>
                            <Grid container spacing={4}>
                                <Grid item>
                                    <Link href="#introduction" variant="caption" color="#ffffff">
                                        Introduction
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#roadmap" variant="caption" color="#ffffff">
                                        Roadmap
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#faq" variant="caption" color="#ffffff">
                                        FAQ
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Hidden>
                    {/* <Hidden smDown>
                        <Box marginLeft={8}>
                            <Button variant="contained" color="primary">
                                Play Now
                            </Button>
                        </Box>
                    </Hidden>
                    <Box marginLeft={4}>
                        <Hidden mdUp>
                            <IconButton>
                                <PlayArrow />
                            </IconButton>
                        </Hidden>
                        <IconButton component={Link} href="https://discord.gg/jyFWuU4p">
                            <SportsEsports />
                        </IconButton>
                        <IconButton component={Link} href="https://twitter.com/SolmingoNFT">
                            <Twitter />
                        </IconButton>
                    </Box> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
