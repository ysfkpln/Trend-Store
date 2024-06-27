import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Bu sezonda en iyisini bul🔥</span>
        <h2>Herkese ozel koleksiyon</h2>
        <a href="#">Simdi Kesfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/public/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
