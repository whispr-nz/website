/**
 * GET /coverage
 * Converage page.
 */
exports.getCoverage = (req, res) => {
  res.render('coverage', {
    title: 'Coverage'
  });
};
