pipeline {
    agent any

    stages {
        stage('Docker build') {
            steps {
                sh "make docker-build"
            }
        }
        stage('Test') {
            steps { 
                sh "make docker-run"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    } 
}