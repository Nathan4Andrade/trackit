import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lexend Deca';
    }
	button {

        height: 45px;
        background: #52b6ff;
        border-radius: 5px;
		border-style: none;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
        box-sizing: border-box;
        
		&:disabled {
			background-color: lightgray;
		}
	}
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
        border-radius: 5px;
		height: 45px;
		margin-bottom: 6px;
		padding: 0 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
		display: flex;
		align-items: center;
        width: 303px;
        
        box-sizing: border-box;
        &::placeholder{
			color: #DBDBDB;
		}
	}
`;

export default GlobalStyle;
