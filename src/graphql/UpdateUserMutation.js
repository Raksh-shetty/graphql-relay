import { graphql } from 'react-relay';

const UpdateUserMutation = graphql`
  mutation UpdateUserMutation($id: String!, $name: String!) {
    update_example_user(where: { id: { _eq: $id } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

export default UpdateUserMutation;
