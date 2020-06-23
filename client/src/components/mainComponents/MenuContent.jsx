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

  const titles = props.pages.map((title, i) => {
   return (
    <p key={i}>{title}</p>
   )
  })

  return (
    <MenuText>{titles}</MenuText>
  )
}
export default MenuContent;