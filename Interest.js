function Interest() {
    const pic1 = "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg"
    const pic2 = "https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204__340.png"
    const pic3 = "https://cdn.pixabay.com/photo/2013/07/13/09/46/cricket-155965__340.png"
    return (
        <>
            <h1>Interests</h1>
            <hr />
            <img src={pic1} class="rounded float-start img-fluid" alt="..." />
            <img src={pic2} class="rounded float-end img-fluid" alt="..." />
            <img src={pic3} class="rounded mx-auto d-block img-fluid" alt="..." />
        </>
    )
}
export default Interest
