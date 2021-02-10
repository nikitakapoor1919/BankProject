import React from "react";
import ReactDOM from "react-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import SimpleImageSlider from "react-simple-image-slider";

export default class ImageSlider extends React.Component {
    listSubHeader = <ListSubheader><h1>Slider Settings</h1></ListSubheader>;
    toggleOptions = ["useGPURender", "showNavs", "showBullets"];

    images = [
        { url: "https://paysend.com/images/BL022_01_01_1200.png" },
        { url: "https://www.wikihow.com/images/6/6a/Make-a-Bank-Transfer-Payment-Step-14.jpg" },
        { url: "https://kamagrauk24.com/wp-content/uploads/2019/06/aid1367699-v4-728px-Make-a-Bank-Transfer-Payment-Step-6.jpg" },
    ];

    constructor() {
        super();
        this.state = {
            useGPURender: true,
            showNavs: true,
            showBullets: true,
            navStyle: 1,
            slideDuration: 0.5,
            bgColor: "#000000",
            slideIndexText: "",
        };
    }

    componentDidMount() {
        console.log("[App componentDidMount]");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App componentDidUpdate]");
    }

    onClick = (idx, event) => {
        console.log(`[App onClick] ${idx} ${event.target}`);
    }

    onClickNav = (toRight) => {
        console.log(`[App onClickNav] ${toRight}`);
    }

    onClickBullets = (idx) => {
        console.log(`[App onClickBullets] ${idx}`);
    }

    onStartSlide = (idx, length) => {
        console.log(`[App onStartSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}`});
    }

    onCompleteSlide = (idx, length) => {
        console.log(`[App onCompleteSlide] ${idx}/${length}`);
        this.setState({ slideIndexText: `${idx} / ${length}`});
    }

    onToggleOptions = value => () => {
        console.log(`[App onToggleOptions] ${value}`);
        const updateValue = !this.state[value];
        this.setState({ [value]: updateValue });
    }

    onChangeSelect = event => this.setState({ [event.target.name]: event.target.value });

    render() {
        const slideText = this.state.slideIndexText || `${1} / ${this.images.length}`;

        return (
            <div style={{ textAlign: "center",marginBottom:100 }}>
                <SimpleImageSlider
                    style={{ margin: "0 auto", marginTop: "50px" }}
                    width={700}
                    height={404}
                    images={this.images}
                    showBullets={this.state.showBullets}
                    showNavs={this.state.showNavs}
                    useGPURender={this.state.useGPURender}
                    navStyle={this.state.navStyle}
                    slideDuration={this.state.slideDuration}
                    onClick={this.onClick}
                    onClickNav={this.onClickNav}
                    onClickBullets={this.onClickBullets}
                    onStartSlide={this.onStartSlide}
                    onCompleteSlide={this.onCompleteSlide}
                />

                <div style={{ margin: "10px" }}>
                    {slideText}
                </div>

            </div>
        );
    }
}
