import * as React from "react";
import { WebView } from "react-native-webview";
import LoadingSpinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "expo-router";

export default function likhitAK() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: "Likhit A/ K",
    });
  }, [navigation]);

  return (
    <>
      <LoadingSpinner visible={isLoading} />
      <WebView
        source={{
          uri: "https://drive.google.com/file/d/1D9UBJLsIMfGaGJRrxwlR6Q_R1DSX8Mgw/view",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
