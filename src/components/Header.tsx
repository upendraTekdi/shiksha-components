import React from 'react';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import config from '../config.json';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('preferredLanguage') || 'en'
  );
  const [language, setLanguage] = useState(selectedLanguage);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const theme = useTheme<any>();
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const handleProfileClick = () => {
    navigate('/profile');
  };
  return (
    <>
      <Stack
        sx={{ minWidth: 360 }}
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
        // padding={"1rem"}
        height="auto">
        <Box mt={'0.5rem'}>
          <FormControl sx={{ m: 1 }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style={{
                borderRadius: '0.5rem',
                color: theme.palette.warning['200'],
                width: '5rem',
                height: 'auto',
                marginBottom: '0rem'
              }}>
              {config?.languages.map((lang, index) => (
                <MenuItem value={lang.code} key={index} id={`lang-${lang.code}`}>
                  {lang.code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ margin: '0 auto' }}>
          <img src="/appLogo.svg" alt="logo" />
        </Box>
        <Box>
          <AccountCircleIcon fontSize="large" color="action" />
        </Box>
      </Stack>
      <Divider sx={{ borderBottomWidth: '0.15rem' }} />
    </>
  );
};
export default Header;
