"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,

  AlertCircle,
  Search,
  X
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/src/components/ui/input';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,

} from '@/src/components/ui/pagination';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/src/components/ui/tooltip";


interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export function ProjectsGrid() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [showTags, setShowTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        // Collect all topics from all projects, remove duplicates
        const topicsSet = new Set<string>();
        data.forEach((project: GitHubRepo) => {
          project.topics.forEach(topic => topicsSet.add(topic));
        });
        setAllTopics(Array.from(topicsSet).sort());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Remove filtering, always display all repos
  const displayedProjects = projects;
  const totalPages = Math.ceil(displayedProjects.length / pageSize);
  const paginatedProjects = displayedProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) {
    return (
      <div className="mb-6">

      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h3 className="text-lg font-semibold">Unable to load projects</h3>
          <p className="text-muted-foreground">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full flex flex-col"
          >
            <Card className="group h-full min-h-[420px] flex flex-col flex-1 overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Always show preview image for all repos */}
              <div className="relative h-70 w-full overflow-hidden mb-2">
                <Image
                  // src={`https://opengraph.githubassets.com/1/${project.full_name}`}
                  src="/img/github-pic.png"
                  alt={project.name}
                  width={400}
                  height={128}
                  className="object-cover w-full h-full rounded-t-xl"
                  priority={index < 4}
                  unoptimized
                />
              </div>
              <CardHeader className="relative space-y-4 flex-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-1 cursor-default">
                          {project.name}
                        </CardTitle>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        {project.name}
                      </TooltipContent>
                    </Tooltip>

                    <CardDescription className="text-sm line-clamp-2 leading-relaxed">
                      {project.description || "No description available"}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                    <Star className="h-3 w-3" />
                    <span>{project.stargazers_count}</span>
                  </div>
                </div>
                {project.language && (
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-3 w-3 rounded-full bg-[${getLanguageColor(project.language)}]`}
                    />
                    <span className="text-sm text-muted-foreground">{project.language}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="relative space-y-4 flex-1 flex flex-col justify-between">
                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 3).map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors"
                      >
                        {topic}
                      </Badge>
                    ))}
                    {project.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.topics.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Updated {formatDate(project.updated_at)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    <span>{project.forks_count}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </Link>
                  </Button>
                  {project.homepage && (
                    <Button asChild size="sm" className="flex-1">
                      <Link
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(p => Math.max(1, p - 1));
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={e => { e.preventDefault(); setCurrentPage(i + 1); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(p => Math.min(totalPages, p + 1));
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'today';
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 30) return `${diffInDays} days ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572a5',
    Java: '#b07219',
    'C#': '#239120',
    Go: '#00add8',
    Rust: '#dea584',
    PHP: '#4f5d95',
    Ruby: '#701516',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    CSS: '#1572b6',
    HTML: '#e34c26',
    Vue: '#4FC08D',
    React: '#61DAFB',
    Svelte: '#ff3e00',
  };

  return colors[language] || '#6b7280';
}
