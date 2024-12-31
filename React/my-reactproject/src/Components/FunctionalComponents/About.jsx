const About=(props)=>{
    var styling={
        fontSize:"50px",
        color:"blue",
        textAlign:"center"
    }
    return(
    <section>
        <h1>This is my About Page</h1>
        <h2 style={styling}>Learning Props</h2>
        <h2>I am Studing in {props.college} college</h2>
        <h2>Others Colleges :{props.clg1},{props.clg2}</h2>
    </section>
    );
}
export default About;
/*if i want to use java script use curly braces in html code*/