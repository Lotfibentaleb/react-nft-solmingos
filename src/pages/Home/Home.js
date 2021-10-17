import React from 'react';
import {
    Box, 
    Container, 
    Grid, 
    Accordion, 
    AccordionDetails, 
    AccordionSummary, 
    Typography,
    Hidden
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Home.styles';
import Fade from 'react-reveal/Fade';

const FAQ_DATAS = [
    {question: 'When is the Drop:',                     answer: 'Early december- date to be confirmed'},
    {question: 'How much is the Mint?',                 answer: '1 sol, we want to keep the NFT high quality, while not excluding newcomers'},
    {question: 'Are there secondary sale royalities?',  answer: 'yes, all Solmingo sales have 2.5% royalities'},
    {question: 'What makes Solmingos different?',       answer: 'Solmingos NFT ownership is akin to shares of the brand. After minting we will be launching Solmingo merch, with each solmingo receiving a proportion of the profits. The more solmingos the greater your share in the company'},
    {question: 'Do I own the Solmingo after purchase?', answer: 'Of course! All intellectual property of your Solmingo is yours.'},
]

const Home = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(-1)

    return (
        <Box className={classes.root}>
            <Container maxWidth="lg">

                {/**home section */}
                <Box className={classes.homeSection}>
                    <img className={classes.homeImage} src='/images/home.png' alt='Home' />
                </Box>

                {/**introduction section */}
                <Box className={classes.introSection}>
                    <Box className={classes.sectionId} id='introduction'></Box>
                    <Fade bottom duration={1500} distance='50px'>
                        <Box>
                            <Box className={classes.introLogoBox}>
                                <img className={classes.introLogo} src='images/label-introduction.png' alt='Introduction' />
                            </Box>
                            <Box className={classes.firstArticleArea} >
                                <Box className={classes.firstArticleBox}>
                                    <Typography variant='h3'>
                                        Flamingos generate their colour from their food source.
                                        <br />   
                                        Our flock has been feeding on the Solana blockchain and have evolved to no longer need
                                        their physical bodies, becoming Solmingos.
                                        <br /><br />   
                                        Living on blockchain has many influences causing each member
                                        to become a unique NFT available for adoption soon.
                                    </Typography>
                                    <Box className={classes.featherOne}></Box>
                                </Box>
                            </Box>
                            <Box className={classes.secondArticleArea}>
                                <Box className={classes.secondArticleBox}>
                                    <video className={classes.video} loop autoPlay muted>
                                        <source src='videos/Gif.mov' type="video/mp4"></source>
                                    </video>
                                    <Box className={classes.featherTwo}></Box>
                                    <Box className={classes.featherThree}></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                </Box>

                {/**roadmap section */}
                <Box className={classes.roadmapSection}>
                    <Box className={classes.sectionId} id='roadmap'></Box>
                    <Fade bottom duration={1500} distance='50px'>
                        <Box>
                            <Box className={classes.roadmapLogoBox}>
                                <img className={classes.introLogo} src='images/label-roadmap.png' alt='Roadmap' />
                            </Box>
                            <Box className={classes.roadmapArea} mt={4}>
                                <Hidden smDown>
                                    <Grid container spacing={8}>
                                        <Grid item md={6}>
                                            <Box className={classes.stageOne}>
                                                <Typography variant='h4'>
                                                    Stage 1
                                                </Typography>
                                                <Typography variant='h6'>
                                                    The 4000 solmingos are incubating. The 
                                                    <br />
                                                    artist works on each unqiue 
                                                    <br />
                                                    characteristic, aiming to provide every   
                                                    NFT to be exciting regarless ot he rarity
                                                </Typography>
                                            </Box>
                                            <Box className={classes.stageThree}>
                                                <Typography variant='h4'>
                                                    Stage 3
                                                </Typography>
                                                <Typography variant='h6'>
                                                    list collection on marketplaces.
                                                </Typography>
                                            </Box>
                                            <Box className={classes.stageFive}>
                                                <Typography variant='h4'>
                                                    Stage 5
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Profits from merch sales go back to Solmingo holders,
                                                    the more solmingos you hold the greater your percentage of profits.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Box className={classes.stageTwo}>
                                                <Typography variant='h4'>
                                                    Stage 2
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Mint all 4000 Solmingos onto the blockchain
                                                </Typography>   
                                            </Box>
                                            <Box className={classes.stageFour}>
                                                <Typography variant='h4'>
                                                    Stage 4
                                                </Typography>
                                                <Typography variant='h6'>
                                                    25% of royalities go to a mutual wallet for merch development
                                                </Typography>   
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                                <Hidden mdUp>
                                    <Grid container spacing={8}>
                                        <Grid item md={6}>
                                            <Box className={classes.stageOne}>
                                                <Typography variant='h4'>
                                                    Stage 1
                                                </Typography>
                                                <Typography variant='h6'>
                                                    The 4000 solmingos are incubating. The 
                                                    <br />
                                                    artist works on each unqiue 
                                                    <br />
                                                    characteristic, aiming to provide every   
                                                    NFT to be exciting regarless ot he rarity
                                                </Typography>
                                            </Box>
                                            <Box className={classes.stageTwo}>
                                                <Typography variant='h4'>
                                                    Stage 2
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Mint all 4000 Solmingos onto the blockchain
                                                </Typography>   
                                            </Box>
                                            <Box className={classes.stageThree}>
                                                <Typography variant='h4'>
                                                    Stage 3
                                                </Typography>
                                                <Typography variant='h6'>
                                                    list collection on marketplaces.
                                                </Typography>
                                            </Box>
                                            <Box className={classes.stageFour}>
                                                <Typography variant='h4'>
                                                    Stage 4
                                                </Typography>
                                                <Typography variant='h6'>
                                                    25% of royalities go to a mutual wallet for merch development
                                                </Typography>   
                                            </Box>
                                            <Box className={classes.stageFive}>
                                                <Typography variant='h4'>
                                                    Stage 5
                                                </Typography>
                                                <Typography variant='h6'>
                                                    Profits from merch sales go back to Solmingo holders,
                                                    the more solmingos you hold the greater your percentage of profits.
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                            </Box>
                        </Box>
                    </Fade>
                    <Box className={classes.roadmapLine}></Box>
                </Box>

                {/**faq section */}
                <Box className={classes.faqSection} mt={2}>
                    <Box className={classes.sectionId} id='faq'></Box>
                    <Fade bottom duration={1500} distance='50px'>
                        <Box>
                            <Box className={classes.fagLogoBox}>
                                <img className={classes.introLogo} src='images/label-faq.png' alt='Faq' />
                            </Box>
                            <Box className={classes.faqArea} >
                                <div className={classes.accodionRoot}>
                                    {
                                        FAQ_DATAS.map((item, index) => {
                                            return (
                                                <Accordion 
                                                expanded={expanded === index} 
                                                onChange={() => {
                                                    if(expanded !== index)
                                                        setExpanded(index);
                                                    else
                                                        setExpanded(-1);
                                                }}>
                                                    <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                    >
                                                    {/* <Typography className={classes.heading} variant='h4'>{item.question}</Typography> */}
                                                    <Typography className={classes.secondaryHeading} variant='h5'>{item.question}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Typography className={classes.secondaryHeading} variant='h5'>
                                                        {item.answer}
                                                    </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            )            
                                        })
                                    }
                                </div>
                            </Box>
                        </Box>
                    </Fade>
                </Box>
                <Box className={classes.faqUnderImage}></Box>
            </Container>
        </Box>
    )
}

export default Home
