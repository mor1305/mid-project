import "./homepage.css"
import Section from "./components/Section"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
  <div className="HomePage">
    <div className="image-container">
    {/* 10% OFF WHEN YOU SIGN UP Stay in the loop with the latest style news and get an exclusive 10% off when you subscribe to our emails */}
     PRIVATE SALE: 
     <br/>
     UP TO 50% OFF EXCLUSIVE ITEMS 
    </div>
    <div className="sections-wrapper">
    <Link to="/products/jewelery">
        <Section 
        url="https://images.pexels.com/photos/5475580/pexels-photo-5475580.jpeg?cs=srgb&dl=pexels-melikaa-tg-5475580.jpg&fm=jpg"
        heading="New In"
        description="Check out our latest jewelry collection"
        message="SHOP NOW"
        />
      </Link>
      <Section 
      url="https://images.pexels.com/photos/9753833/pexels-photo-9753833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      heading="Home Decor"
      description="Stay Tuned for our upcoming items"
      message="COMING SOON"
      />
    </div>
    <div className="sections-wrapper">
     <Section 
      url="https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      heading="MUST READ"
      description="Check out our team's top picks for books recommendation"
      message="COMING SOON"
      />
    </div>
    <div className="sections-wrapper">
     <Section 
      url="https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      heading="Babies Collection"
      description="Stay Tuned for our upcoming items"
      message="COMING SOON"
      />
      <Link to="/products/men's%20clothing">
        <Section 
        url="https://images.pexels.com/photos/12082485/pexels-photo-12082485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        heading="New In"
        description="Check out our latest men collection"
        message="SHOP NOW"
        />
      </Link>
    </div>
  </div>
  )
}


