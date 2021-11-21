pipeline {
    agent any

    stages {
        stage('Docker build') {
            steps {
                echo "build start"
            }
        }
        stage('Test') {
            steps { 
                echo "running tests"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    } 
}
