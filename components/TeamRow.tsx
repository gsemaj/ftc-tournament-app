import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function TeamRow({ num, name, school, location }) {
    return (
        <tr>
            <td className='align-middle'>{num}</td>
            <td className='align-middle'>{name}</td>
            <td className='align-middle'>{school}</td>
            <td className='align-middle'>{location}</td>
            <td className='align-middle'>
                <ButtonGroup aria-label='Operations'>
                    <Button variant='secondary'>View</Button>
                    <Button>Manage</Button>
                    <Button variant='danger'>Remove</Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}