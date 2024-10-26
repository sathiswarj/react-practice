import { useLocation } from 'react-router-dom';

const WatchList = () => {
    const location = useLocation();
    const { watchList } = location.state || [];  

    return (
        <>
            {watchList && watchList.length > 0 ? (
                <ul>
                    {watchList.map((data) => (
                        <li key={data.show.id}>{data.show.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No items in your watch list.</p>  
            )}
        </>
    );
};

export default WatchList;
