module.exports = {
  'plugin': 'keepfast-contrib-psi',
  'sensors': {
    'score': {
      'label': 'PageSpeed Score',
      'criteria': [{
        'plataform': 'desktop',
        'expected': '90',
        'condition': '>',
        'result': true,
        'unit': ''
      },
      {
        'plataform': 'mobile',
        'expected': '95',
        'condition': '>',
        'result': true,
        'unit': ''
      }]
    }
  }
};
