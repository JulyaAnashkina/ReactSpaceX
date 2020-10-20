import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import Youtube from 'react-youtube';
import './details.css';

import Main from '../Main/Main';

const Details = (props) => {
    // { location }
    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id));
    }, [getLaunch]);

    const history = useHistory();

    if (!launch) return <div> Загрузка...</div>;
    return (
        <>
            { console.log(launch)}
            {/* {console.log(location.state)} */}
            <Main name={launch.name} />
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name} />
                        </div>
                        <div className="details-content">
                            <p className="details-description">
                                {launch.details}
                                {/* {location.state.item.details} */}
                            </p>
                        </div>
                    </div>
                    <Youtube className="details-youtube" width="560" height="315" videoId={launch.links.youtube_id} />
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
};
export default Details;