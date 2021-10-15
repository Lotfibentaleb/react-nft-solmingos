import {Box, Container, IconButton, Link, Typography} from '@material-ui/core'
import { SportsEsports, Twitter } from '@material-ui/icons'
import useStyles from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box className={classes.root} textAlign="center">
                <img src="/images/logo.png" alt="PlSolMingos NFT" />
                <Typography variant="subtitle2">
                    Copyright © SolMingos NFT 2021. All rights reserved
                </Typography>
                <Box marginTop={2}>
                    <IconButton href="https://discord.gg/jyFWuU4p">
                        <SportsEsports />
                    </IconButton>
                    <IconButton href="https://twitter.com/SolmingoNFT">
                        <Twitter />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
