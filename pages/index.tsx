import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Layout from '../components/Layout';

export default function IndexPage() {
    return (
        <Layout>
            <Jumbotron>
                <h1>The entire event at your fingertips.</h1>
                <p>
                    View match scores, team stats, alliances, and
                    livestreams-- either at home or at the competition-- on all your devices.
                    <br/>
                    It's the perfect platform for quick and easy scouting.
                </p>
                <p>
                    <Button>
                        Find your tournament
                    </Button>
                </p>
            </Jumbotron>
        </Layout>
    );
}