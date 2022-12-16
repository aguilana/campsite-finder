import styled from "styled-components";


export const Navbar = styled.nav `
    width: 100%;
    height: 90px;
    background: rgb(66, 66, 66);
    display: flex;
    justify-content: flex-end;
`
  
  
export const Ul = styled.ul`
padding: 0px 30px;
height: 100%;
width: 600px;
display: flex;
` 

  
export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    color: blanchedalmond;
    height: 100%;
    width: 150px;
    a{
        &:hover {
        background-color: blanchedalmond;
        color: rgb(66, 66, 66);
        }
        /* &:focus,
        &:active {
            background-color: blanchedalmond;
            color: rgb(66, 66, 66,);
            transition: 500ms;
        } */
    }
`