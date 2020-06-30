//usando es6

const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Hey!')
        }else {
            reject('Whoooops!')
        }
    })
}
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(err))

const somethingWillHappen2 =() => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            },2000)
        }else{
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(err))

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response =>{console.log('Array of results', response)})
    .catch(reject => {console.error(err)})