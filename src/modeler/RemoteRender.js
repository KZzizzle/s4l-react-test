import React from 'react';


export default function RemoteRender(props) {
  const styles = {
    backgroundImage: 'url(' + props.src + ')',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
  return <div style={styles}></div>
}
