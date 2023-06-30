module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '146.190.113.71',
      username: 'deploy',
      pem: '/Users/matt/.ssh/id_domeapps'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'meteor-demo',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://demo.app.dome.software',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'zodern/meteor:root',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '4.4.12',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps
  proxy: {
    domains: 'demo.app.dome.software',

    ssl: {
      letsEncryptEmail: 'sysadmin@dome.software',
      forceSSL: true
    }
  }
};
