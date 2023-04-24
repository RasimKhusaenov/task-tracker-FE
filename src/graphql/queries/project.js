import { gql } from "@apollo/client";

export default gql`
  query ($id: ID!) {
    project(id: $id) {
      tasks {
        id
        description
        title
        updatedAt
        createdAt
      }
    }
  }
`;
