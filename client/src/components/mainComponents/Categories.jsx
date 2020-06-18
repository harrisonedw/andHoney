import React from 'react';
import styled from 'styled-components';
import Category from './Category.jsx'

const CategoriesContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
`






const Categories = (props) => {
  return (
    <div>
      <h1>categories</h1>
      <CategoriesContainer>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </CategoriesContainer>
    </div>

  )
}



export default Categories;