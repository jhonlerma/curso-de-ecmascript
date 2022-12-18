const anotherFunction = () =>{
    return new Promise(( resolve, reject)=>{
        if (true) {
            resolve('resolvio')
        } else {
            reject('desecho');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.error(err));