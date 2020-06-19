import React, { useState } from 'react';
import styled from 'styled-components';


const MenuText = styled.div`
  color: black;
  font-size: 30px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
`

const MenuContent = (props) => {

  return (
    <MenuText>{'m e n u'}</MenuText>
  )
}
export default MenuContent;