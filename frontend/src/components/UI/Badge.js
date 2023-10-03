import classes from './Badge.module.css'

export default function Badge({children}) {
  return (
    <small className={classes.new}>{children}</small>
  )
}
