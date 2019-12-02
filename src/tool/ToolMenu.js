import React from 'react';
import './ToolMenu.css';
import { Stop, ChangeHistory, FiberManualRecord, Timeline } from '@material-ui/icons';
import { IconButton, Box, Tooltip, Select, MenuItem } from '@material-ui/core';
import { ToolList } from './ToolList'

// Assign icon based on Tool property
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

// Render each tool icon
const MakeTool = props => {
  return (
    <Tooltip title = {props.tool.tooltip}>
      <IconButton>
        <AppropriateIcon toolName = {props.tool.icon} />
      </IconButton>
    </Tooltip>
  )
}

// Render a tool category
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

// Render tool or category, depending on whether property "name" is defined
function ToolMenu(props) {
  console.log(ToolList.length)
  return (
    <Box className={props.className}>
      { ToolList.map(entry => {
          if (entry.name == undefined) {
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
