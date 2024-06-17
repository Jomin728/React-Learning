const paths = {
    auth()
    {
        return '/'
    },
    home()
    { 
        return '/home'
    },
    onboarding(){
        return '/onboarding'
    },
    projectView(projectId:string)
    { 
        return `/home/${projectId}`
    },
    projectViewAdmin(projectId:string)
    {
        return `/project/edit/${projectId}`
    },
    projectCreate()
    {
        return `/project/new`
    }



}