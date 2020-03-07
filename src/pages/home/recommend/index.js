import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { Tag } from "@components";
import defaultAvatar from "@assets/default-avatar.png";
import "./index.scss";

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    return (
      <View className="home-recommend">
        <View className="home-recommend__title">
          <Text className="home-recommend__title-txt">为你推荐</Text>
        </View>
        <View className="home-recommend__list">
          {list
            .filter(item => item.type === 1)
            .map(item => {
              const { id, categoryItem } = item;
              return (
                <View key={id} className="home-recommend__list-item">
                  <Image
                    className="home-recommend__list-item-img"
                    src={categoryItem.listPicUrl}
                  />
                  {!!categoryItem.simpleDesc &&
                    !categoryItem.simpleDescClose && (
                      <Text className="home-recommend__list-item-desc">
                        {categoryItem.simpleDesc}
                      </Text>
                    )}
                  <View className="home-recommend__list-item-info">
                    <Text
                      className="home-recommend__list-item-name"
                    >
                      {categoryItem.name}
                    </Text>

                    <View className="home-recommend__list-item-price-wrap">
                      <Text className="home-recommend__list-item-price">
                        ¥
                        {categoryItem.activityPrice || categoryItem.retailPrice}
                      </Text>
                      {!!categoryItem.activityPrice && (
                        <Text className="home-recommend__list-item-price--origin">
                          ¥{categoryItem.retailPrice}
                        </Text>
                      )}
                    </View>

                  </View>
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}
