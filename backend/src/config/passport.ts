import passport from "passport";
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from "passport-google-oauth20";
import { AppDataSource } from "../database/data-source";
import { User } from "../modules/user/user.entity";
import { Role } from "../modules/role/role.entity";
import { env } from "./env";

passport.use(
  new GoogleStrategy(
    {
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        const userRepo = AppDataSource.getRepository(User);
        const roleRepo = AppDataSource.getRepository(Role);

        let user = await userRepo.findOne({
          where: { googleId: profile.id },
          relations: ["role"],
        });

        if (!user) {
          const customerRole = await roleRepo.findOne({
            where: { name: "CUSTOMER" },
          });

          user = userRepo.create({
            name: profile.displayName,
            email: profile.emails?.[0].value,
            googleId: profile.id,
            roleId: customerRole!.id,
          });

          await userRepo.save(user);
        }

        return done(null, user);
      } catch (err) {
        return done(err, undefined);
      }
    }
  )
);

export default passport;