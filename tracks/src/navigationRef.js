//purpose is to get react navigator outside

import { NavigationActions } from "react-navigation";

let navigator ;
export const setNavigator =(nav)=>{
    navigator = nav
}

export const navigate = (routeName,params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}