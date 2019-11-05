import React from 'react';
import './ToolMenu.css';
import { Stop, ChangeHistory, FiberManualRecord, Timeline } from '@material-ui/icons';
import { IconButton, Box, Tooltip } from '@material-ui/core';

function ToolMenu(props) {
  return (
    <Box className={props.className}>
      <Tooltip title='Prism'>
        <IconButton>
          <Stop />
        </IconButton>
      </Tooltip>
      <Tooltip title='Pyramid of Egypt'>
        <IconButton>
          <ChangeHistory />
        </IconButton>
      </Tooltip>
      <Tooltip title='Sphere'>
        <IconButton>
          <FiberManualRecord />
        </IconButton>
      </Tooltip>
      <Tooltip title='Spline'>
        <IconButton>
          <Timeline />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default ToolMenu;
