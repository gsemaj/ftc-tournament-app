import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function TeamRow({ num, name, school, location }) {
    return (
        <tr>
            <td className='align-middle'>{num}</td>
            <td className='align-middle'>{name}</td>
            
            <td className='align-middle'>{location}</td>
            <td className='align-middle'>
                <Button className='m-1' variant='secondary'>View</Button>
                <Button className='m-1'>Manage</Button>
                <Button className='m-1' variant='danger'>Remove</Button>
            </td>
        </tr>
    );
}