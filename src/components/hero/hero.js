import HeroIcon from '../../assets/girl-in-front-of-coding.jpg';

function Hero () {

    return (
        <div className="hero bg-greyColor p-2 flex flex-col pt-5 pb-3">
            <section className="mx-auto md:text-lg">Frontend/Full Stack Developer</section>
            <p className="pb-6 text-center md:text-lg">I am a puzzle loving software developer who designs and develop solutions of benefit to others.</p>
            <img className="object-contain w-2/4 max-h-40 md:max-h-36 mx-auto" src={HeroIcon} alt="girl in front of code"/>
        </div>
    )
};

export default Hero;


