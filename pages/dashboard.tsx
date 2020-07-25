import Table from 'react-bootstrap/Table';

import Layout from '../components/Layout';
import TournamentRow from '../components/TournamentRow';

export default function IndexPage() {
    let name: string = 'firstname';
    return (
        <Layout>
            <h1>{name}'s Dashboard</h1>
            <h3>Your Tournaments</h3>
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
        </Layout>
    );
}