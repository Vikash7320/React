function Contact() {
    return (
        <>
            <h1>Contact Us Page</h1>
            <p>vikash.portf.com is a new portfolio website which is designed to support int the field of software developing.
                Search for Redis Wikipedia info. Research & compare results on vikash.portf.com online today. Find all the information you need for Redis Wikipedia online on vikash.portf.com. Search now!
                Comprehensive Information · Highly Relevant Results
                Types: Search Online</p>
            <form>
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Your Full Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputphone1" class="form-label">Mobile No</label>
                    <input type="tel" class="form-control" id="exampleInputphone1" aria-describedby="emailHelp" pattern="[+]{1}[0-9]{11,14}" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Contact
