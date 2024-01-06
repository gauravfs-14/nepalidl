import * as React from "react";
import { WebView } from "react-native-webview";
import LoadingSpinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "expo-router";

export default function likhitB() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Likhit B",
    });
  }, [navigation]);

  return (
    <>
      <LoadingSpinner visible={isLoading} />
      <WebView
        source={{
          uri: "https://drive.google.com/file/d/1S_E-yU96K0Qte7lwk1ATWNQWnQonrFbo/view",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
