import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ROCKET_DATA} from "../utilities/queries";

const RocketDetails = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(ROCKET_DATA, {variables: {id: id}});

    if (loading) return <p>Loading ...</p>;
    if (error) return <p> Sorry, something went wrong ...</p>
    return (
        <div>
            <h2>Rocket information</h2>
            <p>Company: {data.rocket.company}</p>
            <p>Type: {data.rocket.type}</p>
            <p>Country: {data.rocket.country}</p>
        </div>
    )
};

export default RocketDetails;