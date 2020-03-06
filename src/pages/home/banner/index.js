import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";

export default class SwiperBanner extends Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    console.log("list: ", list);
    return (
      <View>
        <View className="home-banner">
          <Swiper
            circular
            autoplay
            indicatorDots
            indicatorColor="#999"
            indicatorActiveColor="#333"
            className="home-banner__swiper"
          >
            {list.map(item => (
              <SwiperItem key={item.rank} className="home-banner__swiper-item">
                <Image
                  src={item.img}
                  className="home-banner__swiper-item-img"
                ></Image>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
}
