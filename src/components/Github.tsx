import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Code, Link } from "@nextui-org/react";
import { GithubIcon, Stars, Fork, OpenIssues } from "@/src/components/Icons";
import { motion } from "framer-motion";
import { cn } from '../utils/cn';
import { classNames } from '../utils/classNames';
import { Badge } from "../components/ui/badge"
import {Button} from "../components/ui/button"

const stats = "https://api.github-star-counter.workers.dev/user/jokerxtd" // {"stars":12,"forks":4}
const repos = "https://api.github.com/users/jokerxtd/repos?type=owner&per_page=250"


const queryClient = new QueryClient()

export default function Github() {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubAPI />
    </QueryClientProvider>
  )
}

//? Github API Component
function GithubAPI() {
  const { isPending: isPendingRepos, error: errorRepos, data: reposData, isFetching: isFetchingRepos } = useQuery({
    queryKey: ['reposData'],
    //  get all public repo data from my github
    queryFn: async () => {
      const { data } = await axios.get(repos)
      // show all repositories except the forked ones
      const filteredRepos = data.filter((repo: any) => !repo.fork)

      const sortedRepositories = filteredRepos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)

      // do not display more than 9 repositories
      const limitedRepositories = sortedRepositories.slice(0, 12)

      return limitedRepositories
    }
  })



  // total stars and forks from "stats" api
  const { isPending: isPendingStats, error: errorStats, data: statsData, isFetching: isFetchingStats } = useQuery({
    queryKey: ['statsData'],
    queryFn: async () => {
      const { data } = await axios.get(stats)
      return data
    },
  })

  const ArchiedBadge = ({ archived }: { archived: boolean }) => {
    if (archived) {
      return (
        <Badge variant="RepoArchived">
          Archived
        </Badge>
      )
    }
    return null
  }

  const BadgeLanguages: { [key: string]: { name: string } } = {
    "TypeScript": { name: "Typescript"},
    "Python": { name: "Python"},
    "Lua": { name: "Lua"},
    "JavaScript": { name: "javascript"},
    "HTML": { name: "HTML"},
    "CSS": { name: "CSS"},
    "Md": { name: "Markdown"},
    "Vue": { name: "Vue"},
    "Ejs": { name: "EJS"},
    "Readme": { name: "Readme"},
    "Rd": { name: "Rd"},
    "Svelte": { name: "Svelte"},
    "MDX": { name: "MDX"},
    "PHP": { name: "PHP"},
    "SCSS": { name: "SCSS"},
    "Handlebars": { name: "Handlebars"},
    "Markdown": { name: "Markdown"},
    "Rust": { name: "Rust"},
    "Null": { name: "Null"},
  };

  const LanguageBadge = ({ language }: { language: string }) => {
    return (
      <Badge variant={BadgeLanguages[language]?.name as any}>
        {language}
      </Badge>
    );
  };

  const Title = ({ title }: { title: string }) => {
    if (title.length > 20) {
      return (
        <h1 className="font-semibold text-blue-500 sm:text-md">{title.slice(0, 12) + "..."}</h1>
      )
    }
    return (
      <h1 className="font-semibold text-blue-500">{title}</h1>
    )
  }

  if (errorRepos) return 'An error has occurred: ' + errorRepos.message

  return (

    <div className='flex flex-wrap w-full gap-4 p-4 justify-center'>
      <motion.div
        className="w-3 h-3 rounded-full mr-1"
      />
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <motion.span
          className="text-5xl font-extrabold text-center items-center justify-center text-primary-300"
          initial={{ color: "blue" }}
          animate={{ color: "blue" }}
          transition={{ duration: 0.5 }}
        >
          Github Repositories
        </motion.span>
        <div className="text-center p-4 text-base lg:text-lg">
          Here are some of my public github repositories<br />You can use these to build your own applications from just like this <a className="font-bold decoration-wavy decoration-2 underline decoration-sky-800" href="/">website</a>.
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Code color="default" className="flex flex-row items-center font-extrabold text-lg text-center justify-center p-1 gap-2 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            Total<Stars className='text-yellow-500 ' />:{statsData?.stars}
          </Code>
          <Code color="default" className="flex flex-row items-center font-extrabold text-lg text-center justify-center p-1 gap-2 border rounded-md border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            Total<Fork className='text-zinc-800 text-xl dark:text-white' />:{statsData?.forks}
          </Code>
        </div>
        <div className="text-center p-4 text-base lg:text-lg">
          Check out my <a href="https://github.com/JoKeRxTD" className="underline decoration-wavy decoration-2 decoration-green-800 font-bold">Github</a> for more projects.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-wrap w-full gap-4 p-2 justify-center ">

        {isPendingRepos && <div>Loading...</div>}

        {reposData?.map((repo: any) => (
          <Card key={repo.id} className="flex flex-col p-2 rounded-md ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25">
            <CardHeader className="text-center justify-center items-center text-2xl text-primary-300 font-bold">
              <Link href={repo.html_url} isExternal>
                {repo.name.length > 30 ? <Title title={repo.name} /> : repo.name}
              </Link>
            </CardHeader>
            <CardBody className="items-center text-center space-y-2 p-1 justify-between">
              <div className="flex flex-row items-center justify-center gap-1 text-center">
                {/* <ArchiedBadge archived={repo.archived} />
                <LanguageBadge language={repo.language} /> */}
              </div>
              <span>{repo.description}</span>
              <span className="text-xs gap-1 justify-around items-center flex flex-row">
                Tags:{" "}
                <ArchiedBadge archived={repo.archived} />
                <LanguageBadge language={repo.language} />
              </span>
              <div className="flex flex-row items-center justify-center gap-1 text-center">
                <Link
                  href={repo.html_url}
                  isExternal
                  color="foreground">
                    <Button
                      key={repo.name}
                      variant="default"
                      size="sm"
                      rounded="md"
                      className="text-sm p-2 h-auto w-auto"
                    >
                    <GithubIcon className='text-zinc-800 dark:text-zinc-100' height={12} />
                  </Button>
                </Link>
              </div>
            </CardBody>
            <CardFooter className="flex flex-row justify-center">
              <div className="flex flex-row items-center text-center justify-center gap-2 test-xs">
                <div color="default" className="flex flex-row items-center text-center justify-center p-1 gap-2 font-bold">
                  {repo.stargazers_count}<Stars className='text-yellow-500' height={12} /> | 
                </div>
                <div color="default" className="flex flex-row items-center text-center justify-center p-1 gap-2 font-bold">
                  {repo.forks}<Fork className='text-zinc-800 text-md dark:text-white' height={12} /> | 
                </div>
                <div color="default" className="flex flex-row items-center text-center justify-center p-1 gap-2 font-bold">
                  {repo.open_issues}<OpenIssues className='text-orange-600' height={12} />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}