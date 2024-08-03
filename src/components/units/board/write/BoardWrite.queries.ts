import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      _id
      title
      contents
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $boardId: ID!
    $password: String
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      boardId: $boardId
      password: $password
    ) {
      _id
      writer
      title
      contents
    }
  }
`;
