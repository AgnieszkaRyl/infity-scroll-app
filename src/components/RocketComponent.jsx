import {Link} from 'react-router-dom';

const RocketInfinitiveList = ({elements, onLoadMore, hasMore}) => {
    const handleScroll = ({currentTarget}, onloadMore) => {
        if (
            currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight && hasMore
        ) {
            onloadMore();
        }
    }
    return (
        <div>
            <div onScroll={e => handleScroll(e, onLoadMore)} className="scroll">
                {elements.map((el) => (
                    <div className="card" key={el.id}>
                        <Link className="link" to={"/rocketDetails/" + el.rocket.rocket.id}>
                            <p>{el.mission_name}</p>
                            <p>{el.rocket.rocket_name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            {!hasMore && <p>You have reached all elements</p>}
        </div>
    )
}

export default RocketInfinitiveList;