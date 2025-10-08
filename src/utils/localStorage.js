export const loadInstallList = ()=> {
    try{
        const data = localStorage.getItem('install')
        return data ? JSON.parse(data) : []
    }catch (err){
        console.log(err)
        return {}
    }
}

