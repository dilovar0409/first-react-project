import styled from "styled-components";

export const YandexText=styled.p`
    width: fit-content;
    margin: auto;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    color: red;
    padding: 0px 15px 5px 15px;
    background-color: white ;
    margin-top: 15px;
`;

export const DictionaryWrapper = styled.div`
    width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;  
    padding: 20px 0;
    p{
    background-color: #ffbf2b;
    }
`;

export const DictionDiv = styled.div`
    width: 500px;
    height: 150px;
    border: 1px solid lightgray;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #ffbf2b;
`;

export const DictionP1 = styled.p`
    width: fit-content;
    border: 1px solid black;
    padding: 4px 13px;
    margin-bottom: 10px;
    background-color: white !important;
    font-size: 14px;
`;

export const DictionaryInput = styled.input`
    width: 300px;
    height: 25px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    background-color: white;
`;

export const DictionP = styled.p`
    font-size: 19px;
    font-weight: bold;
    color: black;
    background-color: #ffbf2b;
`;

export const DictionaryPost = styled.div`
    width: 590px;
`;

export const PostPage=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffbf2b;
`;

export const PostPageDiv=styled.div`
    display: flex;
    color: red;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffbf2b;
    font-size: 18px;
    font-weight: bold;
`;

export const PostPage1=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

export const PostPage2=styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    background-color: #ffbf2b;
    color: white;
    border-radius: 10px;
    margin-left: 20px;
`;