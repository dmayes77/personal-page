import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { secretOrKey } from '../config/keys';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

function configurePassport(app) {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			User.findById(jwt_payload.id)
				.then(user => {
					if (user) {
						return done(null, user);
					}
					return done(null, false);
				})
				.catch(err => console.log(err));
		})
	);
	app.use(passport.initialize());
}

export default configurePassport;
