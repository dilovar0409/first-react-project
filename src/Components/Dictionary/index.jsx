import React, { useState } from 'react'
import axios from 'axios';
import Yandex from '../../img/Yandex.png';   
import { DictionaryInput, DictionaryPost, DictionaryWrapper, DictionDiv, DictionP, PostPage, PostPage2, PostPage3, PostPage4, PostPage5, PostPage6, PostPageDiv, YandexText, YandexText1 } from './style';

function Dictionary() {

    const [state, setState] = useState({})

    const getDictionary = (e) => {
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
            <YandexText1>
            <YandexText src={Yandex} alt="yandex" />
            <p>dictionary</p>
            </YandexText1>
            <DictionaryWrapper>
                <DictionDiv>
                    <select id="select" defaultValue="en-ru" name="select">
                        <option value="ru-ru">Russian ➞ Russian </option>
                        <option value="ru-en">Russian ➞ English </option>
                        <option value="ru-pl">Russian ➞ Polandish </option>
                        <option value="ru-uk">Russian ➞ Ukrainian </option>
                        <option value="ru-de">Russian ➞ German </option>
                        <option value="ru-fr">Russian ➞ French </option>
                        <option value="ru-es">Russian ➞ Spanish </option>
                        <option value="ru-it">Russian ➞ Italian </option>
                        <option value="ru-tr">Russian ➞ Turkish </option>
                        <option value="en-ru">English ➞ Russian </option>
                        <option value="en-en">English ➞ English </option>
                        <option value="en-de">English ➞ German </option>
                        <option value="en-fr">English ➞ French </option>
                        <option value="en-es">English ➞ Spanish </option>
                        <option value="en-it">English ➞ Italian </option>
                        <option value="en-tr">English ➞ Turkish </option>
                        <option value="pl-ru">Polandish ➞ Russian </option>
                        <option value="uk-ru">Ukrainian ➞ Russian </option>
                        <option value="de-ru">German ➞ Russian </option>
                        <option value="de-en">German ➞ English </option>
                        <option value="fr-ru">French ➞ Russian </option>
                        <option value="fr-en">French ➞ English </option>
                        <option value="es-ru">Spanish ➞ Russian </option>
                        <option value="es-en">Spanish ➞ English </option>
                        <option value="it-ru">Italian ➞ Russian </option>
                        <option value="it-en">Italian ➞ English </option>
                        <option value="tr-ru">Turkish ➞ Russian </option>
                        <option value="tr-en">Turkish ➞ English </option>
                    </select>
                    <DictionaryInput onChange={getDictionary} type="text" placeholder="Type something to translate" />
                </DictionDiv>
                <PostPage2>{state.def?.map(({ text, pos, ts, tr }, index) => (
                    <DictionaryPost>
                        <PostPage4>
                            <DictionP>{text}</DictionP>
                            <p>[{ts}]</p>
                            <p>{pos}</p>
                        </PostPage4>
                        <p>{tr?.map(({ text, pos, gen, fr, syn, mean, ex }, index) => (
                            <div>
                                <PostPageDiv>
                                        <PostPage5>{text}</PostPage5>
                                    {syn?.map(({ text, pos, gen, fr }, index) => (
                                        <PostPage>
                                            <PostPage5>{text}</PostPage5>
                                        </PostPage>
                                    ))}
                                </PostPageDiv>
                                <PostPage>{mean?.map(({ text }, index) => (
                                    <PostPage6>{text}</PostPage6>
                                ))}</PostPage>
                                <div>{ex?.map(({ text, tr }, index) => (
                                    <div>
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
