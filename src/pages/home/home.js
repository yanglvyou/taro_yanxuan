import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { Loading } from "@components/loading";
import { connect } from "@tarojs/redux";
import * as actions from "@action/home";
// import { dispatchCartNum } from "@actions/cart";
// import { getWindowHeight } from "@utils/style";
// import Banner from "./banner";
// import Policy from "./policy";
// import Pin from "./pin";
// import Operation from "./operation";
// import Manufactory from "./manufactory";
// import FlashSale from "./flash-sale";
// import Popular from "./popular";
// import Category from "./category";
// import Recommend from "./recommend";
import searchIcon from "./assets/search.png";
import "./home.scss";

const RECOMMEND_SIZE = 20;

@connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: "网页严选"
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      lastItemId: 0,
      hasMore: true
    };
  }

  componentDidMount() {
    console.log(this.props, 77777777);
    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true });
    });
    this.props.dispatchSearchCount();
  }

  render() {
    const { homeInfo, searchCount, recommend, pin } = this.props;
    if (!this.state.loaded) {
      return <Loading></Loading>;
    }
    return (
      <View className="home">
        <View className="home__search">
          <View className="home__search-wrap">
            <Image className="home__search-img" src={searchIcon}></Image>
            <Text className="home__search-txt">{`搜索商品，共${searchCount}款好物`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
