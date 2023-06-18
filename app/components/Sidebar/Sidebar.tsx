'use client'

import React from 'react'
import {bannerSlice, useDispatch, useSelector} from "@/lib/redux";
import {selectBanner} from "@/lib/redux/slices/bannerSlice/bannerSlice";
import {InputBlock} from "@/app/components/InputBlock/InputBlock";

import styles from '@/app/styles/banner.module.scss'

export const Sidebar = (props) => {

    const {} = props

    const dispatch = useDispatch()
    const banner = useSelector(selectBanner)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const fields = [
        {
            type: "select",
            name: "type",
            label: "Type",
            options: options
        },
        {
            type: "select",
            name: "view",
            label: "View",
            options: options
        },
        {
            type: "text",
            name: "title",
            label: "Title",
        },
        {
            type: "text",
            name: "desc",
            label: "Description",
        },
        {
            type: "file",
            name: "background",
            label: "Background",
        },
    ]

    const handleChangeInput = (name, value) => {
        dispatch(bannerSlice.actions.changeInput({ name: name, value: value }))
    }

    return <div className={styles.sidebar}>
        {fields.map((el, index) => <InputBlock
            {...el}
            key={index}
            value={banner[el.name]}
            onChange={handleChangeInput}
        />)}
        <button type={"submit"}>Save</button>
    </div>
}


