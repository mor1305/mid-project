import "./button.css"

export default function Button({handleClick, className, text, iconName}) {

  return (
      <button onClick={handleClick} className={className}>
        <span>{text}</span> 
        <span className="material-symbols-outlined">{iconName}</span>
      </button>
  )
}