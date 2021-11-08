import React from 'react';
import { Card, Grid, CardMedia, Container, Typography, CardContent, Divider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createOverrides from './theme';
import { lineHeight } from '@mui/system';

const useStyles = makeStyles({
    firstName:{
        fontSize: "170px",
        color: "#B91224!important",
        lineHeight: "0.6"
    },
    lastName:{
        paddingLeft: "90px",
        color: "#000",
        fontSize: "90px"
    },
    line: {
        borderWidth: "3px",
        borderColor: "#B91224!important",
    },
    page1: {
        
        position: "relative",
        top: "-120px",
        bottom: "120px"
    },
    title: {
        fontSize: "35px",
        fontWeight: "bold",
        color: "#B91224!important"
    },
    pt10: {
        paddingTop: "10px",
        textAlign: "justify",
    },
    pt40: {
        paddingTop: "40px",
        textAlign: "justify",
    },
    pt0: {
        paddingTop: "0px",
        textAlign: "justify",
    },
    para: {
        fontWeight: "bold"
    }

});

const Page1 = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.page1}>
            <Card sx={{ minWidth: 275 }} elevation={9}>
                <Grid container item md={12} >
                    <Grid container item md={4} className={classes.pt10} direction="column">
                        <CardContent>
                            <CardMedia component="img" src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/image2.webp" alt="Rick Parlante" />
                        </CardContent>
                    </Grid>
                    <Grid container item md={8}>
                        <CardContent>
                            <Typography variant={'h5'} className={classes.pt10}>
                                WE PLANTED THE RIGHT SEEDS, AND WE HAD THE RIGHT FORMULAS THAT WE
                                DEVELOPED EARLY ON. WE DIDN’T GO OUT AND DO IT WRONG AND THEN TRY
                                TO FIND SOMEBODY TO HIRE TO HELP US FIX ALL OF OUR MISTAKES. I HIRED
                                THE RIGHT PEOPLE FROM THE BEGINNING.
                            </Typography>
                            <Divider className={classes.line} />

                            <Typography variant={'body1'} className={classes.pt10}>
                                “Try me,” Richard said. With the help of his coach
                                and mentors, Richard developed systems and
                                strategies that rapidly generated business. By
                                the end of the year, he was leading the sales for
                                Coldwell Banker. Richard left Coldwell Banker and
                                joined Downing Frye 10 years ago.
                            </Typography>

                            <Typography variant={'body1'} className={classes.pt10}>
                                How did he do it? Richard says, “We planted
                                the right seeds, and we had the right formulas
                                that we developed early on. When you have a
                                love and desire to help people, and match it with
                                strong work and personal ethics, it’s a formula
                                for success. I also hired the right people from the
                                beginning. When you have a great team, you have
                                a great business.”
                            </Typography>

                            <Typography variant={'body1'} className={classes.pt10}>
                                Some of Richard’s coaches and mentors included
                                the Mike Ferry organization, with Bob McKinnen,
                                Ken Goodfellow, and Dan Bagley. Bob and Richard
                                worked together to create a distinct team atmosphere for Richard’s business. In doing so, they
                                hired a consultant who performed psychological profiles for Fortune 500 companies to determine if new hires possessed the 
                                qualities needed to do specific jobs. “He told me, ‘What we’re going to do is we’re going to find your strengths
                                and weaknesses out of all the different job descriptions that funnel into a real estate person’s life. Your strengths we’ll play into, and we’ll
                                delegate the rest,’” Richard says.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item md={12} >
                    <Grid container item md={8} className={classes.p10} direction="column">
                        <CardContent>
                            <CardMedia component="img" src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/image3.webp" alt="Rick Parlante" />
                        </CardContent>
                    </Grid>
                    <Grid container item md={4}>
                        <CardContent>
                            <Typography variant={'body1'} className={classes.pt10}>
                                “That’s how I started with my first
                                assistant, who took care of all my
                                clerical stuff, which wasn’t one of
                                my strengths. Then, I hired a buyer
                                specialist and a listing manager. We
                                just got busier and busier from there.
                                I do the things that generate the
                                income, and everything else has been
                                delegated. It makes the whole ball roll
                                more smoothly. More importantly,
                                you’re not leaving it to one person,
                                and nobody ever has anything falling
                                between the cracks because of an
                                overworked agent. This is the way
                                I’ve done it ever since 1987.”
                            </Typography>

                            <Typography variant={'body1'} className={classes.pt10}>
                                Richard and his family are very faith
                                forward and strong in their church.
                                He believes in God above all things
                                — work, play, finances… Richard gives
                                thanks to God, first and foremost, for
                                his many blessings and accomplishments. Something else Richard attributes his success to is his martial arts
                                career— not so much the act of martial arts itself, but the discipline that
                                goes along with it. 
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid container item md={12}>
                        <CardContent>
                            <Typography variant={'body1'} className={classes.pt5}>
                                Richard has been
                                training for 45 years, 20 of which
                                were spent as an instructor. “By and
                                large, you can’t have a disciplined portion of your life and an undisciplined
                                other portion of your life,” he says.
                                “You’re either a disciplined person, or
                                you’re not. Hitting the snooze button
                                in the morning isn’t an option. That’s
                                why I get to the gym early in the
                                morning. I do my bike rides early in
                                the morning. My foundation in martial
                                arts is why I do the things I do. I’m 66
                                years old, so I don’t work at the same
                                level that I did 30 years ago, but the
                                disciplines are still there.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item md={12} spacing={2}>
                    <Grid container item md={6} className={classes.pt10} direction="column">
                        <CardContent>
                            <CardMedia component="img" src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/image5.webp" alt="Rick Parlante" />
                        </CardContent>
                    </Grid>
                    <Grid container item md={6} className={classes.pt10} direction="column">
                        <CardContent>
                            <CardMedia component="img" src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/image4.webp" alt="Rick Parlante" />
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container item md={12}>
                    <CardContent>
                        <Typography variant={'h5'} className={classes.pt10}>
                            WHAT WE’RE GOING TO DO IS WE’RE GOING TO FIND YOUR STRENGTHS AND
                            WEAKNESSES OUT OF ALL THE DIFFERENT JOB DESCRIPTIONS THAT FUNNEL
                            INTO A REAL ESTATE PERSON’S LIFE. YOUR STRENGTHS WE’LL PLAY INTO, AND
                            WE’LL DELEGATE THE REST
                        </Typography>
                        <Divider className={classes.line} />
                    </CardContent>
                </Grid>
                <Grid container item md={12} className={classes.pt10} direction="column">
                    <CardContent>
                        <CardMedia component="img" src="https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/image1.webp" alt="Rick Parlante" />
                    </CardContent>
                </Grid>
                <Grid container item md={12} className={classes.pt40} direction="column">
                    <CardContent>
                        <Typography variant={'body1'} >
                            Richard and his wife, Chris, have
                            been married for 34 years. Chris
                            works alongside her husband as his
                            office manager. Richard says they
                            figured out early on that one of the
                            keys to a successful marriage is
                            quality time together. “We decided
                            many, many years ago that we would
                            spend our time off traveling, whether
                            it’s just a weekend or an overnighter.
                            We have done a ton of traveling over
                            the years; you name it, we’ve been
                            there,” Richard adds. “Instead of buying material things as gifts, we buy
                            trips. We’re taking our grandkids on a
                            cruise. We took my daughter and my
                            grandson to Italy for his graduation.”
                            Richard and Chris have three living
                            children and one who has passed.
                            They also have seven grandchildren
                            and one great-grandchild.
                            “The old adage is, you ask a child at
                            any point in time in their life, ‘Do you
                            remember what I bought you?’ and
                            they won’t remember. But, if you ask
                            them, ‘Do you remember that trip we
                            went on?’ they remember every single
                            part of it because it has a lasting
                            memory. So we decided we would
                            start focusing our time and energy on
                            travel. When you have common interests, and you have respect for each
                            other, then it works very well.”
                        </Typography>
                    </CardContent>
                </Grid>

            </Card>
        </Container>
    )
}

export default Page1;