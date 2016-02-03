export default class Project{
  changeProjectName(name){
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(name)));
  }
  changeOwnerName(name){
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(name)));
  }
}
