import React from 'react';
import Info from './info/Info';
import {useState} from 'react';

import './admin.css';

export default function Admin() {
    const [info, setInfo] = useState('');

    function onClickHandle(e) {
        setInfo(e.target.dataset.todisplay);
    }
    return (
        <div>
            <ul>
                <li className='aToInfo' data-todisplay='createGroup' onClick={onClickHandle}>Создать группу</li>
                <li className='aToInfo' data-todisplay='uploadFiles' onClick={onClickHandle}>Загрузить работу</li>
                <li className='aToInfo' data-todisplay='downloadFiles' onClick={onClickHandle}>Скачать файлы</li>
                <li className='aToInfo' data-todisplay='tempCatalog' onClick={onClickHandle}>Временный каталог</li>
            </ul>
            <div>
                {info && <Info toDisplay={info} />}
            </div>
        </div>
    );
}