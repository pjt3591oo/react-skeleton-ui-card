import Post from './components/post/card';
import usePost from './hooks/usePost';

function App() {
  const { posts, isLoading, lastPostCount } = usePost();
  return (
    <div style={{background: '#e3e3ee3'}}>
      <div>
        <Post posts={posts} isLoading={isLoading} lastPostCount={lastPostCount}/>
      </div>
    </div>
  );
}

export default App;
