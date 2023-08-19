/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    sitekey: process.env.RECAPTCHA_SITE_KEY,
  });
};
