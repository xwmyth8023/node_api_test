pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'make install'
            }
        }
        stage('Test') {
            steps {
                sh 'mocha tests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    } 
}