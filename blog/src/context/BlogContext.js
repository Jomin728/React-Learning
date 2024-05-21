import React,{useState,useReducer, act} from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";
// const BlogContext = React.createContext();


const blogReducer = (state,action) =>{
  switch (action.type){
    case 'add_blogpost':
        return [...blogPosts,{title:action.payload.title,
            content:action.payload.content,
        id:Math.floor(Math.random() * 9999)
    }]
    case 'delete_blogpost':
        return state.filter((blog)=>{ blog.id!==action.payload})
    case 'edit_blogpost':
        return  state.map((blogpost)=>{
          if(blogpost.id == action.payload.id)
            return action.payload;
            else
            return blogpost;
        })

    case 'get_blogposts':
        return action.payload;


    default:
        return state;
  }
}
    const addBlogPosts = (dispatch) =>{
        // setBlogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
        return async(title,content,callback)=>{
             
            await jsonServer.post('/blogposts',{title,content})
            //newtwork req to update blogpost list can be done here
            // dispatch({type:'add_blogpost',payload:{title,content}})
            callback();
        }
        

    }

 
    const getBlogpost =  (dispatch)=>{
       return async () =>{
        const response = await jsonServer.get('/blogPosts')
         dispatch({type:'get_blogposts',payload:response})
       }
    }

    const editBlogPost = (dispatch) => {
        return async (id,title,content,callback)=>{
            await jsonServer.put(`/blogposts/${id}`,{title,content})
            dispatch({type:'edit_blogpost',payload:{id,title,content}})
            callback();
        }
    }

    const deleteBlogPosts = (dispatch) => {
        return async (id) => {
            await jsonServer.delete(`/blogposts/${id}`)
            dispatch({type:'delete_blogpost',payload:id})
        }
    }

// export const BlogProvider = ({children}) => {

//     // const [blogPosts,setBlogPosts] = useState([])

//     const [blogPosts,dispatch] = useReducer(blogReducer,[]);

//     const addBlogPosts = () =>{
//         // setBlogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length+1}`}])
//         dispatch({type:'add_blogpost'})
//     }

//     return <BlogContext.Provider value={{data:blogPosts,addBlogPosts:addBlogPosts}} >
//        {children}
//     </BlogContext.Provider>
// }

export const {Context,Provider} = createDataContext(blogReducer,{addBlogPosts,deleteBlogPosts,editBlogPost,getBlogpost},[]);