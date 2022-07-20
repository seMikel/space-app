import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from './images/logo.png';
import menuLogo from './images/menu.png';

function AppMenu() {
  const navigate = useNavigate();
  const isMobile = !useMediaQuery(theme => theme.breakpoints.up('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: 50, gap: '50px' }} className="menu">
      {isMobile && <>
        <IconButton size="small" onClick={() => setDrawerOpen(true)} sx={{padding: '10px'}}>
          <img src={menuLogo} alt="menu" className='menu-logo' />
        </IconButton>
        <Drawer
          PaperProps={{sx: {backgroundColor: '#000', backgroundImage: 'none'}}}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box
            sx={{width: 200, backgroundColor: '#000'}}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/planets')} sx={{textAlign: 'center'}}>
                  <ListItemText primary='Planets' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/tickets')} sx={{textAlign: 'center'}}>
                  <ListItemText primary='Tickets' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/auth?tab=0')} sx={{textAlign: 'center'}}>
                  <ListItemText primary='Sign In' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/auth?tab=1')} sx={{textAlign: 'center'}}>
                  <ListItemText primary='Sign Up' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </>}
      <img src={logo} className='logo' alt="logo" />
      {!isMobile && <>
        <Button variant='text' onClick={() => navigate('/planets')}>Planets</Button>
        <Button variant='text' onClick={() => navigate('/tickets')}>Buy tickets</Button>
        <Button variant='text' onClick={() => navigate('/auth')}>Sign In / Sign Up</Button>
      </>}
      <Select value={'EN'} className='loc' sx={{ height: 50 }}>
        <MenuItem value={'EN'}>EN</MenuItem>
        <MenuItem value={'RU'}>RU</MenuItem>
        <MenuItem value={'RO'}>RO</MenuItem>
      </Select>
    </Box>
  );
}

export default AppMenu;
