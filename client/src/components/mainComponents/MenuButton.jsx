import React, { useState } from 'react';
import styled from 'styled-components';
import MenuContent from './MenuContent.jsx';
// import Modal from 'react-modal';



const MenuStyleContainer = styled.div`
  color: white;
`

const Button = styled.button`
  height: 50px;
  :hover {
    cursor: pointer;
  }
`

const MenuModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  color: black;
  opacity: .88;
`



const MenuButton = (props) => {

  const [show, setShow] = useState(false);

  const openMenu = (event) => {
    setShow(true);
  }

  const closeMenu = (event) => {
    setShow(false);
  }
  


  return (
    <MenuStyleContainer>
      <Button onClick={openMenu}>{'m e n u'}</Button>
      
      
      
      { show && (
          <MenuModal>
            <MenuContent></MenuContent>
          </MenuModal>
        )}

    </MenuStyleContainer>
  )
}

export default MenuButton;
