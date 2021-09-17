import React, { useState } from 'react'
import axios from 'axios';
import { DictionaryInput, DictionaryPost, DictionaryWrapper, DictionDiv, DictionP, DictionP1, PostPage, PostPage2, YandexText } from './style';

function Dictionary() {

    const [state, setState] = useState({})

    const getDictionary = (e) => {
        // console.log("change");
        // console.log(e.target.value);
        const apiKey =
            "dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7";
        axios
            .get(
                `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=en-ru&text=${e.target.value}`
            )
            .then((res) => {
                setState(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <YandexText>Yandex Dictionary</YandexText>
            <DictionaryWrapper>
                <DictionDiv>
                    <DictionP1> English → Russian ↓</DictionP1>
                    <DictionaryInput onChange={getDictionary} type="text" placeholder="Type something to translate" />
                </DictionDiv>
                <PostPage2>{state.def?.map(({ text, pos, ts, tr }, index) => (
                    <DictionaryPost>
                        <PostPage>
                            <DictionP>{text}</DictionP>
                            <p>[{ts}]</p>
                            <p>{pos}</p>
                        </PostPage>
                        <p>{tr?.map(({ text, pos, gen, fr, syn, mean, ex }, index) => (
                            <div>
                                <PostPage>
                                    <PostPage>
                                        <PostPage>{text}</PostPage>
                                        <PostPage>({gen}),</PostPage>
                                    </PostPage>
                                    {syn?.map(({ text, pos, gen, fr }, index) => (
                                        <PostPage>
                                            <p>{text}</p>
                                            <p>({gen}),</p>
                                        </PostPage>
                                    ))}
                                </PostPage>
                                <PostPage>({mean?.map(({ text }, index) => (
                                    <PostPage>{text}</PostPage>
                                ))})</PostPage>
                                <div>{ex?.map(({ text, tr }, index) => (
                                    <div>
                                        <p>{text}</p>
                                        <p>{tr.text}</p>
                                    </div>
                                ))}</div>
                            </div>
                        ))}</p>
                    </DictionaryPost>
                ))}</PostPage2>
            </DictionaryWrapper>
        </div>
    )
}

export default Dictionary;
