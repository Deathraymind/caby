module.exports = {
    server: {
        baseDir: "./",
    },
    middleware: [
        function (req, res, next) {
            res.setHeader(
                "Content-Security-Policy",
                "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://accounts.spotify.com; connect-src 'self' https://api.spotify.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline';"
            );
            next();
        },
    ],
    files: ["*.html", "*.css", "*.js"],
};
