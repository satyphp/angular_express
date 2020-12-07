import { environment } from '../../../environments/environment';
export const prefixUrl = environment.api_url;
export  const API = { 
    userlogin:prefixUrl+'login',
    logout:prefixUrl + 'logout',
    blogpost:prefixUrl + 'blog',
    blog:prefixUrl + 'blog', 
    deleteblog:prefixUrl + 'delblog',
    setblog:(id) =>{ return prefixUrl + `getblog/${id}`},
    updateblog:prefixUrl + 'blogupdate',
    category:prefixUrl + 'category',
    deletecategory:prefixUrl + 'deleteCategory',
    addCategory:prefixUrl + 'category',
    editcategory:(id) =>{ return prefixUrl + `category/${id}`},
    updatecategory:prefixUrl + 'updatecategory',
}


