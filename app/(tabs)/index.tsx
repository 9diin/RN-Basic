import { SearchCard } from "@/src/components/card";
import { useLocation } from "@/src/hooks/use-location";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const { data, loading, fetchData } = useLocation();
    const [keyword, setKeyword] = useState<string>("");

    useEffect(() => {
        fetchData(keyword);
    }, []);

    // 검색
    const handleSearch = () => fetchData(keyword);

    return (
        <View className="relative w-full h-full p-4 gap-4">
            {/* 검색창 UI */}
            <View className="flex-row items-center gap-2">
                <View className="h-12 flex-1 flex-row items-center gap-2 px-2 border border-neutral-200 rounded-lg shadow-xs bg-white">
                    <Search size={20} color={"#d4d4d4"} />
                    <TextInput placeholder="검색어를 입력하세요." value={keyword} onChangeText={setKeyword} onSubmitEditing={handleSearch} className="w-full" />
                </View>
                <Pressable className="w-16 h-12 flex-row items-center justify-center bg-white rounded-lg border border-neutral-200" onPress={handleSearch}>
                    <Text>검색</Text>
                </Pressable>
            </View>
            {loading ? (
                <ActivityIndicator size="large" color="#4B5563" />
            ) : data === undefined ? (
                <View className="w-full h-full items-center justify-center">
                    <Text className="text-neutral-400 text-xl">검색어를 입력하세요.</Text>
                </View>
            ) : (
                <FlatList data={data} renderItem={({ item }) => <SearchCard props={item} />} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} />
            )}
        </View>
    );
}
