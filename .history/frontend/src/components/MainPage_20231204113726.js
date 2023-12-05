function MainPage(props) {
    console.log(props.user);


    return (<div className="text-black">
        {props.user.email}
    </div>);
}

export default MainPage;