import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  default_pass: process.env.DEFAULT_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT,
}
