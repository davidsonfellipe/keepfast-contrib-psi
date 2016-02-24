module.exports = {
  'plugin': 'keepfast-contrib-psi',
  'sensors': {
    'score': {
      'label': 'PageSpeed Score',
      'criteria': [{
        'platform': 'desktop',
        'expected': '90',
        'condition': '>',
        'result': true,
        'unit': ''
      },
      {
        'platform': 'mobile',
        'expected': '95',
        'condition': '>',
        'result': true,
        'unit': ''
      }]
    }
  }
};
