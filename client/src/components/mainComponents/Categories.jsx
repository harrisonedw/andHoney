import React from 'react';
import styled from 'styled-components';
import Category from './Category.jsx'

const CategoriesContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
`



const Categories = (props) => {

  const cats = props.categories.map((cat, i) => {
    return (
      <Category key={i} name={cat.name} image={cat.img}></Category>
    )
  })

  return (
    <div>
      <h1>{'c a t e g o r i e s'}</h1>
      <CategoriesContainer>
        {cats}
      </CategoriesContainer>
    </div>

  )
}



export default Categories;