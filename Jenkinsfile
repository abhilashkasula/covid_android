pipeline {
    agent any
    stages {
        stage('Check Milestone') {
            steps {
                milestone label: '', ordinal:  Integer.parseInt(env.BUILD_ID) - 1
                milestone label: '', ordinal:  Integer.parseInt(env.BUILD_ID)
            }
        }
        stage('Run unit tests') {
            steps {
                sh 'cd android && ./gradlew test'
            }
        }
        stage('Build') {
            steps {
                sh 'cd android && ./gradlew build -x test'
            }
        }
    }
    post {
        always {
            cleanWs()
            deleteDir()
            archiveArtifacts allowEmptyArchive: true, artifacts: 'android/**/*.apk', followSymlinks: false
        }
    }
}