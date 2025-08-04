import { Text, View } from "react-native";

interface Props {
    label: string;
}

export function Chip({ label }: Props) {
    return (
        <View className="w-fit h-fit bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-md">
            <Text className="text-xs">{label}</Text>
        </View>
    );
}
