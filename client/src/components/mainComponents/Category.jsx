import React from 'react';
import styled from 'styled-components';


const CategoryStyle = styled.div`
  max-width: 375px;
  margin: 2.5px
`

const Category= () => {

  return (
    <CategoryStyle>
      <img src="https://firebasestorage.googleapis.com/v0/b/andhoney-de707.appspot.com/o/top1.JPG?alt=media&token=05cb2f02-63bb-476a-bf16-8e1644e30a16" alt="" width="370"/>
    </CategoryStyle>
  )
}
export default Category;