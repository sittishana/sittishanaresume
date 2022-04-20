import React, { useEffect } from "react";
import Typed from "typed.js";

function Sidebar() {
	useEffect(() => {
		var typed = new Typed(".auto-type", {
			strings: ["Frontend Developer", "Web Designer"],
			typeSpeed: 100,
			backSpeed: 60,
			loop: true,
		});
	}, []);
	return (
		<div>
			<aside class="sidebar" id="sidebar">
				<div class="sidebar_content" id="sidebar-content">
					<ul class="nav_list">
						<li>
							<a href="#home">
								<i class="bx bx-home-heart"></i>
								<span class="links_name">Home</span>
							</a>
							<span class="tooltip">Home</span>
						</li>
						<li>
							<a href="#about">
								<i class="bx bx-user"></i>
								<span class="links_name">About Me</span>
							</a>
							<span class="tooltip">About Me</span>
						</li>
						<li>
							<a href="#skill">
								<i class="bx bx-folder-open"></i>
								<span class="links_name">Skills</span>
							</a>
							<span class="tooltip">My Skills</span>
						</li>
						<li>
							<a href="#contact">
								<i class="bx bx-phone"></i>
								<span class="links_name">Contact</span>
							</a>
							<span class="tooltip">My Contact</span>
						</li>
					</ul>

					<div class="profile_content">
						<div class="profile">
							<div class="profile_details">
								<img src={require("./img/shana.jpg")} />
								<div class="profile_name">Sitti Shana J. Maldisa</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
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
			<section class="about section" id="about">
				<div class="inner-width">
					<h2>About Me</h2>
					<div class="border"></div>
					<div class="about-section-row">
						<div class="about-section-col-1">
							<div class="abtext">
								<p>
									Hi, my full name is Sitti Shana Junaide Maldisa. I'm
									self-motivated, diligent, adaptive to changes and situations
									with good time management skill. Can easily adapt to new
									situations, is pleasant, and is a good follower and listener
									with excellent communication abilities. I am eager to
									collaborate with others and willing to learn new skills and
									knowledge in order to boost my productivity and effectiveness
									at work.
								</p>
								<div class="aboutme_info">
									<h3>Education</h3>
									<h4>Bachelor of Science in Computer Engineering</h4>
									<p>
										<span>THESIS:</span>
										PARKING AREA FINDER AND FOR RENT USING IMAGE PROCESSING AND
										WEB APP
									</p>
								</div>
							</div>
						</div>
						<div class="about-section-col-2">
							<div class="aboutskill_info">
								<h3>Workshops & Seminars</h3>
								<h4>I attended during College</h4>
							</div>
							<div class="myworkshops">
								<div class="box">
									<img src={require("./img/workshop1.jpg")} />
									<span>HTML, CSS, JAVASCRIPT Workshop</span>
								</div>
								<div class="box">
									<img src={require("./img/workshop2.jpg")} />
									<span>C#, C++ Workshop</span>
								</div>
								<div class="box">
									<img src={require("./img/workshop3.jpg")} />

									<span>Python Workshop</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="myskills" id="skill">
				<h2 class="portname">
					--My<span>Skills--</span>
				</h2>
				<div class="skills-row">
					<div class="skills-col-1">
						<div class="mywebsite">
							<div class="imgbx">
								<img src={require("./img/reactjs.jpg")} />
								<img src={require("./img/css.png")} />
								<img src={require("./img/javascript.jpg")} />
								<img src={require("./img/html.jpg")} />
							</div>
							<div class="whend">
								<p>March 14 2022 - March 26 2022</p>
							</div>
							<div class="work-title">About This Website</div>

							<div class="pjtext">
								<p>
									This is the first website I've ever created! Using only HTML,
									CSS and a little bit of Javascript. It only took me nearly two
									weeks to complete because most of the codes came from
									tutorials, which provided me knowledge and a path to follow.
								</p>
							</div>
						</div>
					</div>
					<div class="skills-col-2">
						<div class="skill_info">
							<h3>
								WEB <span> DEVELOPMENT</span>
							</h3>
							<ul class="tilesWrap">
								<li>
									<h2>Front-End</h2>
									<h3>HTML</h3>
									<h3>CSS</h3>
									<h3>JAVASCRIPT</h3>
									<h3>REACTJS</h3>
									<h3>ANT DESIGN</h3>
								</li>
								<li>
									<h2>Back-End</h2>
									<h3>NODEJS</h3>
									<h3>MYSQL</h3>
								</li>
								<li>
									<h2>Others</h2>
									<h3>Basic C++ Programming</h3>
									<h3>Basic Python Programming</h3>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="contact section" id="contact">
				<div class="contact-info">
					<div class="form-wrap">
						<h4 class="form-title">
							LET'S TALK <span>-Send me a message-</span>
						</h4>

						<form onsubmit="return false">
							<div class="form-fields">
								<div class="form-fields-1">
									<div class="form-group">
										<input
											type="text"
											name="name"
											placeholder="Name"
											required
										/>
									</div>

									<div class="form-group">
										<input
											type="email"
											name="email"
											placeholder="Email"
											required
										/>
									</div>
								</div>

								<div class="form-fields-2">
									<div class="form-group">
										<textarea
											name="message"
											placeholder="What's on your mind right now?"
											required
										></textarea>
									</div>
								</div>
							</div>

							<button id="submit-button">Send Message</button>
						</form>
					</div>
				</div>
				<div class="mycontact-info">
					<div class="info-wrap">
						<ul class="info-details">
							<li>
								<i class="bx bxl-gmail"></i>
								Email:
								<a href="mailto:sittishanamldisa@gmail.com" target="_blank">
									<br />
									<span>sittishanamaldisa@gmail.com</span>
								</a>
							</li>
							<li>
								<i class="bx bxs-phone"></i>
								Phone:
								<br />
								<span>09066427262</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Sidebar;
