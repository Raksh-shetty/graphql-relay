import { graphql } from 'react-relay';

const DeleteUserMutation = graphql`
  mutation DeleteUserMutation($id: String!) {
    delete_example_user(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`; 

export default DeleteUserMutation;
