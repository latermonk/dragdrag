module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dragdrag/'
        : '/',
    outputDir: "docs"
}
