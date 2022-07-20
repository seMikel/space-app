import Box from '@mui/material/Box';
import {planets} from './data';
import {useSearchParams} from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

function Order() {
  const [params] = useSearchParams();
  const isMobile = !useMediaQuery(theme => theme.breakpoints.up('sm'));

  const [from, setFrom] = useState();
  const [to, setTo] = useState(planets.find(planet => planet.id === params.get('planetId'))?.name);
  const [when, setWhen] = useState();
  const [back, setBack] = useState();
  const [passengers, setPassengers] = useState();

  return (
    <Box sx={{ minHeight: 'calc(100vh - 50px)', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: isMobile ? 0 : '50px', justifyContent: 'center', alignItems: isMobile ? null : 'center', flexDirection: isMobile ? 'column' : 'row', width: isMobile ? 'calc(100vw - 50px)' : null }}>
        <Autocomplete
          options={planets.map(planet => planet.name)}
          sx={{ flexGrow: 1, minWidth: 200 }}
          renderInput={(params) => <TextField {...params} className={isMobile ? 'topRound' : 'leftRound'} label="From" />}
          value={from}
          onChange={(_, value) => setFrom(value)}
        />
        <Autocomplete
          options={planets.map(planet => planet.name)}
          sx={{ flexGrow: 1, minWidth: 200 }}
          className={isMobile ? 'square' : ''}
          renderInput={(params) => <TextField {...params} label="To" />}
          value={to}
          onChange={(_, value) => setTo(value)}
        />
        <Box sx={{display: 'flex', gap: isMobile ? 0 : '50px', justifyContent: 'spaceBetween'}}>
          <TextField sx={{ flexGrow: 1 }} className={isMobile ? 'square' : ''} label="When" value={when} onChange={(e) => setWhen(e.target.value)} />
          <TextField sx={{ flexGrow: 1 }} className={isMobile ? 'square' : ''} label="Back" value={back} onChange={(e) => setBack(e.target.value)} />
        </Box>
        <TextField className={isMobile ? 'bottomRound' : 'rightRound'} type='number' sx={{ flexGrow: 1 }} label="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
      </Box>
      <Button variant='outlined' size='large'>Submit</Button>
    </Box>
  );
}

export default Order;
