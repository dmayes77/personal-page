import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../img/default_avatar.png';

class Landing extends Component {
	render() {
		return (
			<Fragment>
				<div className="landing">
					<div className="dark-overlay landing-inner text-light">
						<div className="container">
							<div className="row">
								<div className="col-md-12 text-center">
									<img
										className="mb-4 img-fluid rounded-circle"
										src="//www.gravatar.com/avatar/6df8f8a644351b16a8392b724f66b767?s=200&r=pg&d=mm"
										alt="default_avatar"
									/>
									<h4>A Brief Introduction</h4>
									<p className="lead">
										My Name is David. Please browse around my website to view my
										profile. I am eager to engage in new and exciting projects
										and if you would like to build something together please get
										in touch.
									</p>
									<Link className="btn btn-lg btn-info mb-3 px-5" to="/profile">
										Enter
									</Link>
									<p>This website was built with the following tools:</p>
									<p>mongoDB express react react-router nodejs html5 heroku</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Landing;
