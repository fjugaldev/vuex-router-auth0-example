require('babel-register')
require('dotenv').config()
var config = require('../../config')

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  'src_folders': [ 'test/e2e/specs' ],
  'output_folder': 'test/e2e/reports',
  'custom_assertions_path': [ 'test/e2e/custom-assertions' ],
  'page_objects_path': 'test/e2e/pages',

  'selenium': {
    'start_process': true,
    'server_path': 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent': true,
      'globals': {
        'devServerURL': 'http://localhost:' + (process.env.PORT || config.dev.port),
        'myEmail': process.env.MY_EMAIL || config.dev.myEmail,
        'myPassword': process.env.MY_PASSWORD || config.dev.myPassword
      }
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
