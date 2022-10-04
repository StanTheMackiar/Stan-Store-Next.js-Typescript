import { useTheme } from '@emotion/react'
import React from 'react'
import styles from "../../../../styles/Header.module.scss"
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Header = () => {


  return (
    <header className={styles.headerContainer}>
        <LeftSection />
        <RightSection />
    </header>
  )
}

export default Header