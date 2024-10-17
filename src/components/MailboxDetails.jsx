import { useParams } from 'react-router-dom';


const MailboxDetails = (props) => {
    console.log(props);
    const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
console.log(' Mailbox Object:', selectedBox);
return (
    <>
    <h2>{selectedBox.name}</h2>
    <dl>
        <dt>Box Holder:</dt>
        <dd>{selectedBox.name}</dd>
        <dt>Box Size:</dt>
        <dd>{selectedBox.size}</dd>
    </dl>
    </>
);
};


export default MailboxDetails;
