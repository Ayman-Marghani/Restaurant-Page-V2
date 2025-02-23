import NavBar from "../components/NavBar"
import ImageCarousel from "../components/ImageCarousel"
import { useState, useEffect } from "react"

function isRestaurantOpen() {
  const now = new Date();
  const day = now.getUTCDay(); // Day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const hour = now.getHours(); // 0 -> 23
  if (day <= 4 && hour >= 9 && hour <= 23) {
    return true;
  } 
  return false;
}

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isRestaurantOpen());
  }, []);

  return (
    <>
      <NavBar/>
      <p className="banner" style={{ display: isOpen ? "block" : "none" }}>Restaurant is Open now!</p>
      <div id="content">
        <h1 className="homepage-headline">Ayman&apos;s Restaurant</h1>
        <div className="homepage-desc">
        Welcome to &quot;Ayman&apos;s Restaurant&quot; a modern yet cozy restaurant in the heart of the city, where culinary artistry meets fresh, locally sourced ingredients. Our diverse menu, inspired by both local traditions and global flavors, offers something for every palate—from sizzling steaks to delicate sushi rolls. Whether you're here for a quick bite or a romantic dinner, our warm atmosphere and attentive service promise an unforgettable dining experience.
        </div>
        <ImageCarousel/>
      </div>
    </>
  )
}

export default HomePage