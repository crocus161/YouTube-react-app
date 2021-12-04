import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Input.module.scss';

const Input = ({label, id, name, type='text', defaultText=''}) => {

    const [value, changeValue] = useState(defaultText);

    const handleChange = (e) => {
        changeValue(e.target.value);
    }

    const boxClasses = classNames(
        styles.box, 
        {
            [styles.active]: Boolean(value)
        }
    )

    return (
        <div className={boxClasses}>
            <label 
                htmlFor={id}
                className={styles.label} 
            >
                {label}
            </label>

            <input 
                id={id}
                required
                type={type} 
                name={name}
                value={value} 
                autoComplete='off' 
                onChange={handleChange}
                className={styles.input} 
            />

        </div>
    )
}

export default Input
