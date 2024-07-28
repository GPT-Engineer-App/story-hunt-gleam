import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from "@/components/ui/input";
import StoryList from './StoryList';
import SkeletonList from './SkeletonList';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, error, isLoading } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories
  });

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Hacker News Top 100 Stories</h1>
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </header>
      <main>
        {isLoading ? (
          <SkeletonList />
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error.message}</p>
        ) : (
          <StoryList stories={filteredStories} />
        )}
      </main>
    </div>
  );
};

export default Index;