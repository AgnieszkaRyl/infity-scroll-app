import '../App.css';
import {useQuery} from "@apollo/client";
import RocketComponent from "../components/RocketComponent";
import {useState} from "react";
import {LAUNCHES_DATA} from "../utilities/queries";

const Home = () => {
    const [hasMoreElements, setHasMoreElements] = useState(true);
    const fetchLimit = 20;
    const offset = 0;

    const {loading, error, data, fetchMore} = useQuery(LAUNCHES_DATA, {variables: {offset: offset, limit: fetchLimit}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    const onLoadMore = () => {
        fetchMore({
            variables: {
                offset: data.launchesPast.length
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                if (fetchMoreResult.launchesPast.length < fetchLimit) {
                    setHasMoreElements(false)
                }
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    launchesPast: [...prev.launchesPast, ...fetchMoreResult.launchesPast]
                });
            }
        })
    }
    return (
        <div>
            <div className="App">
                <h2>Rockets 🚀</h2>
                <div className="card-container">
                    <RocketComponent elements={data.launchesPast || []}
                                     onLoadMore={() => onLoadMore()}
                                     hasMore={hasMoreElements}
                    />
                </div>
            </div>
            );
        </div>
    )
};

export default Home;
