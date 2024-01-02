import { useState, useEffect } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      )
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export const useSound = (src, { playbackRate, volume }) => {
  const audio = new Audio(src)

  const playFunc = () => {
    volume > 1 ? (audio.volume = 1) : (audio.volume = volume)
    audio.playbackRate = playbackRate

    audio.play()
  }

  return [playFunc, audio.src, audio.duration]
}
