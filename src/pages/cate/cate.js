import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import { Loading } from "@components/loading";
import { connect } from "@tarojs/redux";
import * as actions from "../../actions/cate";
import { getWindowHeight } from "@utils/style";
import Menu from "./menu/index";
import "./cate.scss";

@connect(state => state.cate, { ...actions })
class Index extends Component {
  config = {
    navigationBarTitleText: "分类"
  };
  constructor(props) {
    super(props);
    this.state = {
      current: -1,
      loaded: false,
      loading: false
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentDidMount() {
    console.log(this.props, 9999999);
    this.props.dispatchMenu().then(res => {
      this.setState({
        loaded: true,
        current: res.categoryList[0].id
      });
    });
  }

  handleMenu = id => {
    this.setState({ loading: true }, () => {
      this.setState({ current: id, loading: false });
    });
  };
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { menu, category } = this.props;
    const { current, loading } = this.state;
    const height = getWindowHeight();
    if (!this.state.loaded) {
      return <Loading />;
    }
    return (
      <View className="cate">
        <ScrollView scrollY style={{ height }} className="cate__menu">
          <Menu current={current} list={menu} onClick={this.handleMenu}></Menu>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
