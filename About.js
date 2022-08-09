import './style.css'
function About() {
    const pic5 = "https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=600"
    const pic6 = "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
    return (
        <div className="check2 container-fluid">
            <h1>About Us Page</h1>
            <p>vikash.portf.com is i new website which is designed to support people in software developing.
                Search for Redis Wikipedia info. Research & compare results on vikash.portf.com online today. Find all the information you need for Redis Wikipedia online on Alot.com. Search now!
                Comprehensive Information · Highly Relevant Results
                Types: Search Online</p>
            <img src={pic5} class="img-fluid" alt="..." />
            <img src={pic6} class="img-fluid" alt="..." />
            <div>I am Vikash - a software developer with 1 year of experience. I care alot about using dessign for positive impact.
            </div>
            <div>I have passed matrices and intermediate from Bseb board.Now I am currently persueing Btech from Nit Patna.</div>
            <div>I am software engineer and developer. you can contact me after filling contact us page.</div>
            <h2>Thank You</h2>
        </div>
    )
}
export default About
