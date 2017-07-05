pipeline {
    agent any

    stages {
        stage('Test'){
            steps {
                sh 'docker build -t ethereum-contracts .'
                sh 'docker run ethereum-contracts'
            }
        }
    }
}
