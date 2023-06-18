/* Components */
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Canvas} from "@/app/components/Canvas/Canvas";

import styles from '@/app/styles/banner.module.scss'

export default function IndexPage() {
  return <div className={styles.main}>
    <Canvas />
    <Sidebar />
  </div>
}

export const metadata = {
  title: 'Redux Toolkit',
}
