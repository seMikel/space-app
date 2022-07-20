import Box from '@mui/material/Box';
import {useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function Auth() {
  const [params] = useSearchParams();

  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTab(Number.parseInt(params.get('tab')) || 0);
  }, [params.get('tab')])

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const handleTabChange = (_, newTab) => setTab(newTab);

  return (
    <Box sx={{ minHeight: 'calc(100vh - 50px)', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1, maxWidth: 600, padding: '0 50px', gap: '10px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleTabChange} sx={{width: '100%', display: 'flex'}}>
            <Tab label="Sign In"/>
            <Tab label="Sign Up" />
          </Tabs>
        </Box>
        {!tab &&
        <>
          <TextField sx={{ flexGrow: 1 }} label="Email" name="not-email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField
            sx={{ flexGrow: 1 }}
            label="Password"
            name="not-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            }}
          />
          <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
            <Button variant='outlined' size='large' sx={{width: 200}}>Sign In</Button>
          </Box>
        </>
        }
        {!!tab && 
        <>
          <TextField sx={{ flexGrow: 1 }} label="Email" name="not-email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField sx={{ flexGrow: 1 }} label="Phone" name="not-phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <TextField
            sx={{ flexGrow: 1 }}
            label="Password"
            name="not-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            }}
          />
          <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
            <Button variant='outlined' size='large' sx={{width: 200}}>Sign Up</Button>
          </Box>
        </>
        }
      </Box>
    </Box>
  );
}

export default Auth;
