import './message.css';

function Message(props) {

    // get string from component
    let userResponse = props.message;

    // remove dots and commas from string
    function formatString(string) {
        let regExpPattern = /[,.]/g;
        return string.replace(regExpPattern, '');
    }

    // create message
    let message = (
        <div className="message is-primary">
            { formatString(userResponse) }
        </div>
    );

    // and return it to App
    return(message);
}

export default Message;