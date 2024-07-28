import { ExternalLink } from 'lucide-react';

const StoryList = ({ stories }) => {
  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-start">
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {story.title}
            </a>
            <span className="text-sm text-gray-500">
              {story.points} points
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <a
              href={`https://news.ycombinator.com/item?id=${story.objectID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
            >
              Read more <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;