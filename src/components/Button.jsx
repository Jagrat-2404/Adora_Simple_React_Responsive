import { Link } from 'react-router-dom'
import Icon from './Icon'

function Button({ children, to, variant = 'primary', className = '' }) {
  return <Link className={`button button-${variant} ${className}`} to={to}>{children} <Icon name="arrow" size={16} /></Link>
}

export default Button
