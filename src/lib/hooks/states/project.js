import { useQuery } from "@apollo/client";

import Project from "src/graphql/queries/project";

export const useProject = ({ id }) => {
  const { data, loading, error } = useQuery(Project, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  return {
    tasks: data?.project?.tasks || [],
    loading,
    error,
  };
};
