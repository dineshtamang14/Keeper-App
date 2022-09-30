pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git clone') {
      steps {
        git ''
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm run build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}