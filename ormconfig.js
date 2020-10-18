module.exports = {
    type: "mariadb",
    url: process.env.JAWSDB_MARIA_URL,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    entities:[process.env.TYPEORM_ENTITES],
    cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
    }
}