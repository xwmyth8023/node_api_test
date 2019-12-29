pipeline {
    agent any

    stages {
        stage('Docker build') {
            container('docker') {
                    sh "make docker-build"
            }
        }
        stage('Test') {
            steps {
                container('docker') {
                    sh "make docker-run"
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    } 
}