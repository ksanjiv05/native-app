import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const SliderWidth = Dimensions.get("screen").width;
const CourosoleHomeScreen = () => {
  const [activeIndex, setActivateIndex] = useState(0);
  const [carouselState, setCarouselState] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  const _onPressCarousel = (index) => {
    // here handle carousel press
    //this.carouselRef.current.snapToItem(index);
    alert("pressed");
  };

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          _onPressCarousel(index);
        }}
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          width: Dimensions.get("screen").width - 30,
          height: (Dimensions.get("screen").height * 2) / 8,
          marginVertical: 8,
          marginHorizontal: 8,
          overflow: "hidden",
        }}>
        <Image
          style={{ flex: 1 }}
          source={{
            uri:
              "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
          }}
        />
      </TouchableOpacity>
    );
  };

  const _renderItem2 = ({ item, index }, parallaxProps) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          width: Dimensions.get("screen").width - 30,
          height: (Dimensions.get("screen").height * 2) / 8,
          marginVertical: 8,
          marginHorizontal: 8,
          overflow: "hidden",
        }}>
        <ParallaxImage
          source={{
            uri:
              "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.8}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          sanjiv
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cards}>
        <Carousel
          layout={"default"}
          //ref={this.carouselRef}
          data={carouselState}
          sliderWidth={SliderWidth}
          itemWidth={SliderWidth}
          renderItem={_renderItem}
          useScrollView
          onSnapToItem={(index) => setActivateIndex(index)}
          activeSlideAlignment="center"
        />
      </View>
      <View style={styles.cards}>
        <Carousel
          sliderWidth={SliderWidth}
          itemWidth={SliderWidth}
          data={carouselState}
          renderItem={_renderItem2}
          hasParallaxImages={true}
        />
      </View>
      <View style={styles.cards}></View>
      <View style={styles.cards}></View>
      <View style={styles.cards}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 2 + 25,
    marginHorizontal: 5,
  },
  cards: {
    height: (Dimensions.get("screen").height * 2) / 7.5,
    // flex: 1,
    // backgroundColor: "red",
    marginVertical: 5,
  },
  item: {
    width: Dimensions.get("screen").width - 60,
    height: Dimensions.get("screen").width - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
export default CourosoleHomeScreen;
