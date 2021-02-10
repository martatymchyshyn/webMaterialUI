import React from "react"
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(7),
        marginTop: theme.spacing(8),
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundOverlay: "rgba(0,0,0,.9)",
    },
    cardMedia: {
        paddingTop: "56.25%"
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const handleLogin = () => (window.location.href = "/sign-in");
const handleRegister = () => (window.location.href = "/sign-up");

function Main(){
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" color="#fdd835">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.menuButton}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            Web-site
                        </Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={handleLogin}>
                                Sign in
                            </Button>
                        </Box>
                        <Button color="secondary" variant="contained" onClick={handleRegister}>
                            Sign up
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper
                    className={classes.mainFeaturesPost}
                    style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
                >
                    <Container fixed>
                        <div className={classes.overlay}></div>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Something
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Something
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={4} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Start now
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Learn more
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Something
                                        </Typography>
                                        <Typography>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size = "sm" color= "primary">View</Button>
                                        <Button size = "sm" color= "primary">Edit</Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default Main