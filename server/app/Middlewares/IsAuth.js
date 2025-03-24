import passport, { use } from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { query } from "../../database/client"; // Replace with your MySQL database configuration

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;

use(
  new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      const [user] = await query(
        "SELECT id, user_name, email,role FROM users WHERE id = ?",
        [jwtPayload.id]
      );

      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

const isAuth = () => passport.authenticate("jwt", { session: false });

export default isAuth;
