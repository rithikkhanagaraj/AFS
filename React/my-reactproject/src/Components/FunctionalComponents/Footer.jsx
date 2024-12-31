import '../../assets/css/Footer.css';

function Footer() {
    function submit() {
        window.alert("Form submitted successfully");
    }

    return (
        <div className="Footer">
            <footer>
                <form>
                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder="" />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input type="email" placeholder="" />
                    </div>

                    <div>
                        <label>Contact: </label>
                        <input type="number" placeholder="" />
                    </div>
                </form>

                <button onClick={submit}>SUBMIT</button>
            </footer>
        </div>
    );
}

export default Footer;
