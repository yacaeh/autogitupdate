const USER = 'ID';
const PASS = 'PASS';
const NODE_PATH = 'C:/Users/zombie/Desktop/nodeserver';
const UNITY_PATH = 'C:/Users/zombie/Desktop/Unity';
const NODE_REPO = 'github.com/yacaeh/noderepo';
const UNITY_REPO = 'github.com/yacaeh/unityrepo';

const git = require('simple-git/promise');
const nodeRemote = `https://${USER}:${PASS}@${NODE_REPO}`;
const unityRemote = `https://${USER}:${PASS}@${UNITY_REPO}`;
git(NODE_PATH).pull(nodeRemote, 'master', {
        '--rebase': 'true'
    })
    .then(() => {console.log("pulled!")
    //Node 서버 실행
    var cmdText = 'cd "C:\\Users\\zombie\\Desktop\\managerContorller" \node controller.js ';
    var cmd = require('child_process').exec(cmdText,function(error) {
      if (error) {
        console.error('Failed!');
      }
      else {
        console.log('Success!');
        return "success";
      }
    })
    .catch((err) => console.error('failed: ', err));      

git(UNITY_PATH).pull(unityRemote, 'master', {
        '--rebase': 'true'
    })
    .then(() => {console.log("pulled!")
    //UNITY 실행
    var cmdText = 'start "" "C:\\Users\\zombie\\Documents\\argument\\Builds\\unity.exe" testArgument';
    var cmd = require('child_process').exec(cmdText,function(error) {
      if (error) {
        console.error('Failed!');
      }
      else {
        console.log('Success!');
        return "success";
      }
    })
    })
    .catch((err) => console.error('failed: ', err));