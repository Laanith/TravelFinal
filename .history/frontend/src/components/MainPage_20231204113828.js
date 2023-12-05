function MainPage(props) {


    return (<div className="text-black">
        {props.user.email}
    </div>);
}

export default MainPage;