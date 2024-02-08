import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container , Postform } from '../component'
import service from '../appwrite/config'
import {useParams,useNavigate} from 'react-router-dom'


function EditPost() {
    const [post, setPosts] = useState(null);

    const {slug}  = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      if(slug){
        service.getPost(slug).then((post) =>{
            if (post) {
                setPosts(post)  
            }
        })
      }else{
        navigate('/')
      }
    }, [slug,navigate]);
  return post ? (
    <div className='py-8 '>
        <Container>
            <Postform post={post} />
        </Container>
    </div> 
  ): null
}

export default EditPost
