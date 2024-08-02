import React, { useEffect } from "react";
import styled from "styled-components";
import PageNotice from "@/components/common/PageNotice";
import NewReviewSeparator from "@/components/review/newReview/NewReivewSeparator";
import ReviewForm from "@/components/review/newReview/ReviewForm";
import newReview from "@/api/review/newReview"


const NewReview = () => {
  const location = ["Home", "커뮤니티", "투명 후기", "게시글 작성"];
  
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

  /*
    import { storage } from '@/firebase/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react'

const TestReviewUpload = () => {

    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }   

    const handleUpload = async () => {
        if(!file) return;  // 파일 선택되지 않았으면 업로드 불가. 실제로는 아예 제출 버튼이 비활성화?

        const imageId = uuid();
        const storageRef = ref(storage, `review/${imageId}/${imageId}.png`)
        
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(snapshot.ref);
            console.log('downloadUrl',downloadUrl)
            setImageUrl(downloadUrl);
        } catch(error) {
            console.error('file upload to firebase failed',error);
        }
    }

  return (
    <div>

        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>업로드 버튼</button>
        { imageUrl && <img src={imageUrl} alt='uploaded' /> }
    </div>
  )
}

export default TestReviewUpload
  */
  
  return (
    <Wrapper>
      <PageNotice location={location} />
      <NewReviewSeparator title={"후원 감사 글 작성하기 "} />
      <Form>
        <ReviewForm />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 14%;
`;

const Form = styled.div`
  box-sizing: border-box;
  margin-top: 38px;
  margin-bottom: 150px;
  padding: 0 86px;
`;

export default NewReview;
