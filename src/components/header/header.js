
function Header () {
    return (
        <header className="bg-primary flex justify-between p-2">
            <section className="ml-2 font-semibold text-lg self-center text-textColor">Jenny Quan</section>
            <ul className="md:flex">
                <li className="mr-2">About</li>
                <li className="mr-2">Projects</li>
                <li className="mr-2">Contact</li>
            </ul>
        </header>
    )
};

export default Header;