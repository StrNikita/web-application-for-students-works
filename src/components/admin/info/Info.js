import React from 'react';

export default function Info(props) {
    let display;
    function onSubmitClick(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('year'));
        fetch('/createGroup', {
            body: formData,
            method: 'POST',
        });
    }
    if (props.toDisplay === 'createGroup') {
        display = <div>
                    <form onSubmit={onSubmitClick}>
                        <input type='text' name='year' placeholder='Введите год поступления' />
                        <input type='text' name='groupName' placeholder='Введите название группы' />
                        <input type='submit' />
                    </form>
                </div>;
    }
    return (
        <div>{display}</div>
    );
}