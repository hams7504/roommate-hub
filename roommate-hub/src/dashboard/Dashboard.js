import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';
import Chart from './Chart';
import { PriceSplit } from '../pages/PriceSplit';
import { Images } from '../pages/Images';
import { Playlist } from '../pages/Playlist'
import GoogleCalendar from '../googleCalendar/GoogleCalendar';
import { Contacts } from '../pages/Contacts';
import Orders from './Orders';


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

const drawerWidth = 240;






// export default function Palette() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Primary</Button>
//       <Button color="secondary">Secondary</Button>
//     </ThemeProvider>
//   );
// }

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '12px', // keep right padding when drawer closed
              backgroundColor: "#B56745"
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Roommate Hub
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{backgroundColor: "#C3D8AE",}}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              backgroundColor: "#C3D8AE",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{backgroundColor: "#C3D8AE"}}>
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? "#F7EFDC"
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Typography
                component="h1"
                variant="h1"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                hello, ashley!
              </Typography>
              <Stack direction="row" spacing={3}>
                <Stack direction="column" spacing={3}>
                  <Stack direction="row" spacing={3}>
                    <Grid item xs={12}>
                      <Paper 
                        style={{maxheight: '100%', overflow: 'auto'}}
                        sx={{ p: 2,
                              display: 'flex', 
                              flexDirection: 'row',
                              height: 400,
                              width: 650,
                            }}
                      >
                        <GoogleCalendar />
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper 
                        style={{maxheight: '100%', overflow: 'auto'}}
                        sx={{ p: 2,
                              display: 'flex', 
                              flexDirection: 'row',
                              height: 400,
                              width: 200,
                            }}
                      >
                        <Contacts />
                      </Paper>
                    </Grid>
                  </Stack>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      style={{maxheight: '100%', overflow: 'auto'}}
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 650,
                        width: 850,
                      }}
                    >
                      <PriceSplit />
                    </Paper>
                  </Grid>
                </Stack>
                <Stack direction="column" spacing={3}>
                  <Grid item xs={10} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                      
                        }}
                      >
                        <Images />
                      </Paper>
                  </Grid>
                  <Grid item xs={10} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          width: 350,
                          height: 400,
                        }}
                      >
                        <Playlist />
                      </Paper>
                  </Grid>
                </Stack>
              </Stack>
              

              
            </Container>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}