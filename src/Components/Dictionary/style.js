import styled from "styled-components";

export const YandexText = styled.img`
    width: 300px;
    height: 100px;
    object-fit: cover;
`;

export const YandexText1 = styled.div`
   display: flex;
   justify-content: center;
   background-color: red;
   padding-top: 10px;
   p{
    font-size: 60px;
    font-weight: bold;
    margin: 30px 0 0 10px;
    color: white;
   }
`;

export const DictionaryWrapper = styled.div`
    width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;  
    padding: 10px 0;
    select{
        width: fit-content;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        outline:  1px solid #ffbf2b;
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
    display: flex;
    flex-direction: column;
`;

export const DictionaryInput = styled.input`
    width: 100%;
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
`;

export const DictionaryPost = styled.div`
    width: 590px;
`;

export const PostPage = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
`;

export const PostPage4 = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PostPage5 = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
`;

export const PostPage6 = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    color: #8C0000;
`;

export const PostPageDiv = styled.div`
    width: 300px;
    display: flex;
    color: blue;
    flex-wrap: wrap;
    align-items: center;
    font-size: 16px;
    /* font-weight: bold; */
`;

export const PostPage1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

export const PostPage2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 10px;
    margin-left: 20px;
`;

export const PostPage3 = styled.div`
    width: 500px;
    display: flex;
    flex-wrap: wrap;
`;

