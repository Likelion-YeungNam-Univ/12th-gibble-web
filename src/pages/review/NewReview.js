import newReview from '@/api/review/newReview'
import React, { useEffect } from 'react'

const NewReview = () => {

  useEffect(()=> {
    const uploadReview = async () => {
      try{
        const result = await newReview({
          title: "title",
          content: "string",
        })

        console.log(result) 
      } catch(error) {
        console.error(error)
      }
    }

    uploadReview();
  },[])

  return (
    <div>NewReview</div>
  )
}

export default NewReview