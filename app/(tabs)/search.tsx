import { BlogCard } from "@/src/components/card";
import { useBlogs } from "@/src/hooks";
import { useAxisStore, useKeywordStore } from "@/src/stores";
import { MapPinHouse } from "lucide-react-native";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function SearchScreen() {
    const keyword = useKeywordStore((state) => state.keyword);
    const mapx = useAxisStore((state) => state.mapx);
    const mapy = useAxisStore((state) => state.mapy);

    const { blogs, fetchData } = useBlogs();

    useEffect(() => {
        fetchData(keyword);
    }, [keyword]);

    const HTML = `
        <!doctype html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
                <script type="text/javascript" src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.EXPO_PUBLIC_NCP_KEY_ID}"></script>
            </head>
            <body>
                <div id="map" style="width: 100%; height: 320px"></div>

                <script>
                    const mapOptions = {
                        center: new naver.maps.LatLng(${mapy || 37.5665}, ${mapx || 126.978}),
                        zoom: 16,
                    };
                    const map = new naver.maps.Map("map", mapOptions);
                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(${mapy || 37.5665}, ${mapx || 126.978}),
                        map: map,
                    });
                </script>
            </body>
        </html>
    `;

    return (
        <View className="w-full h-full p-4 gap-4">
            <View>
                <MapPinHouse />
                <View className="bg-white px-4 py-2 rounded-md border border-neutral-100">
                    <Text className="text-2xl font-semibold">{keyword.replace(/<[^>]+>/g, "")}</Text>
                </View>
            </View>
            <View className="w-full h-80">
                <WebView source={{ html: HTML, baseUrl: "http://localhost:8081" }} originWhitelist={["*"]} javaScriptEnabled domStorageEnabled />
            </View>
            <FlatList data={blogs} renderItem={({ item }) => <BlogCard props={item} />} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
        </View>
    );
}
