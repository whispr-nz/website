/**
 * GET /pricing
 * Pricing page.
 */
exports.getPricing = (req, res) => {
  res.render('pricing', {
    title: 'Pricing'
  });
};
