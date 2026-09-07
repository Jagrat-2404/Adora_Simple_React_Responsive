const paths = {
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />, check: <path d="m5 12 4.2 4L19 6.5" />,
  spark: <path d="M12 3.5 13.8 10 20.5 12l-6.7 1.8L12 20.5l-1.8-6.7L3.5 12l6.7-2L12 3.5Z" />,
  target: <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22" /></>,
  layout: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M3.5 9h17M9.5 9v11" /></>, code: <><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20" /></>,
  cart: <><path d="M3 4h2l2 11h10.5l2-7H6.2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></>, phone: <><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M10.5 5h3M11 18.5h2" /></>,
  palette: <><path d="M12 3.5a8.5 8.5 0 1 0 0 17h1.3a1.7 1.7 0 0 0 1.2-2.9 1.7 1.7 0 0 1 1.2-2.9h1A4 4 0 0 0 20.5 11 7.5 7.5 0 0 0 12 3.5Z" /><path d="M7.5 11.5h.01M9 7.5h.01M14.5 7.5h.01" /></>, chart: <><path d="M4 19.5V4.5M4 19.5h16" /><path d="m7 15 3.5-3.5 2.5 2L18.5 8" /></>,
  message: <path d="M5 5.5h14v10H10l-4.5 3v-3H5v-10Z" />, bot: <><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 4v3M8.5 12h.01M15.5 12h.01M9 16h6" /></>, menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="m6 6 12 12M18 6 6 18" />,
}
function Icon({ name, size = 18, className = '' }) { return <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.spark}</svg> }
export default Icon
