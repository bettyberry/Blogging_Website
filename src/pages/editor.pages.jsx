import { Navigate } from "react-router-dom";

const Editor = () =>{
     // user can only edit when its logged in so here is the condition
    // let {userAuth: {access_token}} = useContext(UserContext)
    return(

       access_token === null ? <Navigate to="/signin"/>
       :editorState == "editor" ? <BlogEditor/> : <PublishForm/>
    )
}
export default Editor;