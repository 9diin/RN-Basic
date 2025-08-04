import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import "./global.css";

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#121212",
        background: "#f9f9f9",
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={appTheme}>
            <SafeAreaView className="w-full h-full">
                <Slot />
            </SafeAreaView>
        </ThemeProvider>
    );
}
