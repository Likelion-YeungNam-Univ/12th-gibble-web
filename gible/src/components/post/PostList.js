import React from 'react'
import PostCard from './PostCard'

const PostList = () => {

    const postList = [
        {
            index: '01',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 100,
                required: 200
            }
        },
        {
            index: '02',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 150,
                required: 200
            }
        },
        {
            index: '03',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 175,
                required: 200
            }
        },
        {
            index: '04',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 10,
                required: 200
            }
        },
        {
            index: '05',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 30,
                required: 200
            }
        },
        {
            index: '06',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 0,
                required: 200
            }
        },
        {
            index: '07',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 60,
                required: 200
            }
        },
        {
            index: '08',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 60,
                required: 200
            }
        },
        {
            index: '09',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 80,
                required: 200
            }
        },
        {
            index: '10',
            title: '제목입니다.',
            author: '기블러',
            date: '2024-07-12',
            donation: {
                recieved: 100,
                required: 200
            }
        },
    ]

  return (
      <>
          {
              postList.map(el => {
                  return <PostCard post={el}/>
              })
        }
      </>
  )
}

export default PostList