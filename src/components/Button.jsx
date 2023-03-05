export default function Button({ children, type, additionalClasses, ...props }) {
  const colors =
    type === 2
      ? 'bg-secondary text-primary dark:bg-secondary-dark dark:text-white hover:bg-secondary-hover dark:hover:bg-secondary-dark-hover'
      : 'text-white bg-primary hover:bg-primary-hover'

  const classes = `inline-block px-5 py-[0.875rem] rounded-btn font-bold ${colors} ${additionalClasses ?? ''}`

  return type === 'button' ? (
    <button className={classes} {...props}>
      {children}
    </button>
  ) : (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
