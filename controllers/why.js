/**
 * GET /why-whispr
 * Why Whipr page
 */
exports.whyWhispr = (req, res) => {
  res.render('why-whispr', {
      title: 'Why Whispr?'
  });
};
