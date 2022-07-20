import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {planets} from './data';
import {useParams, useNavigate} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Planet() {
  const { planetId } = useParams();
  const navigate = useNavigate();
  const isMobile = !useMediaQuery(theme => theme.breakpoints.up('sm'));

  const planet = planets.find(p => p.id === planetId);

  const style = isMobile ? {
    maxHeight: '30vh',
    zIndex: 2,
  } : {
    maxHeight: '80vh',
    maxWidth: planetId === 'saturn' ? '130vw' : '40vw',
    zIndex: 2,
    position: 'absolute',
    top: '10vh',
    left: planetId === 'saturn' ? '-30vw' : null,
  };

  const planetImage = isMobile ? 
    <Box sx={{display: 'flex', justifyContent: 'center', width: 'calc(100vw - 60px)', overflowY: 'hidden', marginBottom: '20px'}}>
      <img
        src={planet.image} 
        alt={planet.name}
        style={style}
      ></img>
    </Box>
  : <Box sx={{ position: 'relative', maxHeight: '80vh', maxWidth: '40vw', overflowX: 'hidden', flexGrow: 1 }}>
    <img
      src={planet.image} 
      alt={planet.name}
      style={style}
    ></img>
    <img 
      src={planet.image} 
      alt="glow effect"
      style={{
        ...style,
        zIndex: 1,
        filter: 'blur(20px)',
      }}
    ></img>
  </Box>

  return (
    <Box sx={{ padding: '30px', display: 'flex', gap: '50px', justifyContent: 'space-around', alignItems: 'center' }}>
      <Box sx={{maxWidth: isMobile ? '90vw' : 700, zIndex: 3}}>
        <h1 style={{fontFamily: 'Space Boards DEMO', fontSize: isMobile ? 48 : 120, margin: '0.3em 0', textAlign: isMobile ? 'center' : 'left'}}>{planet.name}</h1>
        {!!isMobile && planetImage}
        <p style={{fontSize: isMobile ? 20 : 30, margin: '0px 0 20px 0'}}>{planet.description}</p>
        <div><b style={{fontSize: isMobile ? 20 : 30}}>Surface temperature: </b><span style={{fontSize: isMobile ? 20 : 30}}>{planet.temp}</span></div>
        <div><b style={{fontSize: isMobile ? 20 : 30}}>Atmosphere: </b><span style={{fontSize: isMobile ? 20 : 30}}>{planet.atm}</span></div>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{fontFamily: 'Space Race', fontSize: isMobile ? 150 : 200, fontWeight: 100, margin: '0'}}>{planet.period}</h1>
            <span style={{fontSize: isMobile ? 20 : 30}}>Orbital period</span>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{fontFamily: 'Space Race', fontSize: isMobile ? 150 : 200, fontWeight: 100, margin: '0'}}>{planet.satellites}</h1>
            <span style={{fontSize: isMobile ? 20 : 30}}>Known satellites</span>
          </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: isMobile ? 'center' : 'left' }}>
          <Button variant='outlined' style={{marginTop: isMobile ? '10px' : '50px'}} size='large' onClick={() => navigate(`/tickets?planetId=${planetId}`)}>Buy Ticket</Button>
        </Box>
      </Box>
      {!isMobile && planetImage}
    </Box>
  );
}

export default Planet;
