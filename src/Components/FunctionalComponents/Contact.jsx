import '../../assets/css/Contact.css';
const Contact = () => {
    return (
        <div>
            <h1>This is my contact page</h1>
            <form>
                <label htmlFor="fname">First name</label><br />
                <input type="text" id="fname" name="fname" defaultValue="John" /><br />
                
                <label htmlFor="lname">Last name</label><br />
                <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;
