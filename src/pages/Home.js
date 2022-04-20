import React from "react";

function Home() {
	return (
		<div>
			{" "}
			<section className="home" id="home">
				<div className="home_container">
					<div className="home_data">
						<p className="home_greet">Hello!</p>
						<h1 className="home_name">
							I'm{" "}
							<span className="font-effect-shadow-multiple">Shana Maldisa</span>
						</h1>
						<h3 className="home_job">
							a <span className="auto-type"></span>
						</h3>

						<a href="#about" className="button">
							<span className="more_about_me">More About Me</span>
							<i className="bx bx-user-pin"></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
