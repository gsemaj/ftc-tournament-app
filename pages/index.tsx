import Container from 'react-bootstrap/Container';
import NoticeWIP from './layout/NoticeWIP';

export default function IndexPage() {
    return (
        <Container className='pt-3'>
            <NoticeWIP />
            <h1>Index</h1>
        </Container>
    );
}