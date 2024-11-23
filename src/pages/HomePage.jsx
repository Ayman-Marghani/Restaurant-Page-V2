import NavBar from "../components/NavBar"
import HomePageImg from "../assets/img/homepage-img.jpg"

function HomePage() {
  return (
    <>
      <NavBar/>
      <div id="content">
        <h1 className="homepage-headline">Ayman's Restaurant</h1>
        <div className="homepage-desc">
        Welcome to "Ayman's Restaurant" a modern yet cozy restaurant in the heart of the city, where culinary artistry meets fresh, locally sourced ingredients. Our diverse menu, inspired by both local traditions and global flavors, offers something for every palate—from sizzling steaks to delicate sushi rolls. Whether you're here for a quick bite or a romantic dinner, our warm atmosphere and attentive service promise an unforgettable dining experience.
        </div>
        <img className="homepage-img" src={HomePageImg} alt="Interior of cozy restaurant, loft style stock photo"></img>
      </div>
    </>
  )
}

export default HomePage