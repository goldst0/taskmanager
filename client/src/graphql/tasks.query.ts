import { gql } from "@apollo/client";
import { Task } from "./types";

export const TASKS_QUERY = gql`
  query {
    tasks {
      id
      title
      content
      createdAt
    }
  }
`;

export interface TasksData {
  tasks: Task[];
}
