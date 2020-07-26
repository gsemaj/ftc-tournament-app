import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Layout from '../components/Layout';
import CardC from '../components/CardC';
import getJumboStyle from '../util/styling';

export default function IndexPage() {
    return (
        <Layout>
            <Jumbotron style={getJumboStyle('/bg1.jpg')}>
                <h1>The entire event at your fingertips.</h1>
                <p>
                    Match scores, team stats, alliances, and
                    livestreams-- either at home or at the competition-- on all your devices.
                    <br/>
                    It's the perfect platform for all of your scouting needs.
                </p>
                <p>
                    <Button>
                        Find your tournament
                    </Button>
                </p>
            </Jumbotron>
            
            <div className='d-flex justify-content-between flex-wrap'>
                <CardC title='Teams' imgURL='/misc2.jpg' paragraph='See all the stats for your favorite teams, including match history, awards, and rankings.'>
                    <Button variant="primary">Compare top teams</Button>
                </CardC>
                <CardC title='Events' imgURL='/misc1.jpg' paragraph='Schedules, results, and alerts for FIRST Lego League, Tech Challenge, and Robotics Competition events.'>
                    <Button variant="primary">See the events</Button>
                </CardC>
                <CardC title='Personal Dashboard' imgURL='/refs.jpg' paragraph='Manage all of your events and teams, all from your personalized dashboard.'>
                    <Button href="/dashboard" variant="primary">View your dashboard</Button>
                </CardC>
            </div>
        </Layout>
    );
}