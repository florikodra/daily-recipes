const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize w-100 py-3 text-light">
				Copyright <span className="font-weight-bolder">Daily Recipes</span> &copy; {year}
			</footer>
		</>
	);
};

export default Footer;