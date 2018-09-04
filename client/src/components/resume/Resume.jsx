import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import resume from './DavidMayesResume-TN.pdf';

import './styles.css';

class Resume extends Component {
	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<nav className="navbar navbar-inverse">
						<ul className="nav navbar-nav">
							<li>
								<Link to="/" className="nav-link">
									<i className="fas fa-angle-double-left mr-2" />
									Go Back
								</Link>
							</li>
						</ul>
						<a className="nav-link" href={resume} download="David_Mayes_Resume">
							<i className="fas fa-file-download mr-2" />
							Download Resume/CV
						</a>
					</nav>
					<div className="sidebar-wrapper">
						<div className="profile-container">
							<h1 className="name">David Mayes</h1>
							<h3 className="tagline">Full Stack Developer</h3>
						</div>
						{/* <!--//profile-container--> */}

						<div className="contact-container container-block">
							<ul className="list-unstyled contact-list">
								<li className="email">
									<i className="fa fa-envelope" />
									<a href="mailto: dmayes77@gmail.com">dmayes77@gmail.com</a>
								</li>
								<li className="phone">
									<i className="fa fa-phone" />
									<a href="tel:4702771818">(470) 277-1818</a>
								</li>
								<li className="website">
									<i className="fa fa-globe" />
									<a href="#" target="_blank" rel="noopener noreferrer">
										portfoliosite.com
									</a>
								</li>
								<li className="linkedin">
									<i className="fab fa-linkedin mr-2" />
									<a href="#" target="_blank" rel="noopener noreferrer">
										linkedin.com/in/alandoe
									</a>
								</li>
								<li className="github">
									<i className="fab fa-github mr-2" />
									<a href="#" target="_blank" rel="noopener noreferrer">
										github.com/username
									</a>
								</li>
								<li className="twitter">
									<i className="fab fa-twitter mr-2" />
									<a
										href="https://twitter.com/3rdwave_themes"
										target="_blank"
										rel="noopener noreferrer"
									>
										@twittername
									</a>
								</li>
							</ul>
						</div>
						{/* <!--//contact-container--> */}
						<div className="education-container container-block">
							<h2 className="container-block-title">Education</h2>
							<div className="item">
								<h5 className="meta">Covalence</h5>
								<div className="time">2018 - 2018</div>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<h5 className="meta">Free Code Camp</h5>
								<div className="time">2017 - 2018</div>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<h5 className="meta">Udemy</h5>
								<div className="time">2017 - 2018</div>
							</div>
							{/* <!--//item--> */}
						</div>
						{/* <!--//education-container--> */}

						<div className="languages-container container-block">
							<h2 className="container-block-title">Languages</h2>
							<ul className="list-unstyled interests-list">
								<li>
									English <span className="lang-desc">(Native)</span>
								</li>
							</ul>
						</div>
						{/* <!--//interests--> */}

						<div className="interests-container container-block">
							<h2 className="container-block-title">Interests</h2>
							<ul className="list-unstyled interests-list">
								<li>Basketball</li>
								<li>Learning new technologies</li>
								<li>Cooking</li>
							</ul>
						</div>
						{/* <!--//interests--> */}
					</div>
					{/* <!--//sidebar-wrapper--> */}

					<div className="main-wrapper">
						<section className="section summary-section">
							<h2 className="section-title">
								<i className="fa fa-user" />
								Career Profile
							</h2>
							<div className="summary">
								<p>
									I have spent 17 years in retail optical managment and business
									to business sales. I had little coding experience from my time
									exploring Computer Sciene at DeVry University. That said, I
									always wanted to be the magician on the other side of the
									computer screen. So, one day I decided to do something totally
									different with Covalence and become a web developer. I hope to
									grow with a company to expand the technologies I have been
									exposed to.
								</p>
							</div>
							{/* <!--//summary--> */}
						</section>
						{/* <!--//section--> */}

						<section className="section experiences-section">
							<h2 className="section-title">
								<i className="fa fa-briefcase" />
								Experiences
							</h2>

							<div className="item">
								<div className="meta">
									<div className="upper-row">
										<h3 className="job-title">Lead Developer</h3>
										<div className="time">2015 - Present</div>
									</div>
									{/* <!--//upper-row--> */}
									<div className="company">Startup Hubs, San Francisco</div>
								</div>
								{/* <!--//meta--> */}
								<div className="details">
									<p>
										Describe your role here lorem ipsum dolor sit amet,
										consectetuer adipiscing elit. Aenean commodo ligula eget
										dolor. Aenean massa. Cum sociis natoque penatibus et magnis
										dis parturient montes, nascetur ridiculus mus. Donec quam
										felis, ultricies nec, pellentesque eu, pretium quis, sem.
										Nulla consequat massa quis enim. Donec pede justo.
									</p>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore veritatis et
										quasi architecto beatae vitae dicta sunt explicabo.{' '}
									</p>
								</div>
								{/* <!--//details--> */}
							</div>
							{/* <!--//item--> */}

							<div className="item">
								<div className="meta">
									<div className="upper-row">
										<h3 className="job-title">Senior Software Engineer</h3>
										<div className="time">2014 - 2015</div>
									</div>
									{/* <!--//upper-row--> */}
									<div className="company">Google, London</div>
								</div>
								{/* <!--//meta--> */}
								<div className="details">
									<p>
										Describe your role here lorem ipsum dolor sit amet,
										consectetuer adipiscing elit. Aenean commodo ligula eget
										dolor. Aenean massa. Cum sociis natoque penatibus et magnis
										dis parturient montes, nascetur ridiculus mus. Donec quam
										felis, ultricies nec, pellentesque eu, pretium quis, sem.
									</p>
								</div>
								{/* <!--//details--> */}
							</div>
							{/* <!--//item--> */}

							<div className="item">
								<div className="meta">
									<div className="upper-row">
										<h3 className="job-title">UI Developer</h3>
										<div className="time">2012 - 2014</div>
									</div>
									{/* <!--//upper-row--> */}
									<div className="company">Amazon, London</div>
								</div>
								{/* <!--//meta--> */}
								<div className="details">
									<p>
										Describe your role here lorem ipsum dolor sit amet,
										consectetuer adipiscing elit. Aenean commodo ligula eget
										dolor. Aenean massa. Cum sociis natoque penatibus et magnis
										dis parturient montes, nascetur ridiculus mus. Donec quam
										felis, ultricies nec, pellentesque eu, pretium quis, sem.
									</p>
								</div>
								{/* <!--//details--> */}
							</div>
							{/* <!--//item--> */}
						</section>
						{/* <!--//section--> */}

						<section className="section projects-section">
							<h2 className="section-title">
								<i className="fa fa-archive" />
								Projects
							</h2>
							<div className="intro">
								<p>
									You can list your side projects or open source libraries in
									this section. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Vestibulum et ligula in nunc bibendum
									fringilla a eu lectus.
								</p>
							</div>
							{/* <!--//intro--> */}
							<div className="item">
								<span className="project-title">
									<a href="#hook">Velocity</a>
								</span>{' '}
								-{' '}
								<span className="project-tagline">
									A responsive website template designed to help startups
									promote, market and sell their products.
								</span>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<span className="project-title">
									<a
										href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
										target="_blank"
										rel="noopener noreferrer"
									>
										DevStudio
									</a>
								</span>{' '}
								-
								<span className="project-tagline">
									A responsive website template designed to help web
									developers/designers market their services.{' '}
								</span>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<span className="project-title">
									<a
										href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Tempo
									</a>
								</span>{' '}
								-{' '}
								<span className="project-tagline">
									A responsive website template designed to help startups
									promote their products or services and to attract users &amp;
									investors
								</span>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<span className="project-title">
									<a
										href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Atom
									</a>
								</span>{' '}
								-{' '}
								<span className="project-tagline">
									A comprehensive website template solution for
									startups/developers to market their mobile apps.{' '}
								</span>
							</div>
							{/* <!--//item--> */}
							<div className="item">
								<span className="project-title">
									<a
										href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Delta
									</a>
								</span>{' '}
								-{' '}
								<span className="project-tagline">
									A responsive Bootstrap one page theme designed to help app
									developers promote their mobile apps
								</span>
							</div>
							{/* <!--//item--> */}
						</section>
						{/* <!--//section--> */}

						<section className="skills-section section">
							<h2 className="section-title">
								<i className="fa fa-rocket" />
								Skills &amp; Proficiency
							</h2>
							<div className="skillset">
								<div className="item">
									<h3 className="level-title">React &amp; Redux</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="90%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}

								<div className="item">
									<h3 className="level-title">Javascript &amp; jQuery</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="98%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}

								<div className="item">
									<h3 className="level-title">MongoDB</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="98%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}

								<div className="item">
									<h3 className="level-title">HTML5 &amp; CSS</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="95%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}

								<div className="item">
									<h3 className="level-title">Ruby on Rails</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="85%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}

								<div className="item">
									<h3 className="level-title">Illustrator &amp; Photoshop</h3>
									<div className="level-bar">
										<div className="level-bar-inner" data-level="60%" />
									</div>
									{/* <!--//level-bar-->                                  */}
								</div>
								{/* <!--//item--> */}
							</div>
						</section>
						{/* <!--//skills-section--> */}
					</div>
					{/* <!--//main-body--> */}
				</div>
			</Fragment>
		);
	}
}

export default Resume;
