import styled from "styled-components";

export const Input = styled.input`
    width: 394px;
    height: 50px;

    margin: 5px;

    border: none;
    border-radius: 10px;

    color: #FFB703;
    font-size: 20px;
   font-family: Maharlika;
    padding: 0 20px;

    &:: placeholder {
        color: #FFB703;
        margin-left: 30px;
    }
    &:focus{
    outline: 2px solid #FFFFFF;

    }    
`;