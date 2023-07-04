import { useState, useEffect } from "react";

function usePost() {
  const [ posts, setPosts ] = useState([]);
  const [ lastPostCount, setLastPostCount] = useState(parseInt(window.localStorage.getItem('lastPostCount') || 6));
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const initData = [
        {
          title: 'mung0',
          content: 'content0',
          img: 'https://lh3.googleusercontent.com/ogw/AGvuzYaPchRn4tclz51xylPtIOs-RmaMB5Js3o6MPrsoQA=s32-c-mo',
          name: 'name0',
          viewCount: 0,
          commentCount: 0,
          likeCount: 0
        },
        {
          title: 'mung1',
          content: 'content1',
          img: 'https://lh3.googleusercontent.com/ogw/AGvuzYaPchRn4tclz51xylPtIOs-RmaMB5Js3o6MPrsoQA=s32-c-mo',
          name: 'name1',
          viewCount: 1,
          commentCount: 1,
          likeCount: 1
        },
        {
          title: 'mung2',
          content: 'content2',
          img: 'https://lh3.googleusercontent.com/ogw/AGvuzYaPchRn4tclz51xylPtIOs-RmaMB5Js3o6MPrsoQA=s32-c-mo',
          name: 'name2',
          viewCount: 2,
          commentCount: 2,
          likeCount: 2
        },
      ]
      setPosts(initData);
      setIsLoading(false);
      setLastPostCount(initData.length)
      window.localStorage.setItem('lastPostCount', initData.length);
    }, 3000)
  }, [])

  return {
    posts, isLoading, lastPostCount
  }
}

export default usePost;