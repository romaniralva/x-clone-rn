import SignOutButton from "@/components/SignOutButton";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};
export default HomeScreen;
