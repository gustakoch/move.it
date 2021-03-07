import { useContext, useState } from 'react'
import { SideBarContext } from '../contexts/SideBarContext'

import styles from '../styles/modules/SideBar.module.css'

export function SideBar() {
  const {
    handleLeanderboardButton,
    handleHomeButton,
    leaderboard,
    home
  } = useContext(SideBarContext)

  return (
    <div className={styles.sideBarContainer}>
      <img src="/images/logo2.png" alt="Logo"/>

      <button
        className={home ? styles.active : null}
        onClick={handleHomeButton}
      >
        <span></span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="#ddd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 29.3333V16H20V29.3333" stroke="#ddd" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button
        className={leaderboard ? styles.active : null}
        onClick={handleLeanderboardButton}
      >
        <span></span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0001 19.9999C21.1547 19.9999 25.3334 15.8212 25.3334 10.6666C25.3334 5.51193 21.1547 1.33325 16.0001 1.33325C10.8454 1.33325 6.66675 5.51193 6.66675 10.6666C6.66675 15.8212 10.8454 19.9999 16.0001 19.9999Z" stroke="#ddd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9466 18.5199L9.33325 30.6666L15.9999 26.6666L22.6666 30.6666L21.0533 18.5066" stroke="#ddd" strokeWidth="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
