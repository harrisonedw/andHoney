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
      <h1>{'c a t e g o r i e s'}</h1>
      <CategoriesContainer>
        <Category name={'t o p s'} image={"https://firebasestorage.googleapis.com/v0/b/andhoney-de707.appspot.com/o/top1.JPG?alt=media&token=05cb2f02-63bb-476a-bf16-8e1644e30a16"}></Category>
        <Category name={'p a n t s'} image={"https://firebasestorage.googleapis.com/v0/b/andhoney-de707.appspot.com/o/pants1.JPG?alt=media&token=008aaf05-47bc-4ab5-afcd-b81f65e6c82f"}></Category>
        <Category name={'a c c e s s o r i e s'} image={"https://firebasestorage.googleapis.com/v0/b/andhoney-de707.appspot.com/o/accessory5.JPG?alt=media&token=81c30625-da2d-4d5a-9adb-331e024942e2"}></Category>
      </CategoriesContainer>
    </div>

  )
}



export default Categories;