import "./accountInfo.css"
import { useData } from "../../context/Context"
import { useEffect, useState } from "react"

export default function AccountInfo() {
const {currentUser} = useData()   

  return (
  <div className="AccountInfo">
    <h2>User Information</h2>
    <h4>Name:</h4>
    <p> {currentUser.firstName} {currentUser.lastName}</p>
    <h4>Adress:</h4>
    <p> {currentUser.adress}</p>
    <button>Log Out</button>
  </div>
  )
}
