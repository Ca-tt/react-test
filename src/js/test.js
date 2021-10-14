function Test() {
    let pageName = 'Test.js';
    let welcomePhrase = 'Welcome to';
    let pagesList = ['index.js', 'test.js'];

    return (
        <>
            <p>
                {welcomePhrase} {pageName} Page
            </p>
            <p>there are {pagesList.length} pages of the website</p>
        </>
    );
}

export default Test;
