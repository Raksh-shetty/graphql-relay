import { graphql } from 'react-relay';

const AddUserMutation = graphql`
  mutation AddUserMutation($name: String!) {
  insert_example_user(objects: { name: $name }) {
    returning {
      id
      name
    }
  }
}
`;

export default AddUserMutation;
