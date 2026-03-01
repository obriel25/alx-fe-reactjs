import { useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from "./components/PostsComponent";
  const queryClient = new QueryClient();

  function App() {
     const [showPosts, setShowPosts] = useState(true);
    return (
       <><button onClick={() => setShowPosts(!showPosts)}>
        Toggle Posts Component
      </button><QueryClientProvider client={queryClient}>
          <PostsComponent />
        </QueryClientProvider></>
    );
  }
  export default App;