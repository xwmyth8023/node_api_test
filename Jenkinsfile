env.REPO_NAME = 'node_api_test'
CHRON_STRING = 'H 8 * * *'

pipeline {
  agent any

  environment {
    NODE_ENV = "${BRANCH_NAME}"
  }
  triggers {
    cron "$CHRON_STRING"
  }
  stages {
    stage('Install Dependencies') {
      when { anyOf { branch 'qa'; branch 'production' } }
      steps {
          sh "make install"
      }
    }
    stage('Running tests') {
      when { anyOf { branch 'qa'; branch 'production' } }
      steps { 
          sh "make test"
      }
    }
  }
  post {
    always {
      echo "done"
      // script {
      //   if (env.BRANCH_NAME== 'qa' || env.BRANCH_NAME == 'production')
      //     notifyTestResult()
      // }
      // script {
      //   if (env.BRANCH_NAME== 'qa' || env.BRANCH_NAME == 'production') {
      //     container('docker') {
      //       sh """
      //         cp ./mochawesome-report/${env.REPO_NAME}.json
      //         cp ./mochawesome-report/${env.REPO_NAME}.html 
      //       """
      //     }
      //   }
      // }
    }
  }
}
