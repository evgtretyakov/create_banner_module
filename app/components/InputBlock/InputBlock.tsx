import React from "react";
import Select from "react-select";

import styles from '@/app/styles/banner.module.scss'

export const InputBlock = (props) => {

    const {type, name, value, label, onChange, options} = props

    const fileUpload = async (event) => {
        let file = event.target.files?.[0]
        file.preview = URL.createObjectURL(file);
        onChange(name, file.preview)
        URL.revokeObjectURL(file)
    }

    let content = null

    switch (type) {
        case 'select':
            content = <Select options={options} instanceId={"123"} onChange={(option) => onChange(name, option)}
                              defaultValue={value} />
            break
        case 'file':
            content = <>
                <input
                    name={type}
                    type={type}
                    // value={value}
                    placeholder={label}
                    onChange={fileUpload}
                />
                <div className={styles.imagePreview}>
                    {value && <img src={value}/>}
                </div>
            </>
            break
        default:
            content = <input
                name={type}
                type={type}
                value={value}
                placeholder={label}
                onChange={(event) => onChange(name, event.target.value)}
            />
    }

    return <div className={styles.inputBlock}>
        <label htmlFor={name}>{label}<br />
            {content}
        </label>
    </div>
}
