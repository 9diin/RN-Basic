import { Tabs } from "expo-router";
import { Home, Search } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    height: 40,
                    paddingTop: 4,
                    paddingBottom: 4,
                },
                tabBarLabelStyle: {
                    marginTop: 2,
                },
            }}
        >
            <Tabs.Screen name="index" options={{ title: "홈", headerShown: false, tabBarIcon: ({ color }) => <Home size={20} color={color} /> }} />
            <Tabs.Screen name="search" options={{ title: "검색", headerShown: false, tabBarIcon: ({ color }) => <Search size={20} color={color} /> }} />
            <Tabs.Screen name="test" options={{ title: "검색", headerShown: false, tabBarIcon: ({ color }) => <Search size={20} color={color} /> }} />
        </Tabs>
    );
}
