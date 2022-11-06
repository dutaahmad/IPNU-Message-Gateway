import axios from 'axios'

export const menuContent = () => axios.get(
    `http://localhost:5173/menu-content.json`
  )

export const imageContent = () => axios.get(
  `${window.location.href}gallery-content.json`
)