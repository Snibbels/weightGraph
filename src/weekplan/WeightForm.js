import React from 'react';
import { addWeight } from '../redux/actions';

const WeightForm = ({ id, store }) => {
    const onSubmit = () => {
        if (!_weight) return;
        store.dispatch(addWeight(
            id, _weight.value, Date.now()
        ));
        _weight.value = '';
    };

    let _weight;

    let style = {
        display: "inline-block",
        width: "2em"
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                style={style}
                ref={input => _weight = input}
                type='number'
                placeholder="neues Gewicht"
            />
            <button>+</button>
        </form>
    );
}

export default WeightForm;
