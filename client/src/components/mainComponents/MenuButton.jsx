import React from 'react';
import styled from 'styled-components';



const MenuButtonContainer = styled.div`
  color: white;
`

const Button = styled.button`
  height: 50px;
  :hover {
    cursor: pointer;
  }
`

const MenuButton = (props) => {
  
  return (
    <MenuButtonContainer>
      <Button>{'m e n u'}</Button>
    </MenuButtonContainer>
  )
}

export default MenuButton;
