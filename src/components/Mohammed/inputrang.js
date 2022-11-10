import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import React from 'react';
import { useState } from 'react';
import "./hashim.css";
 
 function InputSlider() {
    const Input = styled(MuiInput)`
  width: 42px;
`;
const [value, setValue] = React.useState();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 0) {
      setValue(331316);
    }
  };

  return (
    <Box sx={{ width: 250  } } >
 
      <Grid container spacing={2} alignItems="center" >
        
        <Grid item xs >
          <Slider
            value={typeof value === 'number' ? value : 10}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="warning"
          />
        </Grid>
     
      </Grid>
      <Grid  className='col 12 m-1 d-flex justify-content-around '>
      <Input
        value={value}
        size="small"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 331316,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
      -
      <Input className='m-1'
        value={"30000"}
        size="small"
        
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 331316,
          
        }}
      />
    </Grid>
    </Box>



  );
}
export default  InputSlider;