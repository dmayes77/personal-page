import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import myImage from '../../img/davidHeadshot.jpg';

class Landing extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

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
										src={myImage}
										alt="default_avatar"
									/>
									<h4>A Brief Introduction</h4>
									<p className="lead">
										My Name is David. Please browse around my website to view my
										profile. I am eager to engage in new and exciting projects
										and if you would like to build something together please get
										in touch.
									</p>
									<Link
										to="/profile/dmayes"
										className="btn btn-lg btn-info mb-3 px-5"
									>
										View Profile
									</Link>
								</div>
							</div>
							<p className="text-center">
								This website was built with the following tools:
							</p>
							<div className="row justify-content-around">
								<div>mongoDB</div>
								<div>express</div>
								<div>React</div>
								<div>React-Router</div>
								<div>Redux</div>
								<div>nodejs</div>
								<div>html5</div>
								<div>heroku</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);
