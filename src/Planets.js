import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useEffect, useState} from 'react';
import {planets} from './data';
import leftArrow from './images/left-icon.png';
import rightArrow from './images/right-icon.png';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import arrows from './images/arrows.png';

function Planet({planet, current, move}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const index = planets.indexOf(planet);
  const style = {
    position: 'absolute',
    transform: 'translate(-50%, 50%)',
    transition: 'all 1s, filter 0.3s',
    cursor: index === current ? 'auto' : 'pointer',
    height: index === current ? '80vw' : '40vh',
    bottom: index === current ? 'calc(25vh - 40vw)' : '50%',
    left: `${50 + (index - current) * 50}%`,
    zIndex: 2,
  };
  const filter = index === current? 'blur(50px)' : (isHovering ? 'blur(20px)' : 'none');

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={planet.image} 
        alt={planet.name}
        style={style}
        onClick={() => move(index)}
      ></img>
      <img 
        src={planet.image} 
        alt="glow effect"
        style={{
          ...style,
          zIndex: 1,
          filter,
        }}
      ></img>
    </div>
  );
}

function Planets() {
  const isMobile = !useMediaQuery(theme => theme.breakpoints.up('sm'));

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [when, setWhen] = useState();
  const [back, setBack] = useState();
  const [passengers, setPassengers] = useState();

  useEffect(() => {
    planets.forEach((planet) => {
      new Image().src = planet.image;
  });
  }, [])

  return (
    <Box sx={{ paddingBottom: isMobile ? '0' : '30vh', width: '100vw', minHeight: isMobile ? 'auto' : 'calc(70vh - 50px)', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: isMobile ? 'none' : 'calc(100vw - 40vh)', margin: isMobile ? 'none' : '0 auto', textAlign: 'center' }}>
        {!isMobile && <h2 style={{fontFamily: 'Space Boards DEMO', fontSize: 48}}>Planet</h2>}
        <h1 style={{fontFamily: 'Space Boards DEMO', fontSize: isMobile ? '3rem' : 120, margin: '0.5em 0', marginTop: isMobile ? '10px' : null}}>{planets[current].name}</h1>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: isMobile ? '0 25px' : null, margin: '0 auto', marginBottom: '20px' }}>
          <span style={{fontSize: isMobile ? 30 : 50, maxWidth: 600}}>{planets[current].text}</span>
        </Box>
        {!!isMobile && <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px'}}>
          <img sx={{width: 42}} src={leftArrow} onClick={() => setCurrent(current ? current - 1 : planets.length - 1)} />
          <img 
            src={planets[current].image} 
            alt={planets[current].name}
            style={{
              maxHeight: '30vh',
              maxWidth: 'calc(100vw - 90px)'
            }}
          ></img>
          <img sx={{width: 42}} src={rightArrow} onClick={() => setCurrent(current === planets.length - 1 ? 0 : current + 1)} />
        </Box>}
        <Button variant='outlined' onClick={() => navigate(`./${planets[current].id}`)}>Learn more</Button>
      </Box>
      {!isMobile && planets.map((planet) => (<Planet planet={planet} current={current} move={setCurrent} />))}
      {isMobile && <Box sx={{display: 'flex', flexDirection: 'column', width: '100vw', padding: '0 40px', boxSizing: 'border-box', marginTop: '20px'}}>
        <Autocomplete
          options={planets.map(planet => planet.name)}
          sx={{ flexGrow: 1, minWidth: 200 }}
          renderInput={(params) => <TextField {...params} size="small" className="topRound" label="From" />}
          value={from}
          onChange={(_, value) => setFrom(value)}
        />
        <Autocomplete
          options={planets.map(planet => planet.name)}
          sx={{ flexGrow: 1, minWidth: 200 }}
          renderInput={(params) => <TextField {...params} size="small" className="square" label="To" />}
          value={to}
          onChange={(_, value) => setTo(value)}
        />
        <Box sx={{display: 'flex'}}>
          <TextField
            sx={{ flexGrow: 1 }}
            className="square"
            label="When"
            size="small"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            className="square"
            size="small"
            label="Back"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Box>
        <TextField className='bottomRound' type='number' size="small" sx={{ flexGrow: 1 }} label="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
        <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <Button variant='outlined'>Buy ticket</Button>
        </Box>
      </Box>}
    </Box>
  );
}

export default Planets;
