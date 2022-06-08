import "./section.css"

export default function Section({url, heading, description, message}) {
  return (
    <div className="Section">
      <img src={url}/>
      <h1>{heading}</h1>
      <p>{description}</p>
      <h3>{message}</h3>
    </div>
  )
}