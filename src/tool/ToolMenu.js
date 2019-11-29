import React from 'react';
import './ToolMenu.css';
import { Stop, ChangeHistory, FiberManualRecord, Timeline } from '@material-ui/icons';
import { IconButton, Box, Tooltip, Select, MenuItem } from '@material-ui/core';
import { Tools } from './Tool'

const AppropriateIcon = props => {
  switch (props.toolName) {
    case 'triangle':
      return <ChangeHistory />;
    case 'circle':
      return <FiberManualRecord />;
    case 'square':
      return <Stop />;
    case 'squiggle':
      return <Timeline />
    default:
      return <ChangeHistory /> 
  }
};

const MakeTool = props => {
  return (
    <Tooltip title = {props.tool.tooltip}>
      <IconButton>
        <AppropriateIcon toolName = {props.tool.label} />
      </IconButton>
    </Tooltip>
  )
}

const MakeToolCategory = props => {
  return (
    <Tooltip>
      <Select>
        <AppropriateIcon toolName = {props.category.name} />
        {
          props.category.tools.map(tool => {
          return(
            <MenuItem>
              <MakeTool tool = {tool} />
            </MenuItem>
          )
        })}
      </Select>
    </Tooltip>
  )
}

function ToolMenu(props) {
  const numtools = Tools.length;
  console.log(Tools.length)
  return (
    <Box className={props.className}>
      { Tools.map(entry => {
          if (entry.name ==undefined) {
            return(<MakeTool tool = {entry} />)
          }
          else {
            return(<MakeToolCategory category = {entry} />)
          }
        })
      }
    </Box>
  );
}

export default ToolMenu;
