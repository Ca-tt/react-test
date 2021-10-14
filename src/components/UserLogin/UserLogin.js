import './user-login-animation.scss';

// create a greeting with animation using js and bulma

function UserLogin() {

    let userName = prompt(`What's your name?`, 'Anonymous');
    let userResponse;

    let userGreetings = (userName) => {
        if (userName != 'Anonymous' && userName != null) {
            userResponse = (
                <div className="notification is-success fadeIn-fadeOut">
                    <p>Successfully authorized.</p>
                    <p>Hello, {userName}</p>
                </div>
            );
            return (userResponse);
        } else if (userName == null) {
            return (
                <div className="notification is-danger fadeIn-fadeOut">
                    <span className="notification-text">Authorization failed</span>
                </div>
            )
        }
        return (
            <div className="notification is-warning">
                <p>We don't recommend to stay {userName}</p>
                <p>Please, <a href="/">log in</a></p>
            </div>
        );
    }

    return (userGreetings(userName));
}

export default UserLogin;