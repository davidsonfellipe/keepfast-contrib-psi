module.exports = {
  'plugin': 'keepfast-contrib-psi',
  'sensors': {
    'score': {
      'label': 'PageSpeed Score',
      'label': 'Page load time',
      'criteria': [{
        'plataform': 'desktop',
        'expected': '90',
        'condition': '<',
        'result': true
      },
      {
        'plataform': 'mobile',
        'expected': '95',
        'condition': '<',
        'result': true
      }]
    }
  }
};
