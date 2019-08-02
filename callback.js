console.log('Before');
 getUser(1,function(user){
     console.log('user',user);
     getRepositories(user.gitHubUserName, (repos) =>{
         console.log('repos' , repos);
         getCommits(repo, (commit)=>{
            //calback hell
         });
     });
 });
console.log('After');

function getUser(id,callback){
    setTimeout(() => {        
        console.log('Using users from data base');
        callback({ id: id , gitHubUserName: 'Amrendra'})
    }, 2000)    
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GiotHub APi...');
        callback(['repo1','repo2','repo3'])
    }, 2000);
}