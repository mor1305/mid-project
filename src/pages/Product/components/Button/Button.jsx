import "./button.css"

export default function Button({handleClick, className, text, iconName,id}) {

  return (
      <button onClick={handleClick} id={id} className={className}>
        <span>{text}</span> 
        <span className="material-symbols-outlined">{iconName}</span>
      </button>
  )
}