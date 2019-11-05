import React from "react";
import { Rnd } from "react-rnd";
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "5px",
      display: "flex !important",
      flexDirection: "column"
    },
    titlebar: {
      cursor: "move",
      fontSize: "1.2em",
      padding: "5px",
      userSelect: "none"
    },
    content: {
      overflow: "auto",
      flex: 1
    }
  }
});

const ContainerBox = props => {
  const classes = useStyles();
  return <Rnd className={classes.root} {...props} />
};

const TitleBar = props => {
  const classes = useStyles();
  return <Box className={`${classes.titlebar} window-titlebar`} {...props} />
};

const Content = props => {
  const classes = useStyles();
  return <Box className={classes.content} {...props} />
}

class Window extends React.Component {
  render() {
    return (
      <ContainerBox
        {...this.props.rndConfig}
        dragHandleClassName="window-titlebar"
        enableUserSelectHack={false}
      >
        <TitleBar>
          {this.props.title}
        </TitleBar>
        <Content>
          {this.props.children}
        </Content>
      </ContainerBox>
    )
  }
}

export default Window;
