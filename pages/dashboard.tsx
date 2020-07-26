import Table from 'react-bootstrap/Table';

import Layout from '../components/Layout';
import TournamentRow from '../components/TournamentRow';
import TeamRow from '../components/TeamRow';

export default function IndexPage() {
    let name: string = 'firstname';
    return (
        <Layout>
            <h1>{name}'s Dashboard</h1>
            <br/>
            <h3>Your Events</h3>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <TournamentRow idn='1' name='iSPACE Ohio FTC Qualifier' location='Cincinnati, OH' />
                </tbody>
            </Table>
            <br/>
            <h3>Your Teams</h3>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        
                        <th>Location</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamRow num='8120' name='Electric Hornets' school='Kirtland High School' location='Kirtland, OH' />
                </tbody>
            </Table>
        </Layout>
    );
}