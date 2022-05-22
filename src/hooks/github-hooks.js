import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarredRepos } =
    useContext(GithubContext);

  return { githubState, getUser, getUserRepos, getUserStarredRepos };
};

export default useGithub;
