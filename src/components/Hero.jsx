import Header from "./Header";


function Hero() {
    return (
        <div className="min-h-80 bg-cover bg-center border-red-700 " style={{ backgroundImage: "url('./background-image.jpg')"}}>
            <Header></Header>
            <div className="hero-content bg-opacity-50 bg-black p-8">
                <h1 className="text-white text-4xl font-bold">Welcome to Anime Xtream</h1>
                <p className="text-white mt-4">Your ultimate destination for all things anime. Explore, discover, and immerse yourself in the world of anime.</p>
            </div>
        </div>
    );
}

export default Hero;
