'use client'
import cn from 'classnames';

import styles from '@/app/styles/banner.module.scss'
import {selectBanner, useDispatch, useSelector} from "@/lib/redux";

export const Canvas = (props) => {

    const dispatch = useDispatch()
    const banner = useSelector(selectBanner)
    const {title, desc, type, view, background} = banner

    const style = background ? {backgroundImage: "url(" + background + ")"} : null


    return <div className={styles.canvas}>
        <div className={cn(styles.bannerPreview, styles[view?.value])} style={style}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    </div>
}
