import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('dark-mode') === 'true' ?? false)

  function toggleTheme() {
    setIsDarkTheme(prevTheme => !prevTheme)
  }

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? 'dark' : ''
    localStorage.setItem('dark-mode', isDarkTheme)
  }, [isDarkTheme])

  return (
    <header className="pt-8 pb-[4.5rem] bg-header md:bg-header-tablet md:pt-11 md:pb-[5.25rem] xl:bg-header-desktop bg-no-repeat bg-cover bg-center">
      <div className="xl:container px-6 md:px-10">
        <div className="flex justify-between items-center">
          <Link to="/" aria-label="To homepage">
            <img src="/assets/desktop/logo.svg" alt="Devjobs logo" />
          </Link>
          <div className="flex items-center gap-4">
            <img src="/assets/desktop/icon-sun.svg" alt="Sun icon" />
            <label className="relative w-[48px] h-[24px]">
              <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} className="peer sr-only" aria-label="Toggle dark mode" />
              <span className="absolute cursor-pointer inset-0 bg-white rounded-switch before:absolute before:content-[''] before:rounded-full before:w-[14px] before:h-[14px] before:bg-primary before:left-[5px] before:bottom-[5px] peer-checked:before:translate-x-[24px] before:transition-all"></span>
            </label>
            <img src="/assets/desktop/icon-moon.svg" alt="Moon icon" />
          </div>
        </div>
      </div>
    </header>
  )
}
