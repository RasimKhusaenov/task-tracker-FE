import { gql } from "@apollo/client";

export default gql`
  query {
    projects {
      id
      description
      name
      updatedAt
      createdAt
    }
  }
`;
