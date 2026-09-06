import { Link } from 'react-router-dom'
function Button({ children, to, variant = 'primary', className = '' }) {
  return <Link className={`button button-${variant} ${className}`} to={to}>{children} <span>↗</span></Link>
}
export default Button
