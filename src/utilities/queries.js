import {gql} from "@apollo/client";

export const LAUNCHES_DATA = gql`
    query GetData($offset: Int, $limit: Int) {
        launchesPast(limit: $limit, offset: $offset) {
            id
            mission_name
            launch_date_local
            rocket {
                rocket_name
                rocket {
                    id
                }
            }
        }
    }
`;


export const ROCKET_DATA = gql`
    query GetDataRocket($id: ID!) {
        rocket(id: $id) {
            id
            active
            company
            country
            type
        }
    }
`;
