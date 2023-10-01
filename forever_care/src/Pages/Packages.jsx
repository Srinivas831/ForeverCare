import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Basic',
    price: '39',
    description: [
      'Consultation with doctor',
      'Laboratory and diagnostic tests',
      'Two home visits a year',
      'Email support',
    ],
    buttonText: 'Pay Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '59',
    description: [
      'ALL from BASIC +',
      'Day and night emergency care',
      'Help center access',
      'Two more home visits a year',
    ],
    
    buttonText: 'Pay Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '99',
    description: [
      'ALL from PRO +',
      'Rehabilitation after injury',
      'Full-body check-up',
      'Detailed health report',
      'Four more home visits a year',
    ],
    buttonText: 'Pay Now',
    buttonVariant: 'contained',
  },
];


const defaultTheme = createTheme();

export default function Pricing() {

    const navigate = useNavigate();

  const handlePayNowClick = () => {
    navigate("/pay");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
    
      {/* Hero unit */}
      <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="green"
          gutterBottom
        >
          Health Packages
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Discover our specially curated healthcare packages designed to provide comprehensive and specialized care for our patients. We believe in making healthcare accessible and tailored to your needs, and our packages are a testament to that commitment.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="green">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="green">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}
                  onClick={() => handlePayNowClick(tier.title)} 
                  
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </ThemeProvider>
  );
}